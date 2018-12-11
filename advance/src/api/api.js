import axios from 'axios'

export const getTodoList = params => {
  return axios.get(`http://localhost:3000/todo/list`, {
    params: params
  })
}

export const addTodo = params => {
  return axios.post(`/todo/addTodo`, params)
}

export const getTodo = id => {
  return axios.get(`http://localhost:3000/todo/id`, {
    params: {id: id}
  })
}

export const addRecord = (text, id) => {
  return axios.post(`/todo/addRecord`, {text, id})
}
