// action 只是说明了要去做什么，和做这件事情需要的参数值。
// 具体去改变 store 中的 state 是由 reducer 来做的。
import actionType from "./actionType";

let nextTodoId = 0
export const addtodo = (value) => {
  return {
    type: actionType.AddTodo,
    id : nextTodoId++,
    text : value,
    completed : false
  };
};

export const changeStatus = (id) => {
  console.log("id：" + id)
  return {
    type: actionType.ChangeStatus,
    id: id,
  }
}
