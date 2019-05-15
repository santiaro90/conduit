import { RenderResult } from 'react-testing-library';

import { ConduitEnv } from 'packages/config/types';
import { ConduitStore } from 'packages/core/types';

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export type Scope = import('nock').Scope;

export type DOMQueryResult = {
  baseElement: HTMLElement | null;
  container: HTMLElement | null;
};

export type RenderResult = RenderResult & {
  store: ConduitStore;
};

type Env = ConduitEnv;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      env: Env;
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
