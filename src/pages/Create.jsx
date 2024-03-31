import React, { useEffect, useState } from 'react'
import Table from './Table'
import './Create.css'

const Create = () => {

    let [userData, setUserData] = useState("")
    let [count, setCount] = useState(0)

    const handleChange = event => {
        const today = new Date()
        setUserData({...userData, [event.target.name] : event.target.value, Status: false, createdOn : `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`})
    }

    const handleSubmit = async (e) =>  {
        e.preventDefault()
        let response = await fetch("http://localhost:3000/data", {
            method : "POST", 
            body : JSON.stringify(userData)
        })
        response = await response.json()
        console.log(response)
        setUserData("")
        setCount(count + 1)
    }


  return (
    <>
    <form className='formContainer' onSubmit={handleSubmit}>
        <h1>Create New Task Here</h1>
        <label htmlFor="">
            Enter your Taskname <br />
            <input type="text" name='task' placeholder='TaskName here' value={userData[name]} onChange={e => handleChange(e)}/>
        </label><br />
        <label >
            Enter your task's description <br />
            <textarea name="description" cols="40" rows="5" placeholder='Description...' value={userData[name]} onChange={(e => handleChange(e))}></textarea>
        </label><br />
        <input type="submit" className='submit'/>
    </form>
    <Table count={count}/>
    </>
  )
}

export default Create