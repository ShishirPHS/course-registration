import { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types";

const Courses = ({ handleSelectedCourse }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-6 col-span-3 mb-20">
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          handleSelectedCourse={handleSelectedCourse}
        ></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
  handleSelectedCourse: PropTypes.func.isRequired,
};

export default Courses;
