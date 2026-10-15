import { FaTrash, FaCheck } from "react-icons/fa";


const BookItem = ({ book, onDelete, onToggleRead }) => {


  const read = book.status === "read";


  return (

    <div className="flex justify-between items-center border rounded-md p-4 mb-3">


      <div>

        <h3 className={`font-medium ${read ? "line-through text-gray-400" : "text-gray-800"
          }`}>

          {book.title}

        </h3>


        <p className="text-sm text-gray-500">
          {book.author}
        </p>


        <span className={`text-xs px-2 py-1 rounded ${read
            ?
            "bg-green-100 text-green-700"
            :
            "bg-yellow-100 text-yellow-700"
          }`}>

          {book.status}

        </span>


      </div>




      <div className="flex gap-2">


        <button

          onClick={() => onToggleRead(book.id)}

          className="px-3 py-2 text-sm border rounded hover:bg-gray-100"

        >

          <FaCheck />

        </button>



        <button

          onClick={() => onDelete(book.id)}

          className="px-3 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600"

        >

          <FaTrash />

        </button>



      </div>


    </div>

  );

};


export default BookItem;