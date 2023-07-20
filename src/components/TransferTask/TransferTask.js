import React, { useState } from 'react'
import './TransferTask.css'

const TransferTask = props => {
  const { type, tasks, setTasks, handleClick } = props
  const [values, setValues] = useState('')

  const changeSelect = (e) => {
    e.preventDefault()

    const updatedTasks = tasks.map((task) => ({
      ...task,
      status:
        task.title === values && task.status === 'backlog'
          ? 'ready'
          : task.title === values && task.status === 'ready'
          ? 'inProgress'
          : task.title === values && task.status === 'inProgress'
          ? 'finished'
          : task.status,
    }))

    setTasks(updatedTasks)
  }

  if (type === 'ready') {
    return (
      <form className="form">
        <select
          className="selection"
          defaultValue={' '}
          onChange={(e) => setValues(e.target.value)}
        >
          <option></option>
          {tasks.map((task) => {
            if (task.status === 'backlog') {
              return <option value={task.title}>{task.title}</option>
            } else return null})
          }
        </select>
        <button className="submit_btn" onClick={changeSelect}>
          Submit
        </button>
        <button className="cancel_btn" onClick={handleClick}>
          Cancel
        </button>
      </form>
    )
  } else if (type === 'inProgress') {
    return (
      <form className="form">
        <select
          className="selection"
          defaultValue={' '}
          onChange={(e) => setValues(e.target.value)}
        >
          <option></option>
          {tasks.map((task) => {
            if (task.status === 'ready') {
              return <option>{task.title}</option>
            } else return null})
          }
        </select>
        <button className="submit_btn" onClick={changeSelect}>
          Submit
        </button>
        <button className="cancel_btn" onClick={handleClick}>
          Cancel
        </button>
      </form>
    )
  } else if (type === 'finished') {
    return (
      <form className="form">
        <select
          className="selection"
          defaultValue={' '}
          onChange={(e) => setValues(e.target.value)}
        >
          <option></option>
          {tasks.map((task) => {
            if (task.status === 'inProgress') {
              return <option>{task.title}</option>
            } else return null})
          }
        </select>
        <button className="submit_btn" onClick={changeSelect}>
          Submit
        </button>
        <button className="cancel_btn" onClick={handleClick}>
          Cancel
        </button>
      </form>
    )
  }
}

export default TransferTask