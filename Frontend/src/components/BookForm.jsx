import { useState } from "react";


const BookForm = ({ onAddBook }) => {


  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");



  const submit = (e) => {

    e.preventDefault();


    if (!title || !author)
      return;


    onAddBook({
      title,
      author
    });


    setTitle("");
    setAuthor("");

  };



  return (

    <form onSubmit={submit} className="space-y-4">


      <input

        className="w-full border rounded-md px-3 py-2"

        placeholder="Book title"

        value={title}

        onChange={e => setTitle(e.target.value)}

      />



      <input

        className="w-full border rounded-md px-3 py-2"

        placeholder="Author name"

        value={author}

        onChange={e => setAuthor(e.target.value)}

      />



      <button

        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-green-700"

      >

        Add Book

      </button>



    </form>

  );


};


export default BookForm;