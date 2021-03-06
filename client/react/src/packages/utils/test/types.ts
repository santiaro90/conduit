import { RenderResult as RTLRenderResult } from 'react-testing-library';

import { ConduitEnv } from 'packages/config/types';
import { ConduitStore } from 'packages/core/types';

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export type Scope = import('nock').Scope;

type Queries = {
  getByName: (name: string) => HTMLElement | null;
};

export type RenderResult = RTLRenderResult & {
  store: ConduitStore;
} & { [Q in keyof Queries]: Queries[Q] };

export type PageObject = {
  component: RenderResult;
};

export type FormPageObject<T> = PageObject & {
  fillInput: (name: string, value: string) => FormPageObject<T>;
  submit: () => FormPageObject<T>;
} & { [Q in keyof T]: T[Q] };

type Env = ConduitEnv;

export type LocalStorage = Partial<Storage> & {
  keys: { [key: string]: string };
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      env: Env;
      localStorage: LocalStorage;
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
