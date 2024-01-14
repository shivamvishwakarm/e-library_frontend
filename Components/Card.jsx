const Card = ({ book }) => {
    return (
      <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 border-2">
        <img className="w-full h-64  object-center" src={book.thumbnail} alt="Book Cover" />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">Book Title</h2>
          <p className="text-gray-600 mt-2">Author Name</p>
          <div className="mt-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
              Purchase
            </button>
          </div>
        </div>
      </div>
    );
  }

export default Card