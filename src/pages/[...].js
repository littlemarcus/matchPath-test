import React from "react"
import { Router } from "@reach/router"
import Example from "../components/Example"

const App = () => {
  return (
      <Router basepath="/app">
        <Example path="/example" component={Example}/>
      </Router>
  )
}

export default App