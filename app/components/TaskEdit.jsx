import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'

class TaskEdit extends React.Component {

  constructor(props) {
    super(props)

    this.handleSave = this.handleSave.bind(this)
  }

  handleSave(e) {
    e.preventDefault()

    let task = {
      title: this.refs.titleTextField.value,
      bonus: this.refs.bonusField.value
    }

    this.props.onSave(this.props.editingTask !== null, task)
  }

  render() {
    return (
      <div>
        <h4>Edit Task</h4>
        <input type='text' placeholder='title' ref='titleTextField'/>
        <input type='number' placeholder='bonus' ref='bonusField'/>
        <button className='button hollow' onClick={this.handleSave}>Save</button>
        <button className='button alert' onClick={this.props.onClose}>Close</button>
      </div>
    )
  }
}

export default TaskEdit