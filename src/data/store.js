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
      done: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  console.log();

  // if (action.type === "TASK_TEXT_STYLE") {
  //   const newTasksDone = [];
  //   return {

  //     newTasksDone: state.tasks.map((redux) => {
  //       if (redux.id === action.id) {
  //         state.tasks.done = !state.tasks.done;
  //       }
  //       return redux;
  //     }),

  //     tasks: newTasksDone
  //   };

  // }

  // const newTasksDone = state.tasks.map((redux) => {
  //        if (redux.id === action.id) {
  //          state.tasks.done = !state.tasks.done;
  //        }
  //        return redux;
  //      });

  //      state.tasks= newTasksDone;

  // checkDone = (id) => {
  //   const newTasksDone = this.state.tasksRecieved.map((tasksRecieved) => {
  //     if (tasksRecieved.id === id) {
  //       tasksRecieved.done = !tasksRecieved.done;
  //     }
  //     return tasksRecieved;
  //   });
  //   this.setState({
  //     tasksRecieved: newTasksDone,
  //   });
  // };

  return state;
};

export default createStore(reducer);
