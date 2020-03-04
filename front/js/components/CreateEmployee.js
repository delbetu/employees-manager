import React from 'react';

class CreateEmployee extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      errorMessages: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    let newMessages = this.state.errorMessages.concat('submit not implemented')
    this.setState({errorMessages: newMessages})
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <h2>Create Employee</h2>
        <div>
          <label>First Name
            <input name='firstName' onChange={this.handleChange} maxLength="255" size="8" value={this.state.firstName} />
          </label>
        </div>

        <div>
          <label>Last Name
            <input name='lastName' onChange={this.handleChange} maxLength="255" size="14" value={this.state.lastName} />
          </label>
        </div>

        <div>
          <label>Email
            <input name='email' onChange={this.handleChange} type="text" maxLength="255" value={this.state.email} />
          </label>
        </div>

        <div>
          <label>Gender
            <select name='gender' onChange={this.handleChange} value={this.state.gender}>
              <option value="" defaultValue></option>
              <option value="1">Femaie</option>
              <option value="2">Male</option>
              <option value="3">Other</option>
            </select>
          </label>
        </div>

        <input type="submit" name="submit" value="Submit" />
      </form>

      <ul className='error-messages'>
        {
          this.state.errorMessages.map(( msg, i ) => <li key={i}>{msg}</li>)
        }
      </ul>
    </div>
    )
  }
}

export default CreateEmployee
