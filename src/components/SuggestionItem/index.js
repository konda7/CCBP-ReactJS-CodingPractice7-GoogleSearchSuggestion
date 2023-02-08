// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, getSuggestionValue} = props
  const {suggestion} = eachSuggestion

  const onClickingArrow = () => {
    getSuggestionValue(suggestion)
  }

  return (
    <li className="list-items-container">
      <p className="suggestions">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onClickingArrow}
      />
    </li>
  )
}

export default SuggestionItem
