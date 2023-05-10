// Write your code here.
import {Component} from 'react'
import './index.css'

const PLUS_IMG =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_IMG =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  isToggleActive = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderAnswerText = () => {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    if (isActive) {
      return (
        <div>
          <hr className="hr-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    const {isActive} = this.state
    const displayButton = isActive ? MINUS_IMG : PLUS_IMG
    const altText = isActive ? 'minus' : 'plus'
    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button
            className="button"
            type="button"
            onClick={this.isToggleActive}
          >
            <img src={displayButton} alt={altText} className="image" />
          </button>
        </div>
        {this.renderAnswerText()}
      </li>
    )
  }
}

export default FaqItem
