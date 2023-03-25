import * as actionTypes from '../actions/type';


export const summariesReducers = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADDNEW_SUMMARY:
            return [action.payload, ...state]
        case actionTypes.GETALL_SUMMARY:
            return action.payload
        case actionTypes.UPDATE_SUMMARY:
            return state.map(summary => (
                summary._id === action.payload._id ? { ...summary, data: action.payload.data } : summary
            ))
        case actionTypes.DELETE_SUMMARY:
            return state.filter(summary => summary._id !== action.payload._id);
        case actionTypes.UPDATE_KEYWORD:
            return state.map(summary => (
                summary._id === action.payload._id ? { ...summary, data: action.payload.data } : summary
            ))
        default: 
            return state;
    }
}