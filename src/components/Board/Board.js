import React from 'react'
import './Board.css'
import List from '../List/List'
import uniqid from 'uniqid'

const Board = props => {
  const { tasks, setTasks } = props

  const ListTypes = {
    BACKLOG: ['backlog','Backlog'],
    READY: ['ready','Ready'],
    IN_PROGRESS: ['inProgress', 'In progress'],
    FINISHED: ['finished', 'Finished']
  }

  const addNewTask = (title) => {
    const newTask = {
      id: uniqid(),
      title: title,
      description: null,
      created: new Date().toISOString(),
      status: 'backlog',
    }

    setTasks([...tasks, newTask])
  }

  return (
    <div className="board">
      {Object.values(ListTypes).map((type) => {
        const listTasks = tasks.filter((task) => task.status === type[0])
        return (
          <List
            key={uniqid()}
            type={type[0]}
            title={type[1]}
            tasks={tasks}
            localTasks={listTasks}
            addNewTask={addNewTask}
            setTasks={setTasks}
          />
        )
      })}
    </div>
  )
}

export default Board