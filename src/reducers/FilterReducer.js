import actionType from "../action/actionType";
import {FilterType} from '../action/FilterAction'

export default function visiableFilter(state = FilterType.All, action) {
    switch (action.type) {
        case actionType.Filter:
            return action.filter;
        default:
            return state;
    }
}