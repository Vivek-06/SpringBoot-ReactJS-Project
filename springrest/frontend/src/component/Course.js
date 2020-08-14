import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Container,
  Button,
} from "reactstrap";
import Axios from "axios";
import base_url from "../API/bootapi";

function Course({ course, update }) {
  const deleteCourse = (id) => {
    Axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        console.log("successful deleted");
        update(id);
      },
      (error) => {
        console.log("course not deleted...!!!");
      }
    );
  };
  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button
            color="danger"
            onClick={() => {
              deleteCourse(course.id);
            }}
          >
            Delete
          </Button>
          <Button color="warning">Update</Button>
        </Container>
      </CardBody>
    </Card>
  );
}

export default Course;
