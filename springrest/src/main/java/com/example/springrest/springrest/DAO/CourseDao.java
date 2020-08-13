package com.example.springrest.springrest.DAO;

import com.example.springrest.springrest.entity.Course;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseDao extends JpaRepository<Course, Long> {

    
}