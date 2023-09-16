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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 2xl:gap-6 lg:col-span-3 mb-5 lg:mb-20 ">
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
