import "./App.css";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";
import CourseCart from "./Components/CourseCart/CourseCart";
import { useState } from "react";

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);

  const handleSelectedCourse = (course) => {
    const isExist = selectedCourses.find((item) => item.id === course.id);
    let count = course.credit;

    if (isExist) {
      return alert("already selected");
    } else {
      selectedCourses.forEach((item) => {
        count += item.credit;
      });

      setTotalCredit(count);
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="container mx-auto grid grid-cols-4 gap-6">
        <Courses handleSelectedCourse={handleSelectedCourse}></Courses>
        <CourseCart
          selectedCourses={selectedCourses}
          totalCredit={totalCredit}
        ></CourseCart>
      </div>
    </>
  );
}

export default App;
