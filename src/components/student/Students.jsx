import React from "react";

const Students = ({ students, handleShow }) => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg m-5">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              First Name
            </th>
            <th scope="col" className="py-3 px-6">
              Last Name
            </th>
            <th scope="col" className="py-3 px-6">
              Email
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            >
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {student.first_name}
              </th>
              <td className="py-4 px-6">{student.last_name}</td>
              <td className="py-4 px-6">{student.email}</td>
              <td className="py-4 px-6">
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  onClick={() => handleShow(student.id)}
                >
                  See Books
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
