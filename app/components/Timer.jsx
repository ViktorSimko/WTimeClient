import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      seconds: 0,
      status: 'stopped'
    }

    this.toggleTimer = this.toggleTimer.bind(this)
  }

  toggleTimer(e) {
    e.preventDefault()

    if (this.state.status === 'stopped') {
      this.timer = setInterval(() => {
        let {seconds} = this.state

        this.setState({
          seconds: seconds + 1
        })
      }, 1000)

      this.setState({
        status: 'started'
      })
    } else {
      clearInterval(this.timer)
      this.timer = null

      this.setState({
        seconds: 0,
        status: 'stopped'
      })
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
        <button className='button hollow expanded' onClick={this.toggleTimer}>{buttonText}</button>
        
      </div>
    )
  }

}

export default Timer;