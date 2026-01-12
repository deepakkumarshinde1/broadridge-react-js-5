export let initialCounterState = {
  counter0: 0,
  counter1: 10,
  counter2: 100,
  counter3: 1000,
};
export function counterReducer(state, action) {
  let { type, payload } = action;

  switch (type) {
    case "COUNT_ZERO":
      return { ...state, counter0: state.counter0 + 1 };
    case "COUNT_ONE":
      return { ...state, counter1: state.counter1 + 1 };
    case "COUNT_TWO":
      return { ...state, counter2: state.counter2 + 1 };
    case "COUNT_THREE":
      return { ...state, counter3: state.counter3 + 1 };
    default:
      return { ...state };
  }
}
