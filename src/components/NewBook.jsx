// NewBook.jsx
import React, { useState } from 'react';

function NewBook() {
  const [newBook, setNewBook] = useState({
    title: '',
    genres: [],
    price: '',
    condition: '',
    image: '',
    isDonated: true, // Mark as donated
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  const handleSubmitNewBook = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.price || !newBook.genres.length || !newBook.condition || !newBook.image) {
      alert('Please fill in all fields!');
      return;
    }

    // Handle book donation (for example, add it to the backend or state)
    alert('Thank you for donating a book!');
    // Optionally reset the form
    setNewBook({
      title: '',
      genres: [],
      price: '',
      condition: '',
      image: '',
      isDonated: true,
    });
  };

  return (
    <div className="text-center p-8 bg-yellow-50 flex items-center justify-center">
      <section className="text-center p-4 w-3/4">
        <h2 className="text-4xl font-semibold text-yellow-900 mb-4">Donate a New Book</h2>
        <form onSubmit={handleSubmitNewBook} className="mt-6 p-4 bg-white rounded shadow-lg">
          <input
            type="text"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
            placeholder="Title"
            className="mb-2 p-2 border border-lime-500 rounded w-full"
          />
          <input
            type="text"
            name="price"
            value={newBook.price}
            onChange={handleInputChange}
            placeholder="Price"
            className="mb-2 p-2 border border-lime-500 rounded w-full"
          />
          <input
            type="text"
            name="condition"
            value={newBook.condition}
            onChange={handleInputChange}
            placeholder="Condition"
            className="mb-2 p-2 border border-lime-500 rounded w-full"
          />
          <input
            type="text"
            name="image"
            value={newBook.image}
            onChange={handleInputChange}
            placeholder="Image URL"
            className="mb-2 p-2 border border-lime-500 rounded w-full"
          />
          <input
            type="text"
            name="genres"
            value={newBook.genres.join(', ')}
            onChange={(e) => setNewBook({ ...newBook, genres: e.target.value.split(', ') })}
            placeholder="Genres (comma separated)"
            className="mb-2 p-2 border border-lime-500 rounded w-full"
          />
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-4"
          >
            Submit New Book
          </button>
        </form>
      </section>
    </div>
  );
}

export default NewBook;
