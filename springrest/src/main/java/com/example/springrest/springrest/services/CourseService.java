package com.example.springrest.springrest.services;

import java.util.List;

import com.example.springrest.springrest.entity.Course;

public interface CourseService {
    public List<Course> getCourses();
    public Course getCourse(long courseId);
}