import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";

import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

const API_URL =
  "https://book-manager-server-delta.vercel.app/books";


function App() {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchBooks = async () => {

      try {

        const res = await fetch(API_URL);
        const data = await res.json();

        setBooks(Array.isArray(data) ? data : []);

      } catch (error) {

        toast.error("Failed to load books");

      } finally {

        setLoading(false);

      }

    };


    fetchBooks();

  }, []);



  const handleAddBook = async (book) => {

    try {

      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
      });


      const data = await res.json();


      if (res.ok) {

        setBooks([data, ...books]);
        toast.success("Book added");

      }


    } catch {

      toast.error("Something went wrong");

    }

  };



  const handleDeleteBook = async (id) => {

    try {

      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
      });


      if (res.ok) {

        setBooks(
          books.filter(book => book.id !== id)
        );

        toast.success("Book deleted");

      }


    } catch {

      toast.error("Delete failed");

    }

  };



  const handleToggleRead = async (id) => {

    try {

      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT"
      });


      const updated = await res.json();


      if (res.ok) {

        setBooks(
          books.map(book =>
            book.id === id ? updated : book
          )
        );

      }


    } catch {

      toast.error("Update failed");

    }

  };




  return (

    <div className="min-h-screen bg-gray-50">


      <nav className="bg-white border-b">

        <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between">

          <h1 className="font-bold text-xl">
            BookShelf
          </h1>

          <span className="text-gray-500 text-sm">
            Book Management System by Walid
          </span>

        </div>

      </nav>



      <main className="max-w-6xl mx-auto px-5 py-8">


        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Manage Your Books
        </h2>

        <p className="text-gray-500 mb-8">
          Add, update and organize your reading list.
        </p>




        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">


          <section className="bg-white border rounded-lg p-5 h-fit">


            <h3 className="font-semibold text-lg mb-4">
              Add New Book
            </h3>


            <BookForm
              onAddBook={handleAddBook}
            />


          </section>





          <section className="md:col-span-2 bg-white border rounded-lg p-5">


            <h3 className="font-semibold text-lg mb-4">
              Books List
            </h3>



            {
              loading ?

                <p className="text-gray-500">
                  Loading...
                </p>

                :

                <BookList

                  books={books}

                  onDelete={handleDeleteBook}

                  onToggleRead={handleToggleRead}

                />

            }


          </section>


        </div>


      </main>



      <Toaster />


    </div>

  );

}


export default App;