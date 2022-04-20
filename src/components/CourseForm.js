import React from "react";
import { Button, Input } from "reactstrap";
import ButtonMUI from "@mui/material/Button";

const CourseForm = (props) => {
  return (
    <form onSubmit={props.addCourse}>
      <Input
        className="CourseForm col-8 text-center"
        type="text"
        value={props.current}
        onChange={props.updateCourse}
        style={{ backgroundColor: "#EEE" }}
        placeholder="Add Course"
        required
      />
      <ButtonMUI className="col-3 btn" type="submit" variant="contained">
        Add course
      </ButtonMUI>

     
    </form>
  );
};

export default CourseForm;
