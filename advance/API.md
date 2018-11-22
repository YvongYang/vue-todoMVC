## Data Structure
```
[{
  id: String,
  title: String,
  isLocked: Boolean,
  count: Number,
  records: [{
    id: String,
    text: String,
    checked: Boolean
  }]
}]
```

## API

### Todos API
> 1./todo/list (get)
```
data: [{
  id: String,
  title: String,
  isLocked: Boolean,
  count: Number,
  records: [{
    id: String,
    text: String,
    checked: Boolean
  }]
}]
```

> 2./todo/addTodo (post)
```
params: {
  title: String,
  isLocked: false,
  records: []
}

data: []
```

> 3./todo/deleteTodo/{id} (put)
```
data: []
```

> 4./todo/editTodo (post)
```
params: {
  id: String,
  title: String,
  isLocked: Boolean
}

data: []
```

### Todo Records API
> 1./todo/addRecord (post)
```
params: {
  text: String,
  checked: false
}

data: {}
```

> 2./todo/deleteRecord/{id} (put)
```
data: {}
```

> 2./todo/editRecord (post)
```
params: {
  text: String,
  isLocked: Boolean,
  checked: Boolean
}

data: {}
```