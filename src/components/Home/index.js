// Write your code here

import './index.css'

import {Component} from 'react'

class Home extends Component {
  state = {
    login: false,
  }

  onLogin = () => {
    this.setState(prevState => ({login: !prevState.login}))
  }

  render() {
    const {login} = this.state
    const paraElement = login ? 'Welcome User' : 'Please Login'
    const buttonText = login ? 'Logout' : 'Login'

    return (
      <div className="background">
        <p> {paraElement} </p>
        <button type="button" onClick={this.onLogin}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Home
