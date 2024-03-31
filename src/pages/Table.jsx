import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Table.css'
const Table = ({count}) => {

    let [todoData, setTodoData] = useState()

    useEffect(() => {
        (
            async () => {
                let response = await fetch("http://localhost:3000/data")   
                response = await response.json()
                setTodoData(response)
            }
        )()
    }, [count])
 
  return (
    <>
    <table>
        <thead>
            <tr>
                <th>Sr No.</th>
                <th>Task Name</th>
                <th>Status</th>
                <th>Create On</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Open</th>
            </tr>
        </thead>
        <tbody>
            {todoData?.map((ele, i) => {
                let {task,Status, createdOn, id} = ele
                return (
                        <tr>
                            <td>{i}</td>
                            <td>{task}</td>
                            <td>{!Status ? "Pending" : "Completed"}</td>
                            <td>{createdOn.toString()}</td>
                            <td><button>Edit</button></td>
                            <td><button onClick={() => handleDelete(id)}>Delete</button></td>
                            <Link to={`/taskDetail/${id}`}><td><button>Details</button></td></Link>
                        </tr>
                )
            })}
        </tbody>
    </table>
    </>
  )
}

export default Table