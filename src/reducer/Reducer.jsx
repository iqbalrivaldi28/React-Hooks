import { ActionType } from './ActionType';

export function reducer(state, action) {
  switch (action.type) {
    case ActionType.INCREMENT:
      return { count: state.count + action.payload };
    case ActionType.DECREMENT:
      return { count: state.count - 1 };
  }
}
