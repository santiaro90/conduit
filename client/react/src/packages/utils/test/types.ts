export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type Scope = import('nock').Scope;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      env: import('../../../types').ConduitEnv;
      mockApi: Scope;
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
