import { APPEND_NEW_NODE, DELETE_NODE, SELECT_NODE, DESELECT_NODE } from './actionTypes';

export const appendNewNode = (id, node) => ({
    type: APPEND_NEW_NODE,
    payload: { id, node }
})

export const deleteNode = (id) => ({
    type: DELETE_NODE,
    payload: {id}
})

export const selectNode = (id) => ({
    type: SELECT_NODE,
    payload: {id}
})

export const deselectNode = () => ({
    type: DESELECT_NODE,
    payload: null
})