import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addtodo } from "../action/TodoAction";

class AddTodo extends PureComponent {
  handlePost = (e) => {
    e.preventDefault();
    if (!this.inputValue.value.trim()) {
      return;
    }
    //在此做提交操作，比如发dispatch等......
    // dispatch(action)触发监听事件
    this.props.dispatch(addtodo(this.inputValue.value))
    this.inputValue.value = "";
  };

  render() {
    return (
      <div>
        <div>
          <input ref={(input) => (this.inputValue = input)} />
          <button onClick={this.handlePost}>Add Todo</button>
        </div>
      </div>
    );
  }
}


export default connect()(AddTodo);
