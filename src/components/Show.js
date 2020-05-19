import React, { PureComponent } from 'react'
import { connect } from "react-redux";
import {setVisiableFilter, FilterType} from '../action/FilterAction'

class Show extends PureComponent {
    completed = () => {
        //或者 this.props.setVisiableFilter(FilterType.Completed)
        this.props.dispatch(setVisiableFilter(FilterType.Completed))
    }

    active = () => {
        this.props.setVisiableFilter(FilterType.Active)
    }

    all = () => {
        this.props.setVisiableFilter(FilterType.All)
    }

    render() {
        return (
            <div>
                Show: 
                <button onClick={this.all}>All</button>
                <button onClick={this.active}>Active</button>
                {/* 或者 <button onClick={this.props.setVisiableFilter.bind(this, FilterType.Completed)}>Completed</button> */}
            </div>
        )
    }
}

export default connect()(Show);
//或者 export default connect(null, {setVisiableFilter})(Show);
