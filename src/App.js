import React, {Component, Suspense} from 'react'
import {RouterProvider} from 'react-router-dom'
import routes from "./routes/routes";
import './index.css'


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

class App extends Component {
  render () {
    return (
      <Suspense fallback={loading}>
            <RouterProvider router={routes}/>
      </Suspense>
    )
  }
}

export default App
