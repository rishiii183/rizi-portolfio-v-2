export async function GET(req: Request) {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REDIRECT_URI } =
    process.env;

  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REDIRECT_URI) {
    return Response.json(
      { error: "Spotify environment variables missing" },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const spotifyError = searchParams.get("error");

  if (spotifyError) {
    return Response.json({ error: spotifyError }, { status: 400 });
  }

  if (!code) {
    return Response.json(
      { error: "No authorization code provided" },
      { status: 400 }
    );
  }

  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString(
          "base64"
        ),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: SPOTIFY_REDIRECT_URI,
    }),
    cache: "no-store",
  });

  const data = await tokenRes.json();

  if (!tokenRes.ok) {
    console.error("Spotify token exchange failed:", data.error);
    return Response.json(
      { error: "Failed to exchange Spotify authorization code", details: data },
      { status: 502 }
    );
  }

  // Auto-save the new refresh token directly into .env.local in development
  if (data.refresh_token) {
    try {
      const fs = await import("fs");
      const path = await import("path");
      const envPath = path.resolve(process.cwd(), ".env.local");
      if (fs.existsSync(envPath)) {
        let envContent = fs.readFileSync(envPath, "utf8");
        if (envContent.includes("SPOTIFY_REFRESH_TOKEN=")) {
          envContent = envContent.replace(
            /SPOTIFY_REFRESH_TOKEN=.*/,
            `SPOTIFY_REFRESH_TOKEN=${data.refresh_token}`
          );
        } else {
          envContent += `\nSPOTIFY_REFRESH_TOKEN=${data.refresh_token}\n`;
        }
        fs.writeFileSync(envPath, envContent, "utf8");
        process.env.SPOTIFY_REFRESH_TOKEN = data.refresh_token;
      }
    } catch (err) {
      console.error("Could not auto-save .env.local:", err);
    }
  }

  return Response.redirect(new URL("/?spotify=connected", req.url));
}
