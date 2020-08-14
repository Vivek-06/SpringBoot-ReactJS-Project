import React, { useState, useEffect } from "react";
import Course from "./Course";
import axios from "axios";
import base_url from "../API/bootapi";
import { toast } from "react-toastify";

function AllCourse() {
  useEffect(() => {
    document.title = "All Courses";
  }, []);

  //function to load server

  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        console.log(response.data);
        toast.success("courses has been loaded");
        setCourses(response.data);
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong");
      }
    );
  };

  //calling loading course function
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const removeCourseById = (id) => {
    setCourses(courses.filter((c) => c.id != id));
  };

  const [courses, setCourses] = useState([]);
  return (
    <div>
      <h1>All Courses</h1>
      <h4>List of courses are:</h4>
      {courses.length > 0
        ? courses.map((item) => (
            <Course key={item.id} course={item} update={removeCourseById} />
          ))
        : "No courses available"}
    </div>
  );
}

export default AllCourse;
