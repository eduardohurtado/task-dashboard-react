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
  console.log(state.tasks);

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
  }

  return state;
};

export default createStore(reducer);
