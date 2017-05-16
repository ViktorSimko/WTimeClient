import React from 'react'

class NavigationBar extends React.Component {
  render() {
    return (
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className='menu-text'>WTime</li>
          </ul>
        </div>
        <div className='top-bar-right'>
        </div>
      </div>
    )
  }
}

export default NavigationBar