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

    return (
      <div className="bg-container">
        <div className={classMode}>
          <h1>Click to change mode</h1>
          <button type="button" onClick={this.buttonClick} className="button">
            {isLight ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
