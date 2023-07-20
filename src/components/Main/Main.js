import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Board from '../Board/Board'
import './Main.css'
import TaskDescription from '../TaskDescription/TaskDescription'
import uniqid from 'uniqid'

const Main = props => {
  return (
    <main className="main">
      <Routes>
        <Route key={uniqid()} exact path={`/`} element={<Board {...props} />} />
        <Route path="/tasks">
          <Route path={':id'} element={<TaskDescription {...props} />} />
        </Route>
      </Routes>
    </main>
  )
}

export default Main