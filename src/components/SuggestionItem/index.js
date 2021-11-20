// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggetionDetails, updateSuggetionItems} = props
  const {suggestion} = suggetionDetails

  const onClickSuggetion = () => {
    updateSuggetionItems(suggestion)
  }

  return (
    <li className="list-container">
      <p>{suggestion}</p>
      <button className="arrow" type="button" onClick={onClickSuggetion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
