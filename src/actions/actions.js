import { ADD_TODO, DELETE_TODO,DELETE_DONE_TODO,EDIT_TODO,ADD_DONE_TODO } from './actionType';

export const addTodo = (data) => (
    {
        type: ADD_TODO,
        payload: data,
    }
)
export const addDoneTodo = (data) => (
    {
        type: ADD_DONE_TODO,
        payload: data,
    }
)
export const deleteTodo = (id) => (
    {
        type: DELETE_TODO,
        id
    }
)
export const deleteDoneTodo = (id) => (
    {
        type: DELETE_DONE_TODO,
        id
    }
)
export const editTodo = (id) => (
    {
        type: EDIT_TODO,
        id
    }
)