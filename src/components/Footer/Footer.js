import React, { useState, useEffect } from 'react'
import './Footer.css'

function Footer({ tasks }) {
  const [activeTasksValue, setActiveTasksValue] = useState(0)
  const [finishedTasksValue, setFinishedTasksValue] = useState(0)

  const activeTasks = tasks.filter((task) => task.status === 'backlog')

  const finishedTasks = tasks.filter((task) => task.status === 'finished')

  useEffect(() => {
    setActiveTasksValue(activeTasks.length)
    setFinishedTasksValue(finishedTasks.length)
  }, [activeTasks.length, finishedTasks.length, tasks])
  
  return (
      <div className="footer">
        <div className="tasks_statistic">
          <p>Active tasks: {activeTasksValue} </p>
          <p>Finished tasks: {finishedTasksValue}</p>
        </div>
        <p>Kanban board by jackolantern, 2023</p>
      </div>
  )
}

export default Footer