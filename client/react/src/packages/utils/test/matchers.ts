import { RequestMethod, Scope } from './types';

export function toReplyToAllRequests(
  this: jest.MatcherUtils,
  api: Scope
): jest.CustomMatcherResult {
  const hint = this.utils.matcherHint('.toReplyToAllRequests', 'mockApi', '');
  const pass = api.isDone();

  const message = pass
    ? (): string => `${hint}\n\nExpected api not to reply to all requests`
    : (): string =>
        hint +
        '\n\nExpected api to reply to all requests.' +
        '\n\nPending requests:' +
        '\n' +
        this.utils.printExpected(api.pendingMocks().join('\n'));

  return { message, pass };
}

export function toReplyToRequest(
  this: jest.MatcherUtils,
  api: Scope,
  path: string,
  method: RequestMethod = 'GET'
): jest.CustomMatcherResult {
  const hint = this.utils.matcherHint('.toReplyToRequest', 'mockApi', path, {
    secondArgument: method,
  });

  const matchesPath = (mock: string): boolean => mock.includes(method) && mock.includes(path);
  const pass = !api.pendingMocks().some(matchesPath);

  const message = pass
    ? (): string => hint + `\n\nExpected api not to have replied to '${method} ${path}'`
    : (): string => hint + `\n\nExpected api to have replied to '${method} ${path}'`;

  return { message, pass };
}
