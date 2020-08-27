import { createStore } from "redux";

//Data
// import tasks from "./tasks.json";

//Initial state
const initialState = {
    tasks: [
        {
            id: 0,
            title: "INITIAL STATE REDUX",
            description: "Testing the initial state [REDUX].",
            done: false
          }
    ]
}

const reducer = (state = initialState, action) => {
  return state;
};

export default createStore(reducer);
