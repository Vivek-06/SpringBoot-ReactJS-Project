package com.example.springrest.springrest.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import com.example.springrest.springrest.DAO.CourseDao;
import com.example.springrest.springrest.entity.Course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseServiceImpl implements CourseService {
    // List<Course> list;
    @Autowired
    private CourseDao courseDao;

    public CourseServiceImpl() {

        // list = new ArrayList<>();
        // list.add(new Course(101, "Java Course", "Basic implementation of Java"));
        // list.add(new Course(102, "React JS", "Implementation of React JS"));
    }

    @Override
    public List<Course> getCourses() {
        return courseDao.findAll();
    }

    @Override
    public Course getCourse(long courseId) {
        // Course c = null;
        // for (Course course : list) {
        //     if (course.getId() == courseId) {
        //         c = course;
        //         break;
        //     }
        // }
        // return c;
        return courseDao.getOne(courseId);
    }

    @Override
    public Course addCourse(Course course) {
        // list.add(course);
        // return course;
        courseDao.save(course);
        return course;
    }

    @Override
    public Course updateCourse(Course course) {
        // list.forEach(e -> {
        //     if (e.getId() == course.getId()) {
        //         e.setTitle(course.getTitle());
        //         e.setDescription(course.getDescription());
        //     }
        // });
        // return course;
        courseDao.save(course);
        return course;
    }

    @Override
    public void deleteCourse(long courseId) {
        // list = this.list.stream().filter(e -> e.getId() != courseId).collect(Collectors.toList());
        Course entity = courseDao.getOne(courseId);
        courseDao.delete(entity);
    }

} 