import React, { Component } from "react";

import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Zoom from "@mui/material/Zoom";

class CourseList extends Component {
  state = {
    isEdit: false,
  };

  // render Course Items
  renderCourse = () => {
    return (
      <ul className=" mt-5 list-unstyled container">
        <li className="d-flex">
          <p className=" col-7 ">{this.props.details.name}</p>
          <span className="col-1" onClick={() => this.toggleState()}>
            <Tooltip title="Edit" placement="top">
              <Button>
                <i
                  class="fa-solid fa-pen-to-square"
                  style={{ color: "#00f", cursor: "pointer" }}
                ></i>
              </Button>
            </Tooltip>
          </span>

          <span
            className="col-1"
            onClick={() => this.props.deleteCourse(this.props.index)}
          >
            <Tooltip TransitionComponent={Zoom} title="Delete">
              <Button>
                {" "}
                <i
                  class="fa-solid fa-trash-can "
                  style={{ color: "#F00", cursor: "pointer" }}
                ></i>
              </Button>
            </Tooltip>
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
          className="col-8 mt-5 text-center form-control m-bottom"
          type="text"
          ref={(value) => {
            this.input = value;
          }}
          defaultValue={this.props.details.name}
          style={{ backgroundColor: "#EEE" }}
        />

        <Button
          type="submit"
          className="col-3  m-bottom"
          variant="contained"
          color="success"
          style={{ verticalAlign: "1.5px" }}
        >
          Update Course
        </Button>
        <Button
          type="submit"
          className="col-3  m-bottom"
          variant="contained"
          color="success"
          style={{ verticalAlign: "1.5px" }}
        >
          Close
        </Button>
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
