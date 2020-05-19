import React, { PureComponent } from 'react'
import { connect } from "react-redux";
import {setVisiableFilter, FilterType} from '../action/FilterAction'

class Show extends PureComponent {
    completed = () => {
        // this.props.setVisiableFilter(FilterType.Completed)
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
                {/* <button onClick={this.props.setVisiableFilter.bind(this, FilterType.Completed)}>Completed</button> */}
            </div>
        )
    }
}

export default connect()(Show);
// export default connect(null, {setVisiableFilter})(Show);
