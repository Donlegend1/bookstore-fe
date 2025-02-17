import React, { useEffect, useState } from 'react';
import { Book, Author } from '../../../types';
import { Link } from 'react-router-dom';
import endpoint from '../../../auth/endpoint';
import { ErrorAlert, SuccessAlert } from "../../../Toast/Toast";
import Loader from '../../../Loader/Loader';

const BookList: React.FC = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [authorsList, setAuthorsList] = useState<Author[]>([]);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [currentBook, setCurrentBook] = useState<Book | null>(null);
  const [filterText, setFilterText] = useState<string>('');
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 3;

  const getAllBooks = async () => {
    try {
      setLoading(true);
      const res = await endpoint.get(`/book/list`);
      setBookList(res.data.books);
      setFilteredBooks(res.data.books);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getAuthorsList = async () => {
    try {
      const res = await endpoint.get(`/author/list`);
      setAuthorsList(res.data.authors);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllBooks();
    getAuthorsList();
  }, []);

  useEffect(() => {
    setFilteredBooks(
      bookList.filter((book) =>
        book.title.toLowerCase().includes(filterText.toLowerCase()) ||
        (book.author as Author).fullname.toLowerCase().includes(filterText.toLowerCase()) ||
        book.description.toLowerCase().includes(filterText.toLowerCase())
      )
    );
    setCurrentPage(1); // Reset to first page on filter change
  }, [filterText, bookList]);

  const handleShowEditModal = (book: Book) => {
    setCurrentBook(book);
    setEditModal(true);
  };

  const handleHideEditModal = () => {
    setEditModal(false);
    setCurrentBook(null);
  };

  const handleShowDeleteModal = (book: Book) => {
    setCurrentBook(book);
    setDeleteModal(true);
  };

  const handleHideDeleteModal = () => {
    setDeleteModal(false);
  };

  const handleDeleteBook = async () => {
    if (currentBook) {
      try {
        const response = await endpoint.delete(`/book/${currentBook.id}`);
        setDeleteModal(false);
        getAllBooks();
        SuccessAlert(response.data.message);
      } catch (err: any) {
        console.error("Error deleting book:", err);
        ErrorAlert(err.response?.data?.message || 'Failed to delete book');
      }
    }
  };

  const handleSaveChanges = async () => {
    if (!currentBook) return;

    try {
      const data = new FormData();
      data.append("title", currentBook.title);
      data.append("author", (currentBook.author as Author).id!.toString());
      data.append("description", currentBook.description);
      data.append("coverImageUrl", currentBook.coverImageUrl as string);
      data.append("rating", currentBook.rating);

      await endpoint.post(`/book/${currentBook.id}`, data).then((res) => {
        setLoading(false);
        SuccessAlert(res.data.message);
        handleHideEditModal();
        getAllBooks();
      });
    } catch (error: any) {
      setLoading(false);
      ErrorAlert(error.response.data.message);
      console.error("Error updating book:", error);
    }
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
    const previousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="row mx-3">
      <div className="col-12 mt-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card_title">Books List</h4>
            <div className="single-table">
              {loading ? <Loader /> :
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
                        <th scope="col" className='text-left'>Book name</th>
                        <th scope="col" className='text-left'>Author</th>
                        <th scope="col" className='text-left'>Rating</th>
                        <th scope="col"></th>
                        <th scope="col">action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentBooks.map((book, index) => (
                        <tr key={book.id}>
                          <th scope="row">{index + 1}</th>
                          <td className='text-left'>{book.title}</td>
                          <td className='text-left'>{(book.author as Author).fullname}</td>
                          <td className='text-left'>{book.rating} <span className='fa fa-star'></span></td>
                          <td></td>
                          <td>
                            <ul className="d-flex justify-content-center">
                              <li className='mx-3'>
                                <Link to={`/book/${book.id}`}>View</Link>
                              </li>
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
                  <div className="d-flex justify-content-end">
                    
                    <button
                      type="button"
                      className="btn btn-primary mx-1"
                      onClick={previousPage}
                      disabled={ indexOfLastBook < filteredBooks.length}
                    >
                      <i className="fa fa-backward" aria-hidden="true"></i>
                      Previous
                    </button>
                     <button
                      type="button"
                      className="btn btn-primary"
                      onClick={nextPage}
                      disabled={indexOfLastBook >= filteredBooks.length}
                    >
                      Next
                      <i className="fa fa-forward" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>

      {editModal && (
        <div className="modal fade show d-block">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h6 className="modal-title">Edit Book</h6>
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
                  <select
                    className="form-control"
                    id="book-author"
                    value={(currentBook?.author as Author)?.id || ''}
                    onChange={(e) => {
                      const selectedAuthor = authorsList.find(author => author.id === parseInt(e.target.value));
                      setCurrentBook({ ...currentBook!, author: selectedAuthor! });
                    }}
                  >
                    <option value="">Select</option>
                    {authorsList.map((author) => (
                      <option key={author.id} value={author.id}>
                        {author.fullname}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="book-description" className="col-form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="book-description"
                    value={currentBook?.description || ''}
                    onChange={(e) => setCurrentBook({ ...currentBook!, description: e.target.value })}
                  ></textarea>
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
                <div className="form-group">
                  <label htmlFor="book-title" className="col-form-label">Book Cover</label>
                  <input
                    className="form-control"
                    type="file"
                    id="book-title"
                    onChange={(e) => {
                      if (e.target.files) {
                        setCurrentBook({ ...currentBook!, coverImageUrl: e.target.files[0] });
                      }
                    }}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-light" onClick={handleHideEditModal}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>Save changes</button>
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
