import "server-only";

import { curatedPlaylist } from "@/config/spotifyPlaylist";

export type SpotifyTrack = {
  isPlaying: boolean;
  title: string | null;
  artist: string | null;
  album: string | null;
  albumImageUrl: string | null;
  spotifyUrl: string | null;
};

type SpotifyApiTrack = {
  name: string;
  artists: { name: string }[];
  album: {
    name: string;
    images?: { url: string }[];
  };
  external_urls?: {
    spotify?: string;
  };
};

type SpotifyApiResponse = {
  is_playing?: boolean;
  item?: SpotifyApiTrack | null;
};

type SpotifyTokenResponse = {
  access_token: string;
};

const EMPTY_TRACK: SpotifyTrack = {
  isPlaying: false,
  title: null,
  artist: null,
  album: null,
  albumImageUrl: null,
  spotifyUrl: null,
};

function getCuratedTrack(): SpotifyTrack {
  if (!curatedPlaylist || curatedPlaylist.length === 0) {
    return EMPTY_TRACK;
  }

  // Rotate track naturally every 3.5 minutes (210,000 ms)
  const ROTATION_INTERVAL_MS = 210 * 1000;
  const index =
    Math.floor(Date.now() / ROTATION_INTERVAL_MS) % curatedPlaylist.length;
  const track = curatedPlaylist[index];

  return {
    ...track,
    isPlaying: true,
  };
}

async function getAccessToken(): Promise<string | null> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    return null;
  }

  try {
    const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString(
      "base64"
    );

    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const data: SpotifyTokenResponse = await response.json();
    return data.access_token ?? null;
  } catch {
    return null;
  }
}

function formatTrack(track: SpotifyApiTrack, isPlaying: boolean): SpotifyTrack {
  return {
    isPlaying,
    title: track.name,
    artist: track.artists.map((artist) => artist.name).join(", "),
    album: track.album.name,
    albumImageUrl: track.album.images?.[0]?.url ?? null,
    spotifyUrl: track.external_urls?.spotify ?? null,
  };
}

export async function getSpotifyTrack(): Promise<SpotifyTrack> {
  try {
    const accessToken = await getAccessToken();

    if (accessToken) {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      const currentResponse = await fetch(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers,
          cache: "no-store",
        }
      );

      if (currentResponse.status === 200) {
        const data: SpotifyApiResponse = await currentResponse.json();

        if (data.is_playing && data.item) {
          return formatTrack(data.item, true);
        }
      }

      const recentResponse = await fetch(
        "https://api.spotify.com/v1/me/player/recently-played?limit=1",
        {
          headers,
          cache: "no-store",
        }
      );

      if (recentResponse.ok) {
        const recentData: {
          items?: { track: SpotifyApiTrack }[];
        } = await recentResponse.json();

        const lastTrack = recentData.items?.[0]?.track;

        if (lastTrack) {
          return formatTrack(lastTrack, false);
        }
      }
    }
  } catch {
    // If Spotify API call fails or encounters network issue, fallback smoothly to curated playlist
  }

  // Graceful fallback to the rotating curated playlist from your Spotify playlist
  return getCuratedTrack();
}
