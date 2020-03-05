import React from 'react';
import { withRouter } from 'react-router-dom';

class EmployeeEntries extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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

  render() {
    const { id } = this.props.match.params;

    return (
      <div>
        <h3>Employee Id: {id}</h3>

        <table>
          <thead>
            <tr><th>Name</th><th>Date</th><th>Worked Hours</th></tr>
          </thead>
          <tbody>
            {
              this.state.entries.map(( entry, i ) =>
                <tr key={i}>
                  <td>{entry.name}</td>
                  <td>{entry.date}</td>
                  <td>{entry.total_time}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }

} // END COMPONENT

export default withRouter(EmployeeEntries)
