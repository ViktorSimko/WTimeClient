import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'

class ProjectEdit extends React.Component {

  constructor(props) {
    super(props)

    this.handleSave = this.handleSave.bind(this)
  }

  handleSave(e) {
    e.preventDefault()

    let project = {
      title: this.refs.titleTextField.value,
      description: this.refs.descriptionTextField.value,
      hourlyWage: this.refs.hourlyWageField.value
    }

    this.props.onSave(this.props.editingProject !== null, project)
  }

  render() {
    return (
      <div>
        <h4>Edit Project</h4>
        <input type='text' placeholder='title' ref='titleTextField'/>
        <input type='text' placeholder='description' ref='descriptionTextField'/>
        <input type='number' placeholder='hourlyWage' ref='hourlyWageField'/>
        <button className='button hollow' onClick={this.handleSave}>Save</button>
        <button className='button alert' onClick={this.props.onClose}>Close</button>
      </div>
    )
  }
}

export default ProjectEdit