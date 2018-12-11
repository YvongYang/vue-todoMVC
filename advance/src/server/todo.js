import Express from 'express'
import {
  Todos
} from '../mock/data/todoList'

const router = Express.Router()

router.get('/todo/list', function (req, res) {
  let mockTodo = Todos.map(todo => {
    return {
      id: todo.id,
      title: todo.title,
      count: todo.records.filter((data) => {
        if (data.checked === false) return true
        return false
      }).length,
      isLocked: todo.isLocked
    }
  })

  res.send({
    todos: mockTodo
  })
})

router.get('/todo/id', function (req, res) {
  console.log('===========todoId: ', req.query.id)
  const id = req.query.id
  let todo = Todos.find(todo => id && todo.id === id)

  if (todo) {
    todo.count = todo.records.filter(i => i.checked === false).length
  }

  res.send({
    todo: todo || {}
  })
})

module.exports = router
