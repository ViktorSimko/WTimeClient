import React from 'react'

class NavigationBar extends React.Component {
  render() {
    function renderLoginSection() {
      //if (this.props.)
    }

    return (
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className='menu-text'>WTime</li>
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