import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionTypes";
export const addTodo = (message) => ({
  type: ADD_TODO,
  message,
});




// import { ADD_TODO} from "./actionTypes";

// let nextTodoId = 0;

// export const addTodo = content => ({
//   type: ADD_TODO,
//   payload: {
//     id: ++nextTodoId,
//     content
//   }
// });




