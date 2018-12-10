import axios from 'axios'

export const getTodoList = params => {
  return axios.get(`http://localhost:3000/todo/list`, {
    params: params
  })
}

export const addTodo = params => {
  return axios.post(`/todo/addTodo`, params)
}

export const getTodo = params => {
  return axios.get(`http://localhost:3000/todo/id`, {
    params: params
  })
}

export const addRecord = (text, id) => {
  return axios.post(`/todo/addRecord`, {text, id})
}
