import axios from 'axios'

export const getTodoList = params => {
  return axios.get(`/todo/list`, {
    params: params
  })
}

export const addTodo = params => {
  return axios.post(`/todo/addTodo`, params)
}

export const getTodo = params => {
  return axios.get(`/todo/id`, {
    params: params
  })
}

export const addRecord = params => {
  return axios.post(`/todo/addRecord`, params)
}
