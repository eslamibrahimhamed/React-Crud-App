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

  render() {
    let { courses } = this.state;
    let courseList = courses.map((course, index) => {
      return <CourseList details={course} key={index} />;
    });

    return (
      <div className="App">
        <h2>Add Course</h2>

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
