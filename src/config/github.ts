export const githubConfig = {
  username: "rishiii183",
  githubLink: "https://www.github.com/rishiii183",
  subtitle: "proof of progress",
  blockSize: 11,
  blockMargin: 3,
  fontSize: 12,
  maxLevel: 4,

  months: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  weekDays: ["", "M", "", "W", "", "F", ""],
  totalCountLabel: `{{count}} contributions in the last year`,
  theme: {
    dark: [
      "rgb(22, 27, 34)", // No contributions
      "rgb(74, 32, 16)", // Deep amber
      "rgb(180, 83, 9)", // Rich orange
      "rgb(249, 115, 22)", // Vibrant orange
      "rgb(255, 180, 75)", // Radiant glowing orange
    ],
    light: [
      "rgb(235, 237, 240)", // Light gray
      "rgb(254, 215, 170)", // Light peach orange
      "rgb(251, 146, 60)", // Medium orange
      "rgb(234, 88, 12)", // Bright dark orange
      "rgb(154, 52, 18)", // Deep burnt orange
    ],
  },

  errorState: {
    title: "Unable to load GitHub Contributions",
    description: "Check out my profile directly for the latest activity",
    buttonText: "View on GitHub",
  },

  loadingState: {
    title: "Loading GitHub activities...",
    description: "Fetching contributions from GitHub",
  },
};
