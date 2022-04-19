import React from "react";

const CourseForm = (props) => {
  return (
    <form onSubmit={props.addCourse}>
      <input
        className="CourseForm col-8"
        type="text"
        value={props.current}
        onChange={props.updateCourse}
      />
      <button className="col-3" type="submit">Add course</button>
    </form>
  );
};

export default CourseForm;
