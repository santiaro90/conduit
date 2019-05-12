export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export type Scope = import('nock').Scope;

export type DOMQueryResult = {
  baseElement: HTMLElement | null;
  container: HTMLElement | null;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      env: import('types').ConduitEnv;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R> {
      toReplyToAllRequests(): R;
      toReplyToRequest(path: string, method: RequestMethod): R;
    }
  }
}
