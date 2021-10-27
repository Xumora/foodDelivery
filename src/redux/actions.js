import { ADD_ONE, ADD_ORDER, DELETE_ORDER, SET_METHOD, DEL_ONE } from './types';

const addOrder = (v, dispatch) => {
    const action = { type: ADD_ORDER, payload: v }
    dispatch(action);
}

const deleteOrder = (i, dispatch) => {
    const action = { type: DELETE_ORDER, payload: i }
    dispatch(action);
}

const setMethod = (txt, dispatch) => {
    const action = { type: SET_METHOD, payload: txt }
    dispatch(action);
}

const addOne = (i, dispatch) => {
    const action = { type: ADD_ONE, payload: i }
    dispatch(action);
}

const delOne = (i, dispatch) => {
    const action = { type: DEL_ONE, payload: i }
    dispatch(action);
}

export { addOrder, deleteOrder, setMethod, addOne, delOne }