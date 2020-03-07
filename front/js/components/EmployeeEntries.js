import React from 'react';
import { withRouter } from 'react-router-dom';

class CheckInOutButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    //TODO: Not Implemented Yet.
    fetch('/employees/:employee_id/entries',
      {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        method: "PUT",
      }).then( res => res.json() )
      .then(res => {
        if (res.hasOwnProperty('error_message')) {
          return that.setState({messages: [res.error_message]})
        }

        console.log('CheckIn/CheckOut')
      }).catch(err => console.log(err))
  }

  render() {
    return (
      <button onClick={this.handleClick}> CheckIn/CheckOut {this.props.employeeId}</button>
    )
  }
}

class EmployeeEntries extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      entries: [
        {
          name: 'Marcos',
          date: '03/05/2020',
          total_time: 10.0,
        },
        {
          name: 'Marcos',
          date: '03/06/2020',
          total_time: 8.0,
        }
      ]
    }
  }

  componentDidMount() {
    const that = this;
    fetch('/employees/:employee_id/entries',
      {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        method: "GET",
      }).then( res => res.json() ) // {"entries":[{"id":1,"date":"2020-03-03","total_time":10.0}]}
      .then(res => {
        if (res.hasOwnProperty('error_message')) {
          return that.setState({messages: [res.error_message]})
        }

        that.setState({entries: res.entries})
      }).catch(err => console.log(err))
  }

  render() {
    const { id } = this.props.match.params;

    return (
      <div>
        <h3>Employee Id: {id}</h3>

        <table>
          <thead>
            <tr><th>Date</th><th>Worked Hours</th></tr>
          </thead>
          <tbody>
            {
              this.state.entries.map(( entry, i ) =>
                <tr key={i}>
                  <td>{entry.date}</td>
                  <td>{entry.total_time}</td>
                </tr>
              )
            }
          </tbody>
        </table>

        <ul className='messages'>
          { this.state.messages.map(( msg, i ) => <li key={i}>{msg}</li>) }
        </ul>

        <CheckInOutButton employeeId={id} />
      </div>
    )
  }

} // END COMPONENT

export default withRouter(EmployeeEntries)
