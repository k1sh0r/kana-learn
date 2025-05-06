interface OctobotConfig {
  botId: string;
  companyId: string;
}

interface Octobot {
  config: OctobotConfig;
}

declare global {
  interface Window {
    Octobot: Octobot;
  }
}

export {};
