import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      seconds: 0,
      status: 'stopped'
    }
  }

  formatSeconds(seconds) {
    let secs = seconds % 60;
    let minutes = Math.floor(seconds / 60);

    if (secs < 10) {
      secs = '0' + secs;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return minutes + ':' + secs;
  }

  render() {
    let {seconds} = this.state;

    let buttonText

    switch (this.state.status) {
      case 'stopped': 
        buttonText = 'Start'
        break
      case 'started':
        buttonText = 'Stop'
        break
    }

    return (
      <div>
        <h2 className='subheader text-center'>{this.formatSeconds(seconds)}</h2>
        <button className='button hollow expanded' onClick={this.get}>{buttonText}</button>
        
      </div>
    )
  }

}

export default Timer;