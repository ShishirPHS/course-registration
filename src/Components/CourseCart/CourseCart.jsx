import PropTypes from "prop-types";

const CourseCart = ({ selectedCourses, totalCredit, remaining }) => {
  return (
    <div>
      <div className="bg-white rounded-xl p-6 mb-20 lg:mb-0">
        <h4 className="text-base sm:text-lg lg:text-[13px] xl:text-lg font-bold text-[#2F80ED]">
          Credit Hour Remaining {remaining} hr
        </h4>
        <div className="max-w-[1000px] h-[1px] bg-[#1c1b1b33] my-4"></div>
        <h3 className="text-xl lg:text-lg xl:text-xl font-bold text-[#1C1B1B] mb-5">
          Course Name
        </h3>
        <ol className="list-decimal list-inside mb-6">
          {selectedCourses.map((course) => (
            <li key={course.id} className="text-[#1c1b1b99] mb-1">
              {course.course_title}
            </li>
          ))}
        </ol>
        <div className="max-w-[1000px] h-[1px] bg-[#1c1b1b33]"></div>
        <p className="text-[#1c1b1bcc] font-medium mt-4">
          Total Credit Hour : {totalCredit}
        </p>
      </div>
    </div>
  );
};

CourseCart.propTypes = {
  selectedCourses: PropTypes.array.isRequired,
  totalCredit: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
};

export default CourseCart;
