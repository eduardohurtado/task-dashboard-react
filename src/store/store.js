import { createStore } from "redux";

//Initial state
const initialState = {
  tasks: [
    {
      id: 0,
      title: "INITIAL STATE REDUX #1",
      description: "Testing the initial state [REDUX].",
      done: false,
    },
    {
      id: 1,
      title: "INITIAL STATE REDUX #2",
      description: "Testing the initial state [REDUX].",
      done: false,
    },
    {
      id: 2,
      title: "INITIAL STATE REDUX #3",
      description: "Testing the initial state [REDUX].",
      done: false,
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  if (action.type === "TASK_TEXT_STYLE") {
    return {
      ...state,

      tasks: state.tasks.map((e) => {
        if (e.id === action.id) {
          e.done = !e.done;
        }
        return e;
      }),
    };
  } else if (action.type === "TASK_DELETE") {
    return {
      ...state,

      tasks: state.tasks.filter((e) => e.id !== action.id),
    };
  }

  return state;
};

export default createStore(reducer);
