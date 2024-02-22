import React, { useEffect } from 'react'
import { useState } from 'react'
import { getAllTodos } from '../service/TodoService'

const ListTodocomponent = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        listTodos();
    }, [])
    function listTodos() {
        getAllTodos().then((response) => {
            setTodos(response.data)
        }).catch(error => {
            console.error(error)
        })
    }
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
                            todos.map(todos =>

                                <tr key={todos.id}>
                                    <td>{todos.title}</td>
                                    <td>{todos.description}</td>
                                    <td>{todos.completed ? 'YES' : 'NO'}</td>
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