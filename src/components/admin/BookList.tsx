import React, { useEffect, useState } from 'react';

// import { fetchBooks } from '../../redux/actions/bookActions';
import { Book } from '../../types';
import { Link } from 'react-router-dom';

const BookList: React.FC = () => {

  const books = [
    {
      id: 1,
      title: 'books',
      author: 'Shake spare',
      description: ' about shakeSpare',
      coverImageUrl: ' Books',
      rating: '4'
    },
    {
      id: 2,
      title: 'books',
      author: 'Shake spare',
      description: ' about shakeSpare',
      coverImageUrl: ' Books',
      rating: '4'
    },
    {
      id: 3,
      title: 'books',
      author: 'Shake spare',
      description: ' about shakeSpare',
      coverImageUrl: ' Books',
      rating: '4'
    }
  ];

  const [editModal, setEditModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [currentBook, setCurrentBook] = useState<Book | null>(null);
  const [filterText, setFilterText] = useState<string>('');
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);

  useEffect(() => {
    // dispatch(fetchBooks());
  }, []);

  useEffect(() => {
    setFilteredBooks(
      books.filter((book) =>
        book.title.toLowerCase().includes(filterText.toLowerCase()) ||
        book.author.toLowerCase().includes(filterText.toLowerCase()) ||
        book.description.toLowerCase().includes(filterText.toLowerCase())
      )
    );
  }, []);

  const handleShowEditModal = (book: Book) => {
    setCurrentBook(book);
    setEditModal(true);
  };

  const handleHideEditModal = () => {
    setEditModal(false);
  };

  const handleShowDeleteModal = (book: Book) => {
    setCurrentBook(book);
    setDeleteModal(true);
  };

  const handleHideDeleteModal = () => {
    setDeleteModal(false);
  };

  const handleDeleteBook = () => {
    if (currentBook) {
      // dispatch delete action
      setDeleteModal(false);
    }
  };

  return (
    <div className="row mx-3 ">
      <div className="col-12 mt-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card_title">Books List</h4>
            <div className="single-table">
              <div className="table-responsive">
                <input
                  type="text"
                  placeholder="Filter books..."
                  className="form-control mb-3"
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                />
                <table className="table table-hover progress-table text-center">
                  <thead className="text-uppercase">
                    <tr>
                      <th scope="col">S/N</th>
                      <th scope="col">Book name</th>
                      <th scope="col">Author</th>
                      <th scope="col">Rating</th>
                      <th scope="col">Description</th>
                      <th scope="col">Details</th>
                      <th scope="col">status</th>
                      <th scope="col">action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBooks.map((book, index) => (
                      <tr key={book.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.rating}</td>
                        <td>{book.description}</td>
                        <td>
                          <Link to={`/book/${book.id}`}>View</Link>
                        </td>
                        <td>
                          <span className="badge badge-primary">Progress</span>
                        </td>
                        <td>
                          <ul className="d-flex justify-content-center">
                            <li className="mr-3">
                              <button type="button" className="btn btn-inverse-primary" onClick={() => handleShowEditModal(book)}>
                                <i className="fa fa-edit" />
                              </button>
                            </li>
                            <li>
                              <button type="button" className="btn btn-inverse-danger" onClick={() => handleShowDeleteModal(book)}>
                                <i className="ti-trash" />
                              </button>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {editModal && (
        <div className="modal fade show d-block">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Book</h5>
                <button type="button" className="close" onClick={handleHideEditModal}>
                  <span>×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="book-title" className="col-form-label">Book Title</label>
                  <input
                    className="form-control"
                    type="text"
                    id="book-title"
                    value={currentBook?.title || ''}
                    onChange={(e) => setCurrentBook({ ...currentBook!, title: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="book-author" className="col-form-label">Author</label>
                  <input
                    className="form-control"
                    type="text"
                    id="book-author"
                    value={currentBook?.author || ''}
                    onChange={(e) => setCurrentBook({ ...currentBook!, author: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="book-description" className="col-form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="book-description"
                    value={currentBook?.description || ''}
                    onChange={(e) => setCurrentBook({ ...currentBook!, description: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="book-rating" className="col-form-label">Rating</label>
                  <select
                    className="form-control"
                    id="book-rating"
                    value={currentBook?.rating || ''}
                    onChange={(e) => setCurrentBook({ ...currentBook!, rating: e.target.value })}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-light" onClick={handleHideEditModal}>Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {deleteModal && (
        <div className="modal fade show d-block">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete Book</h5>
                <button type="button" className="close" onClick={handleHideDeleteModal}>
                  <span>×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete {currentBook?.title}?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-light" onClick={handleHideDeleteModal}>Close</button>
                <button type="button" className="btn btn-danger" onClick={handleDeleteBook}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookList;
