import React, { PureComponent } from "react";
// import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { addtodo, changeStatus } from "../action/TodoAction";
import { setVisiableFilter, FilterType } from "../action/FilterAction";

class TodoList extends PureComponent {
  changeCompletedStatus = (e) => {
    this.props.changeStatus(e.target.getAttribute("data-index"));
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => (
            <li
              key={todo.id}
              data-index={todo.id}
              onClick={this.changeCompletedStatus}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// 使用 PropTypes 进行类型检查
// TodoList.prototype = {
//     todos: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         completed: PropTypes.bool.isRequired,
//         text: PropTypes.string.isRequired
//       }).isRequired).isRequired
// }

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case FilterType.All:
      return todos;
    case FilterType.Completed:
// filter函数可以看成是一个过滤函数，返回符合条件的元素的数组
// filter需要在循环的时候判断一下是true还是false，是true才会返回这个元素；
// filter()接收的回调函数，其实可以有多个参数。通常我们仅使用第一个参数，表示Array的某个元素。回调函数还可以接收另外两个参数，表示元素的位置和数组本身：
      // 去掉数组中不符合项
      return todos.filter((t) => t.completed);
    case FilterType.Active:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
}


// 监听
function mapStateToProps(state) {
  return {
    //combineReducers合并个各个reducer,所以不同的reducer数据在对应的reducer下面。各个reducer中返回的新的state
    todos: getVisibleTodos(state.TodoReducer, state.visiableFilter),
  };
}

//监听addtodo，将结果返回到mapStateToProps方法里面去
export default connect(mapStateToProps, {
  addtodo,
  setVisiableFilter,
  changeStatus,
})(TodoList);
