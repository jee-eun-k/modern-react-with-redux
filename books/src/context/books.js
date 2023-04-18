import { createContext, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
	const [books, setBooks] = useState([]);

	const fetchBooks = async () => {
		const response = await axios.get('http://localhost:3001/books');
		setBooks(response.data);
	};

	const editBookById = async (id, newTitle) => {
		const response = await axios.put(`http://localhost:3001/books/${id}`, {
			title: newTitle,
		});
		const updatedBooks = books.map((book) => {
			// return book.id === id ? { ...book, title: newTitle } : book;
			return book.id === id ? { ...book, ...response.data } : book;
			// update all data instead of the one client requested (preventing outdated data)
		});
		setBooks(updatedBooks);
	};

	const createBook = async (title) => {
		// >> BAD CODE!
		// books.push({id: 123, title: title});
		// setBooks(books)

		// >> GOOD CODE! (without AXIOS)
		/* const id = Math.round(Math.random() * 9999);
		const updatedBooks = [...books, { id, title }];
		setBooks(updatedBooks); */

		const response = await axios.post('http://localhost:3001/books', {
			title,
		});
		setBooks([...books, response.data]);
	};

	const deleteBookById = async (id) => {
		await axios.delete(`http://localhost:3001/books/${id}`);

		const updatedBooks = books.filter((book) => {
			return book.id !== id;
		});
		setBooks(updatedBooks);
	};

	const valueToShare = {
		books,
		deleteBookById,
		editBookById,
		createBook,
		fetchBooks,
	};
	return (
		<BooksContext.Provider value={valueToShare}>
			{children}
		</BooksContext.Provider>
	);
}

export { Provider };
export default BooksContext;

// HOW TO IMPORT BOTH
// import BooksConter, { Provider } from '??/??'
