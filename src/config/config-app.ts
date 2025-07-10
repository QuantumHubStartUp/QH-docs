export class ConfigApp {
  static APP_URL =
    process.env.NODE_ENV === 'production' ? 'https://qh-docs.netlify.app' : 'http://localhost:5173';
  static VERSION = '1.0.1';
}
