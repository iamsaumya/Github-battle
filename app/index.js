import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'
//Components
//1. State
//2. Lifecycle
//3. UI

class App extends React.Component{
    render(){
        return (
            <div className="container">
                <Popular/>
            </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('app'))