import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchBooks } from '../redux/actions/bookActions';
import { RootState } from '../redux/store';
import BookCard from './BookCard';
import { Book } from '../../types';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const books:Book[] = useSelector((state: RootState) => state.books.books);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // dispatch(searchBooks(query));
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books or authors"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {books.map(book  => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Search;
