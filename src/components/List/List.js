import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './List.css'
import uniqid from 'uniqid'
import CreateTaskForm from '../CreateTaskForm/CreateTaskForm'
import TransferTask from '../TransferTask/TransferTask'

const List = props => {
  const { localTasks, title, type, tasks, addNewTask } = props
  const [isFormVisible, setFormVisible] = useState(false)

  const handleClick = () => {
    setFormVisible(!isFormVisible)
  }

  const backlogTasks = tasks.filter((task) => task.status === 'backlog')
  const readyTasks = tasks.filter((task) => task.status === 'ready')
  const inProgressTasks = tasks.filter((task) => task.status === 'inProgress')

  return (
    <div className="list">
      <h2>{title}</h2>
      <div className="tasks">
        {localTasks.map((task) => {
          return (
            <Link to={`/tasks/${task.id}`} className="task_link">
              <p className="tasks_item" key={task.id}>
                {task.title}
              </p>
            </Link>
          )
        })}
        {type === 'backlog' && isFormVisible && (
          <CreateTaskForm
            key={uniqid()}
            addNewTask={addNewTask}
            setFormVisible={setFormVisible}
          />
        )}
        {type !== 'backlog' && isFormVisible && (
          <TransferTask
            {...props}
            key={uniqid()}
            setFormVisible={setFormVisible}
            handleClick={handleClick}
          />
        )}
        {type === 'backlog' && !isFormVisible && (
          <div className="button_block">
            <button className="add_card_button" onClick={handleClick}>
              <span>+ Add Card</span>
            </button>
          </div>
        )}
        {type === 'ready' && !isFormVisible && (
          <div className="button_block">
            <button
              disabled={backlogTasks.length > 0 ? false : true}
              className={
                backlogTasks.length > 0
                  ? "add_card_button"
                  : "disabled_button"
              }
              onClick={handleClick}
            >  
              <span>+ Add Card</span>
            </button>
          </div>
        )}
        {type === 'inProgress' && !isFormVisible && (
          <div className="button_block">
            <button
              disabled={readyTasks.length > 0 ? false : true}
              className={
                readyTasks.length > 0
                  ? "add_card_button"
                  : "disabled_button"
              }
              onClick={handleClick}
            >
              <span>+ Add Card</span>
            </button>
          </div>
        )}
        {type === 'finished' && !isFormVisible && (
          <div className="button_block">
            <button
              disabled={inProgressTasks.length > 0 ? false : true}
              className={
                inProgressTasks.length > 0
                  ? "add_card_button"
                  : "disabled_button"
              }
              onClick={handleClick}
            >
              <span>+ Add Card</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default List