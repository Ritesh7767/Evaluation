import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Create from './pages/Create'
import TaskDetail from './pages/TaskDetail'

const RoutingLayout = () => {
  return (
    <Routes>
        <Route path='/' element={<Create/>}/>
        <Route path='/taskDetail/:id' element={<TaskDetail/>}/>
    </Routes>
  )
}

export default RoutingLayout