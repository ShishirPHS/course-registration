import "./App.css";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";
import CourseCart from "./Components/CourseCart/CourseCart";
import { useState } from "react";

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remaining, setRemaining] = useState(20);

  const creditLimit = 20;

  const handleSelectedCourse = (course) => {
    const isExist = selectedCourses.find((item) => item.id === course.id);
    let count = course.credit;

    if (isExist) {
      return alert("already selected");
    } else {
      selectedCourses.forEach((item) => {
        count += item.credit;
      });

      const remainingCount = creditLimit - count;

      if (count > creditLimit) {
        return alert(
          "You do not have enough credit remaining to select this course."
        );
      } else {
        setTotalCredit(count);
        setRemaining(remainingCount);
        setSelectedCourses([...selectedCourses, course]);
      }
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
          remaining={remaining}
        ></CourseCart>
      </div>
    </>
  );
}

export default App;
