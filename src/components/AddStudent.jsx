import React, { Component } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class AddStudent extends Component {
  render() {
    const {addModal, closeAddModal} = this.props;
    return (
      <div>
        <Modal show={addModal} onHide={closeAddModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label htmlFor="fristName" className="form-label">
                  Fristname
                </label>
                <input type="text" className="form-control" id="fristName" />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Lastname
                </label>
                <input type="text" className="form-control" id="lastName" />
              </div>
              <div className="mb-3">
                <select className="form-select" id="group">
                  <option value="React-N32">React-N32</option>
                  <option value="React-N45">React-N45</option>
                  <option value="React-N58">React-N58</option>
                  <option value="React-N38">React-N38</option>
                </select>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="doesWork"
                />
                <label htmlFor="doesWork" className="form-check-label">
                  Does work ?
                </label>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeAddModal}>
              Concel
            </Button>
            <Button variant="primary" onClick={closeAddModal}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddStudent