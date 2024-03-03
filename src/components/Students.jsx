import React, { Component } from "react";
import { ButtonGroup } from "react-bootstrap";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";


class Students extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addModal: false,
      students: [
        {
          id: 1,
          fristName: "Ulugbek",
          lastName: "Eshnazarov",
          group: "React N45",
          doesWork: false,
        },
        {
          id: 2,
          fristName: "Salmonbek",
          lastName: "Akbarov",
          group: "React N45",
          doesWork: false,
        },
        {
          id: 3,
          fristName: "Bekzod",
          lastName: "Shamsiyev",
          group: "React N45",
          doesWork: true,
        },
      ],
    };
  }
  closeAddModal = () => this.setState({addModal: false})
  openAddModal = () => this.setState({addModal: true})

  render() {
    const { students, addModal } = this.state;
    const { closeAddModal, openAddModal } = this;
    return (
      <div className="container py-3">
        <div>
          <ButtonGroup className="w-100">
            <input
              type="text"
              placeholder="Search"
              className="form-control p-2"
            />
            <select name="filter" id="filter" className="form-select w-auto">
              <option value="All">All</option>
              <option value="React-N32">React-N32</option>
              <option value="React-N45">React-N45</option>
              <option value="React-N58">React-N58</option>
              <option value="React-N38">React-N38</option>
            </select>
            <button
              className="btn btn-outline-success w-auto"
              onClick={openAddModal}>
              Add
            </button>
          </ButtonGroup>
        </div>
        <StudentList students={students} />
        <AddStudent addModal={addModal} closeAddModal={closeAddModal} />

        
      </div>
    );
  }
}

export default Students;
