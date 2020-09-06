import { createStore } from "redux";

//Initial state
const initialState = {
  tasks: [
    {
      id: 0,
      title: "BUY GROCERIES",
      description: "Buy 2 eggs, 3 carrots and one liter of milk.",
      done: false,
    },
    {
      id: 1,
      title: "CALL MOM :)",
      description: "Don't forget to call mom at 14:00h.",
      done: false,
    },
    {
      id: 2,
      title: "FINISH THE ESSAY",
      description: "Collect the remaining information.",
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
  } else if (action.type === "ADD_NEW_TASK") {
    function findFreeId() {
      var idFree = 0;
      var flag = false; //This flag controls if the id is taked by another component.
      var arrayTaskIdRedux = [];

      function checkIdIsFree(id) {
        return id !== idFree;
      }

      for (let i = 0; i < state.tasks.length; i++) {
        arrayTaskIdRedux[i] = state.tasks[i].id;
      }

      do {
        flag = arrayTaskIdRedux.every(checkIdIsFree);
        if (flag === false) {
          idFree += 1;
        }
      } while (flag === false);
      flag = false;
      return idFree;
    }

    const newTask = {
      //id: state.tasks.length,
      id: findFreeId(),
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
