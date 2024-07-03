import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchBooks } from '../redux/actions/bookActions';

const BookList: React.FC = () => {
  const dispatch = useDispatch();
    const books = [
        {
            id: 1,
            title: "books",
          author:"Shake spare"
      }
  ]

  useEffect(() => {
    // dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
