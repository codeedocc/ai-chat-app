import React from 'react'
import { Todo } from '../../../typings'

type TodoPageProps = {
  params: {
    todoId: string
  }
}

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  )

  const todo: Todo = await res.json()
  return todo
}

async function TodoPage({ params: { todoId } }: TodoPageProps) {
  const todo = await fetchTodo(todoId)

  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>

      <p className="border-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  )
}

export default TodoPage
