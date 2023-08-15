/**
 * @description Redux Logger
 * @param {*} store
 * @returns
 */

export type Action = { type: string; payload: object };

export const redux_logger =
  (store: object | any) =>
  (next: (action: Action) => void) =>
  (action: Action) => {
    console.group(action.type);
    console.log(
      '%c prev state',
      'background: #222; color: #bada55',
      store.getState()
    );
    console.info('%c dispatching', 'background: #222; color: #ba55da', action);
    let result = next(action);
    console.log(
      '%c next state',
      'background: #222; color: #55bada',
      store.getState()
    );
    console.groupEnd();
    return result;
  };
