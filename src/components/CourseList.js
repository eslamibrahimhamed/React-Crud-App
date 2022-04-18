import React, { Component } from "react";

class CourseList extends Component {
  render() {
    return (
      <div className="CourseList">
        <ul className="m-0">
          <li>{this.props.details.name}</li>
        </ul>
      </div>
    );
  }
}

export default CourseList;
