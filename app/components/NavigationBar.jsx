import React from 'react'
import {Link} from 'react-router'

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    this.props.onLogOut();
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
            <li><Link to='/' className='menu-text'>WTime</Link></li>
            <li><Link to='/projects' className='menu-text'>Projects</Link></li>
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