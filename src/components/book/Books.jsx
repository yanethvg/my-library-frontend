import React from "react";

const Books = ({ books, handleBorrow, permissions, mine }) => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg m-5">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Title
            </th>
            <th scope="col" className="py-3 px-6">
              Author
            </th>
            <th scope="col" className="py-3 px-6">
              Genre
            </th>
            <th scope="col" className="py-3 px-6">
              Stock
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr
              key={book.id}
              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            >
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {book.title}
              </th>
              <td className="py-4 px-6">{book.author}</td>
              <td className="py-4 px-6">{book.genre.name}</td>
              <td className="py-4 px-6">{book.stock}</td>
              <td className="py-4 px-6">
                {permissions.includes("books.borrow") && !mine &&(
                  <button
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={() => handleBorrow(book.id)}
                  >
                    Checkout
                  </button>
                )}
                {permissions.includes("books.return") && (
                  <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Checkin
                  </button>
                )}
                {permissions.includes("books.show") && (
                  <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-6">
                    Show
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
