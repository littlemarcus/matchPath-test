import React from "react"
import { Router } from "@reach/router"
import Example from "../components/example"

const App = () => {
  return (
      <Router basepath="/app">
        <Example path="/example" component={Example}/>
      </Router>
  )
}

export default App