// Write your code here

import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSeachInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSuggestionValue = val => {
    this.setState({searchInput: val})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const filterSuggestionList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-container">
        <div className="content-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
            alt="google logo"
            className="google-img"
          />
          <div className="input-container">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="search-bar"
                onChange={this.onChangeSeachInput}
                value={searchInput}
              />
            </div>
            <ul className="suggestions-container">
              {filterSuggestionList.map(eachSuggestion => (
                <SuggestionItem
                  eachSuggestion={eachSuggestion}
                  getSuggestionValue={this.getSuggestionValue}
                  key={eachSuggestion.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
