import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'
import Battle from './components/Battle'

//Components
//1. State
//2. Lifecycle
//3. UI

class App extends React.Component{
    render(){
        return (
            <div className="container">
                <Battle/>
            </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('app'))