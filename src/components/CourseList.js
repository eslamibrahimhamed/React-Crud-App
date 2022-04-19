import React, { Component } from "react";

class CourseList extends Component {
  state = {
    isEdit: false,
  };

  // render Course Items
  renderCourse = () => {
    return (
      <ul className=" mt-5 list-unstyled container">
        <li className="d-flex">
          <p className=" col-10 ">{this.props.details.name}</p>
          <span className="col-1" onClick={() => this.toggleState()}>
            <i
              class="fa-solid fa-pen-to-square"
              style={{ color: "#00f", cursor: "pointer" }}
            ></i>
          </span>
          <span
            className="col-1"
            onClick={() => this.props.deleteCourse(this.props.index)}
          >
            <i
              class="fa-solid fa-trash-can "
              style={{ color: "#F00", cursor: "pointer" }}
            ></i>
          </span>
        </li>
      </ul>
    );
  };

  // Toggle State
  toggleState = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
    });
  };

  // Update Course Item
  updateCourseItem = (event) => {
    event.preventDefault();
    this.props.editCourse(this.props.index, this.input.value);
    this.toggleState();
  };

  // Render Udate Form
  renderUpdateForm = () => {
    return (
      <form onSubmit={this.updateCourseItem}>
        <input
          type="text"
          ref={(value) => {
            this.input = value;
          }}
          defaultValue={this.props.details.name}
        />
        <button>Update Course</button>
      </form>
    );
  };

  render() {
    let isEdit = this.state.isEdit;
    return (
      <div className="CourseList">
        {isEdit ? this.renderUpdateForm() : this.renderCourse()}
      </div>
    );
  }
}

export default CourseList;
