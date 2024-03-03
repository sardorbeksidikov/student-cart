import React, { Component } from "react";

class StudentList extends Component {
  render() {
    const { students } = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Fristname</th>
              <th>Lastname</th>
              <th>Group</th>
              <th>Does work?</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, i) => (
              <tr key={student.id}>
                <td>{i + 1}</td>
                <td>{student.fristName}</td>
                <td>{student.lastName}</td>
                <td>{student.group}</td>
                <td>{student.doesWork ? "✔" : "❌"}</td>
                <td className="d-flex gap-2">
                  <button className="btn btn-primary btn-sm">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;
