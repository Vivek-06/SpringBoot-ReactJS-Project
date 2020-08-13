package com.example.springrest.springrest.services;

import java.util.ArrayList;
import java.util.List;

import com.example.springrest.springrest.entity.Course;

import org.springframework.stereotype.Service;

@Service
public class CourseServiceImpl implements CourseService {
    List<Course> list;

    public CourseServiceImpl() {
        list = new ArrayList<>();
        list.add(new Course(101, "Java Course", "Basic implementation of Java"));
        list.add(new Course(102, "React JS", "Implementation of React JS"));
    }

    @Override
    public List<Course> getCourses() {
        return list;
    }

    @Override
    public Course getCourse(long courseId) {
        Course c = null;
        for(Course course: list){
            if(course.getId() == courseId){
                c = course;
                break;
            }
        }
        return c;
    }
    
}