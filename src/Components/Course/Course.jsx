import PropTypes from "prop-types";
import { BsCurrencyDollar } from "react-icons/bs";
import { BiBookOpen } from "react-icons/bi";

const Course = ({ course }) => {
  const { cover_photo, course_title, course_details, price, credit } = course;

  return (
    <div className="p-4 bg-white rounded-xl">
      <img
        className="w-full rounded-lg"
        src={cover_photo}
        alt="Cover photo of this course"
      />
      <h3 className="mt-4 mb-3 text-[#1C1B1B] text-lg font-semibold">
        {course_title}
      </h3>
      <p className="mb-4 text-sm text-[#1c1b1b99]">{course_details}</p>
      <div className="flex items-center">
        <p className="flex items-center mr-4">
          <BsCurrencyDollar></BsCurrencyDollar>{" "}
          <span className="text-[#1c1b1b99] font-medium ml-3">
            Price : {price}
          </span>
        </p>
        <p className="flex items-center">
          <BiBookOpen></BiBookOpen>{" "}
          <span className="text-[#1c1b1b99] font-medium ml-3">
            Credit : {credit}hr
          </span>
        </p>
      </div>
      <button className="bg-[#2F80ED] text-white w-full py-[9px] rounded-lg text-lg font-semibold mt-6">
        Select
      </button>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
};

export default Course;
