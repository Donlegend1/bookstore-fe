import React from 'react';
import { Book } from '../../types';

interface BookCardProps {
    book: Book;
    // coverImageUrl:string
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="book-card">
      {book.coverImageUrl && <img src={book.coverImageUrl} alt={book.title} className="book-cover" />}
      <div className="book-details">
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author">by {book.author}</p>
        <p className="book-description">{book.description}</p>
        {book.rating && <p className="book-rating">Rating: {book.rating}/5</p>}
      </div>
    </div>
  );
};

export default BookCard;
