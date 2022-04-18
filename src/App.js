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
  };

  render() {
    let { courses } = this.state;
    let courseList = courses.map((couse, index) => {
      return <CourseList details={couse} key={index} />;
    });

    return (
      <div className="App">
        <h2>Add Course</h2>

        <CourseForm />
        <CourseForm />
        {courseList}
      </div>
    );
  }
}

export default App;
