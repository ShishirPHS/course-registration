import "./App.css";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";
import CourseCart from "./Components/CourseCart/CourseCart";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remaining, setRemaining] = useState(20);

  const creditLimit = 20;

  const handleSelectedCourse = (course) => {
    const isExist = selectedCourses.find((item) => item.id === course.id);
    let count = course.credit;

    if (isExist) {
      return toast.error("already selected", {
        autoClose: 2000,
        theme: "light",
      });
    } else {
      selectedCourses.forEach((item) => {
        count += item.credit;
      });

      const remainingCount = creditLimit - count;

      if (count > creditLimit) {
        return toast.error(
          "You do not have enough credit remaining to select this course.",
          {
            autoClose: 2000,
            theme: "light",
          }
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
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4 2xl:gap-6 px-5 lg:px-0">
        <Courses handleSelectedCourse={handleSelectedCourse}></Courses>
        <CourseCart
          selectedCourses={selectedCourses}
          totalCredit={totalCredit}
          remaining={remaining}
        ></CourseCart>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
