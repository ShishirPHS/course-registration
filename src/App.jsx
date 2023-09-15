import "./App.css";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";
import CourseCart from "./Components/CourseCart/CourseCart";

function App() {
  return (
    <>
      <Header></Header>
      <div className="grid grid-cols-4 gap-6">
        <Courses></Courses>
        <CourseCart></CourseCart>
      </div>
    </>
  );
}

export default App;
