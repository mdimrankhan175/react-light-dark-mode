// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLight: false}

  buttonClick = () => {
    this.setState(prevState => ({
      isLight: !prevState.isLight,
    }))
  }

  render() {
    const {isLight} = this.state
    const classMode = isLight ? 'light-container' : 'dark-container'
    const classButton = isLight ? 'light-button' : 'dark-button'
    const classContainer = isLight ? 'light-bg-container' : 'dark-bg-container'
    return (
      <div className={classContainer}>
        <div className={classMode}>
          <h1 className="heading">Click to change mode</h1>
          <button
            type="button"
            onClick={this.buttonClick}
            className={classButton}
          >
            {isLight ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
