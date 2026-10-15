import BookItem from "./BookItem";


const BookList = ({
  books,
  onDelete,
  onToggleRead
}) => {


  if (!books.length)

    return (

      <p className="text-gray-500 text-center">
        No books available.
      </p>

    );



  return (

    <div>


      {
        books.map(book => (

          <BookItem

            key={book.id}

            book={book}

            onDelete={onDelete}

            onToggleRead={onToggleRead}

          />

        ))

      }


    </div>

  );


};


export default BookList;