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
  // console.log("ID= " + state.tasks[1].id);

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
  } else if (action.type === "ADD_NEW_TASK") {
    const newTask = {
      id: state.tasks.length,
      // id: id = () => {
      //   // var i = 0;
      //   var idFree = 0;
      //   var flag = false; //This flag controls if the id is taked by another component.
      //   var arrayIdRedux = [];

      //   function checkIdIsFree(id) {
      //     return id !== idFree;
      //   }

      //   for (let i = 0; i < state.tasks.length; i++) {
      //     arrayIdRedux[i] = state.tasks[i].id;
      //   }

      //   do {
      //     flag = arrayIdRedux.every(checkIdIsFree);
      //     idFree += 1;
      //   } while (flag === false);
      //   flag = false;
      //   return idFree;
      // },
      title: action.title,
      description: action.description,
    };
    return {
      ...state,

      tasks: [...state.tasks, newTask],
    };
  }

  return state;
};

export default createStore(reducer);
