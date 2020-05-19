// action 只是说明了要去做什么，和做这件事情需要的参数值。
// 具体去改变 store 中的 state 是由 reducer 来做的。
// reducer 其实是一个包含 switch 的函数，前面不是说组件触发的 action 会传递到 reducer，reducer 接收这个参数 action，他通过 switch(action.type) 然后做不同操作，前面说了，这个 type 是指令的标识，reducer 根据这个标识来作出不同的操作。
// 这个操作是什么呢？
// reducer 还接收另一个参数 state，这个是旧的 state。从 action 里面还可以获取到做这个操作需要的 参数值。
// 这个操作其实就是对原有的 state 和 从 action 中的到的值，来进行操作（结合，删除，...）然后返回一个 新的 state 到 store。


// 数据流
// 把前面的语言组织一下，整个操作的数据流其实是这样的：
// store 把整个应用的 state，getState()，dispatch()，subscribe() 传给顶层容器组件；
// 容器组件和三个部分交互：
// 内部的展示组件：容器把状态分发给各个组件，把 dispatch（操作数据的函数）以回调的形式分发给各个组件；
// action：容器获取 action；
// reducer：容器可以调用 dispatch(action)，这个上面说了，会以回调的形式给下面的子组件，这样就可以根据不同的用户操作，调用不同的 dispatch(action)，执行了这个函数之后，就把 action 传给 reducer，然后看 reducer；
// reducer 得到容器组件传来的 action 之后，根据 action.type 这个参数执行不同操作，他还会接收到 store 里面的原 state，然后把原 state 和 action 对象里面的其它参数进行操作，然后 return 一个新的对象。
// reducer return 一个新的对象到 store，store 根据这个新对象，更新应用状态。
// －－－－一个循环 ♻️

import actionType from "../action/actionType";

let initState = []

export default function TodoReducer(state = initState, action) {
  // const {count} = state;
  switch (action.type) {
    case actionType.AddTodo:
      return [
        ...state,
        {
          id : action.id,
          text : action.text,
          completed : action.completed
        }
      ];
    case actionType.ChangeStatus:
      // debugger
      // let new_state = []
      // for(let i = 0; i < state.length; i++ ) {
      //     let todo = state[i];
      //     if (todo.id === action.id) {
      //      todo.completed = !todo.completed 
      //     }
      //     new_state.push(todo)
      // }
      // state = new_state;
      // return state;
      return state.map(todo =>
        (todo.id === action.id-0)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    // case actionType.All:
    //   return {
    //     ...state,
    //     count: state.count - action.payload.num,
    //   };

    // case actionType.Active:
    //   return {
    //     ...state,
    //     count: state.count - action.payload.num,
    //   };

    // case actionType.Completed:
    //   return state.filter(v => v.completed)
    default:
      return state;
  }
}
