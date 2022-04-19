import React, { Component } from "react";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import "./App.css";

class App extends Component {
  state = {
    courses: [
      { name: "HTML" },
      { name: "Css" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    current: "",
  };

  // Update Course
  updateCourse = (event) => {
    this.setState({
      current: event.target.value,
    });
  };
  // Add Course
  addCourse = (event) => {
    event.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({ name: current });
    this.setState({
      courses: courses,
      current: "",
    });
  };

  //  Delete Courses
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses: courses,
    });
  };

  // Edit Course

  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course["name"] = value;
    this.setState({
      courses: courses,
    });
  };

  render() {
    let { courses } = this.state;
    let courseList = courses.map((course, index) => {
      return (
        <CourseList
          details={course}
          key={index}
          index={index}
          deleteCourse={this.deleteCourse}
          editCourse={this.editCourse}
        />
      );
    });

    return (
      <div className="App container text-center">
        <h2 className="mt-5 mb-5">Add Course</h2>

        <CourseForm
          updateCourse={this.updateCourse}
          addCourse={this.addCourse}
          current={this.state.current}
        />

        {courseList}
      </div>
    );
  }
}

export default App;
