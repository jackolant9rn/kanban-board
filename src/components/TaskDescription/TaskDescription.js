import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './TaskDescription.css'
import cancel from '../../img/cancel.svg'

const TaskDescription = props => {
  const { id } = useParams()
  const { tasks, setTasks } = props
  const task = tasks.find((task) => task.id === id)
  const [descValue, setDescValue] = useState(task.description)
  const [inputReveal, setInputReveal] = useState(false)

  const handleForm = () => {
    setInputReveal(!inputReveal)
  }

  const editDesc = (e) => {
    e.preventDefault()
    const updatedDescTasks = tasks.map((task) => ({
      ...task,
      description: task.id === id ? descValue : task.description,
    }))

    setTasks(updatedDescTasks)
    handleForm()
  }

  const hideForm = (e) => {
    e.preventDefault()
    handleForm()
    setDescValue(task.description)
  }
  
  return (
    <div className="wrapper">
      <div className="desc_header">
        <h2 className="desc_title">{task.title}</h2>
        <Link to={`/`}>
          <button className="close_button">
            <img src={cancel} alt="Cancel"></img>
          </button>
        </Link>
      </div>
      <p className={inputReveal ? "hide" : "desc_text"}>
        {task.description || "This task has no description"}
      </p>
      <form className={inputReveal ? "desc_form" : "hide"}>
        <textarea
          onChange={(e) => setDescValue(e.target.value)}
          type="text"
          className="edit_desc"
          value={descValue}>
          </textarea>
        <div className="btn_wrapper">
          <button className="form_btn" onClick={editDesc}>
            Save
          </button>
          <button className="form_btn_cancel" onClick={hideForm}>
            Cancel
          </button>
        </div>
      </form>
      <button
        onClick={handleForm}
        className={inputReveal ? "hide" : "open_form_btn"}
      >
        Edit description
      </button>
    </div>
  )
}

export default TaskDescription