import React, { Fragment, useEffect, useState } from "react";
import { Form, FormGroup, Input, Button, Container } from "reactstrap";
import Course from "./Course";
import Axios from "axios";
import base_url from "../API/bootapi";
import { toast } from "react-toastify";

function AddCourse() {
  useEffect(() => {
    document.title = "Add Courses";
  }, []);

  const [course, setCourse] = useState({});

  const handleForm = (e) => {
    console.log(course);
    postDataToServer(course);
    e.preventDefault();
  };
  //creating function to post data on server

  const postDataToServer = (data) => {
    Axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        toast.success("Course added succesfully");
        setCourse({});
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong");
      }
    );
  };

  return (
    <Fragment>
      <h1 className="text-center my-3">Add new Course</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label for="userId">Course Id</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label for="title">Course Title</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="title"
            id="title"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label for="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter here"
            name="description"
            id="description"
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>
        <Container>
          <Button color="success" type="submit">
            Add Course
          </Button>
          <Button color="warning" type="reset">
            Clear Course
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
}

export default AddCourse;
