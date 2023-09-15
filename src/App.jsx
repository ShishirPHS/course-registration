import "./App.css";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";
import CourseCart from "./Components/CourseCart/CourseCart";
import { useState } from "react";

function App() {
  const [selectedCourse, setSelectedCourse] = useState([]);

  const handleSelectedCourse = (course) => {
    setSelectedCourse([...selectedCourse, course]);
  };

  return (
    <>
      <Header></Header>
      <div className="container mx-auto grid grid-cols-4 gap-6">
        <Courses handleSelectedCourse={handleSelectedCourse}></Courses>
        <CourseCart selectedCourse={selectedCourse}></CourseCart>
      </div>
    </>
  );
}

export default App;
