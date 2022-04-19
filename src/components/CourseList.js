import React, { Component } from "react";

class CourseList extends Component {
  state = {
    isEdit: false,
  };

  // render Course Items
  renderCourse = () => {
    return (
      <ul className="m-0">
        <li>
          <span>{this.props.details.name}</span>
          <span onClick={() => this.toggleState()}>
            <i class="fa-solid fa-pen-to-square"></i>
          </span>
          <span onClick={() => this.props.deleteCourse(this.props.index)}>
            <i class="fa-solid fa-trash-can"></i>
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
