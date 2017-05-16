import React from 'react'
import NavigationBar from 'NavigationBar';

class Container extends React.Component {
  render() {
    return (
      <div id='wtime-container'>
        <NavigationBar/>
        <div id='wtime-content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Container