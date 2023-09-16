# Online Courses

Online Courses is a React-based platform that provides a wide range of educational opportunities. Explore different types of courses, manage your credits, and receive real-time notifications for a seamless learning experience.

## Features

- **Different Types of Courses**: Choose from a variety of courses, including C programming, C++, Python, Data Structures, problem-solving, and more to tailor your learning journey.

- **Preventing Duplicate Course Selection**: Avoid duplicates by preventing users from selecting the same course multiple times.

- **Credit Limit Control**: Manage your course selection within allocated credit limits, ensuring a balanced learning experience.

- **Notifications Using React Toast**: Receive notifications via React Toast when attempting to select a course multiple times or when your credits are insufficient for course enrollment.

# State Management in this Project

In this React project, state management is efficiently handled using the `useState` hook. The application keeps track of selected courses, total credits, and the remaining credit limit. The `handleSelectedCourse` function prevents duplicate course selections and ensures that users do not exceed their allocated credit limit. React-toastify is integrated to provide real-time feedback through toast notifications, notifying users of important events like course duplicates or credit limit violations. The code maintains a clear and organized structure, making it a user-friendly and effective online course selection platform.
