import React from 'react'
import { useState } from 'react'

const ListTodocomponent = ()=> {
    const dummyData=[
        {
            "id":1,
            "title":"Learn Core java",
            "description":"Learn core Java with example",
            "completed":false
        },
        {
            "id":2,
            "title":"Learn  Spring boot ",
            "description":"Learn Spring boot  with example",
            "completed":false
        },
        {
            "id":3,
            "title":"Learn Full stack developer",
            "description":"Learn Full stack developer  with live project",
            "completed":false
        }
    ]
    const[todos,setTodos]=useState(dummyData)
  return (
    <div className='container'>
        <h2 className='text-center'>List of Todos</h2>
        <div>
            <table className='table table-bordered table-striped'>
        <thead>
            <tr>
                <th>Todo Title </th>
                <th>Todo Description </th>
                <th>Todo Completed </th>
            </tr>
        </thead>
        <tbody>
            {
                todos.map(todos=>

                    <tr key={todos.id}>
                        <td>{todos.title}</td>
                        <td>{todos.description}</td>
                        <td>{todos.completed ?'YES':'NO'}</td>
                    </tr>
                )
            }
        </tbody>
        </table>
    </div>
    </div>
  )
}

export default ListTodocomponent