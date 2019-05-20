export type ConduitEnv = {
  REACT_APP_API_BASE_URL: string;
  REACT_APP_API_VERSION: string;
  REACT_APP_API_URL: string;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ProcessEnv extends ConduitEnv {}
  }
}
