import React, { useState } from 'react'
import './CreateTaskForm.css'

const CreateTask = props => {
  const { addNewTask, setFormVisible } = props
  const [values, setValues] = useState({ title: '' })

  const handleChange = (e) => {
    const fieldName = e.target.name
    setValues({ ...values, [fieldName]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (values.title) {
      addNewTask(values.title)
    }
    setFormVisible(false)
  }
  return (
    <form className="formWrapper" onSubmit={handleSubmit}>
      <div className="form">
        <input
          id="taskTitle"
          name="title"
          type="text"
          value={values.title}
          onChange={handleChange}>
        </input>
      </div>
      <div className="btnBlock">
        <button className="submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default CreateTask