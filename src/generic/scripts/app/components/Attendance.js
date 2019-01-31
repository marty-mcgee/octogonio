import React, { Component } from 'react'
//import PropTypes from 'prop-types'

class Attendance extends Component {

    addMemberRow(member, i) {
        return (
            <tr key={i}>
                <td>{member.name}</td>
                <td>{member.id}</td>
            </tr>
        )
    }

    render() {
        return(
            <div>
                <h1>
                    Attendance: {this.props.audience.length} members
                </h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Audience Member</th>
                            <th>Socket ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.audience.map(
                            this.addMemberRow
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Attendance