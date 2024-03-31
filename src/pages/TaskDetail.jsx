import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import './TaskDetail.css'

const TaskDetail = () => {

    let [detailData, setDetailData] = useState()
    let {id} = useParams()
    useEffect(() => {
        (
            async () => {
                let response = await fetch("http://localhost:3000/data")   
                response = await response.json()

                let result = await response.filter(ele => ele.id == id)
                setDetailData(result)
            }
        )()
    },[])

    console.log(detailData)

  return (
    <div>
        {detailData?.map(ele => {
            let {task, Status, createdOn, description} = ele
            return (
                <>
                    <h1><b>Task Name :- </b>{task}</h1>
                    <p><b>Description :- </b>{description}</p>
                    <span><b>Task Status :- </b>{Status ? "Completed" : "Pending"}</span>
                    <p><b>Creation Date :- </b>{createdOn}</p>
                </>
            )
        })}
    </div>
  )
}

export default TaskDetail