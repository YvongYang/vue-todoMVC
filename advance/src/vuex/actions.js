import {getTodoList, addTodo} from '../api/api'

export const getTodo = ({
  commit
}) => {
  return new Promise((resolve) => {
    getTodoList()
      .then(res => {
        commit('UPDATE_TODO', res.data.todos)
        resolve()
      })
      .catch(err => {
        console.log(err)
      })
  })
}

export const newTodo = ({
  commit
}) => {
  return new Promise((resolve) => {
    addTodo().then(res => {
      commit('UPDATE_TODO', res.data.todos)
      resolve()
    })
  })
}
