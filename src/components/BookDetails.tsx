import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../redux/store';
import { fetchBookDetails } from '../redux/actions/bookActions';
import { time } from 'console';

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
    const book = {
        title: "Book title",
        author: "Shakespare",
        description:"Book description"
  };

  useEffect(() => {
    // dispatch(fetchBookDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      {book ? (
        <>
          <h1>{book.title}</h1>
          <p>Author: {book.author}</p>
          <p>Description: {book.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetails;
