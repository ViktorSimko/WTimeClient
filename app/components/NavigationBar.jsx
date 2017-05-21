import React from 'react'
import {Link} from 'react-router'
import {hashHistory} from 'react-router'

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)

    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleLogOut() {
    this.props.onLogOut();
  }

  handleBack() {
    hashHistory.goBack();
  }

  render() {
    let renderLoginSection = () => {
      if (!this.props.isLoggedIn) {
        return (<li><Link to='/login' className='button hollow'>Log in</Link></li>)
      } else {
        return (<li><button className='button hollow' onClick={this.handleLogOut}>Log out</button></li>)
      }
    }

    return (
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li><button className='button hollow' onClick={this.handleBack}>&#11013;</button></li>
          </ul>
        </div>
        <div className='top-bar-right'>
          <ul className='menu'>
            {renderLoginSection()}
          </ul>
        </div>
      </div>
    )
  }
}

export default NavigationBar