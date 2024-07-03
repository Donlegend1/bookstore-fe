import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../redux/store';
import { addBook, editBook, fetchBookDetails } from '../redux/actions/bookActions';

const AddEditBookForm: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const dispatch = useDispatch();
  const book = {title:"Mee", author:" Shedrack", description:" Big Author",};
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (id) {
    //   dispatch(fetchBookDetails(id));
      setTitle(book.title);
      setAuthor(book.author);
      setDescription(book.description);
    }
  }, [dispatch, id, book]);

  const handleSave = () => {
    if (id) {
    //   dispatch(editBook({ id, title, author, description }));
    } else {
    //   dispatch(addBook({ title, author, description }));
    }
  };

  return (
    <div>
      <h1>{id ? 'Edit Book' : 'Add Book'}</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      ></textarea>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default AddEditBookForm;
