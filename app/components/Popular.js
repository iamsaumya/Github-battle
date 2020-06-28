import React from 'react'
import PropTypes from 'prop-types'
import {fetchPopularRepos} from '../utils/api'

function LanguagesNav ({selected,onUpdateLanguage}){
    const languages = ['All','JavaScript','Ruby','Java','CSS','Python']
    return (
        <ul className="flex-center">
            {
                languages.map((language) => (<li key={language}>
                    <button className="btn-clear nav-link"
                    style={selected === language ? { color : 'rgb(187,46,31)'} : null}
                    onClick={()=> onUpdateLanguage(language)}>
                        {language}
                    </button>
                </li>)) 
            }
        </ul>
    )
}


LanguagesNav.propTypes = {
    selected : PropTypes.string.isRequired,
    onUpdateLanguage : PropTypes.func.isRequired
}
export default class Popular extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            selectedLanguage : "All",
            repos : null,
            error : null
        }
        
        this.isLoading = this.isLoading.bind(this)
        this.updateLanguage = this.updateLanguage.bind(this)

    }

    isLoading(){
        return this.state.repos === null && this.state.error ===null
    }

    updateLanguage(selectedLanguage){
        this.setState({
            selectedLanguage,
            repos : null,
            error : null
        })

        fetchPopularRepos(selectedLanguage)
        .then((repos)=>this.setState({
            repos,
            error : null
        }))
        .catch(()=>{
            console.warn("Error fetching repose: ",error)
            this.setState({
                    error : 'There was an error fetching the repositoy'
            })
        })
    }
    render(){
        const { selectedLanguage, repos, error } = this.state

        return (
            <React.Fragment>
            <LanguagesNav
            selected = {selectedLanguage}
            onUpdateLanguage = {this.updateLanguage}
                />
            {this.isLoading() && <p>Loading</p>}
            {error && <p>{error}</p>}
        {repos && <pre>{JSON.stringify(repos,null,2)}</pre>}
            </React.Fragment>
        )
    }
}