import { ADD_TASK, TOGGLE_DONE, EDIT_TASK, REMOVE_TASK } from "../constants/taskConstants";

const initialState = {
  tasks: [],
};

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

const taskReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id: generateId(), description: action.payload.description, isDone: false }]
      };
    case TOGGLE_DONE:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        )
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, description: action.payload.description } : task
        )
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    default:
      return state;
  }
};

export default taskReducer;
