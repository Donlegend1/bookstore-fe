import React, { useState, useEffect } from 'react';
import { Author } from '../../../types';
import endpoint from '../../../auth/endpoint';
import { ErrorAlert, SuccessAlert } from "../../../Toast/Toast";
import Loader from '../../../Loader/Loader';

const AuthorsList: React.FC = () => {

	//setting various states of the application
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [currentAuthor, setCurrentAuthor] = useState<Author | null>(null);
	const [authorsList, setAuthorsList] = useState<Author[]>([]);
	 const [loading, setLoading] = useState(false);

	
	//author details state
  const [authorDetails, setAuthorDetails] = useState<Author>({
    // id: '',
    fullname: "",
    passport: "",
    biography: "",
    books: []
  });

	//function to get all authors
  const getAllAuthors = async () => {
	  try {
	setLoading(true);
      const res = await endpoint.get(`/author/list`);
		  setAuthorsList(res.data.authors);
		  setLoading(false);
			} catch (err) {
			console.error(err);
			}
		};

  useEffect(() => {
    getAllAuthors();
  }, []);

	
	//function to show edit modal
  const handleShowEditModal = (author: Author) => {
    setAuthorDetails(author);
    setShowEditModal(true);
  };

	//function to hide edit modal
  const handleHideEditModal = () => {
    setShowEditModal(false);
  };

	//function to show delete modal
  const handleShowDeleteModal = (author: Author) => {
    setCurrentAuthor(author);
    setShowDeleteModal(true);
  };

	//hide delete modal
  const handleHideDeleteModal = () => {
    setShowDeleteModal(false);
  };

	//function to update author
  const handleUpdateAuthor = async () => {
	  try {
		  setLoading(true);
      const response = await endpoint.put(`/author/${authorDetails.id}`, authorDetails);
      	getAllAuthors();
		handleHideEditModal();
		setLoading(false);
      SuccessAlert(response.data.message);
    } catch (error:any) {
      console.error("There was an error updating the author!", error);
      if (error.response && error.response.data && error.response.data.message) {
        ErrorAlert(error.response.data.message);
      } else {
        ErrorAlert('Failed to update author.');
      }
    }
  };

	
	//function to delete author
  const handleDeleteAuthor = async () => {
	  try {
		  setLoading(true);
      if (currentAuthor) {
        const response = await endpoint.delete(`/author/${currentAuthor.id}`);
        getAllAuthors();
		  handleHideDeleteModal();
		  setLoading(false);
        SuccessAlert(response.data.message);
      }
    } catch (error:any) {
      console.error("There was an error deleting the author!", error);
		if (error.response && error.response.data && error.response.data.message) {
		  handleHideDeleteModal();
        ErrorAlert(error.response.data.message);
		} else {
		handleHideDeleteModal();
		ErrorAlert('Failed to delete author.');
			
      }
    }
  };

  return (
    <div className="row mx-3">
      <div className="col-12 mt-4">
        <div className="d-flex justify-content-end my-1">
          <a href='/new-author' className="btn btn-primary btn-rounded mt-2">
            New Author
            <i className="fa fa-user" />
          </a>
        </div>
		{loading ? <Loader /> :
        <div className="card">
          <div className="card-body">
            <h4 className="card_title">Authors List</h4>
            <div className="single-table">
              <div className="table-responsive">
                <table className="table table-hover progress-table text-center">
                  <thead className="text-uppercase">
                    <tr>
                      <th scope="col">S/N</th>
                      <th scope="col">Authors name</th>
                      <th scope="col">Biography</th>
                      <th scope="col">Books</th>
                      <th scope="col">status</th>
                      <th scope="col">action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {authorsList.map((author, index) =>
                      <tr key={author.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{author.fullname}</td>
                        <td>{author.biography}</td>
                        <td>
                          {author.books && author.books.map((book, bookIndex) =>
                            <div key={bookIndex}>{book.title}<br /></div>
                          )}
                        </td>
                        <td><span className="badge badge-primary">Active</span></td>
                        <td>
                          <ul className="d-flex justify-content-center">
                            <li className="mr-3">
                              <button type="button" className="btn btn-inverse-primary" onClick={() => handleShowEditModal(author)}>
                                <i className="fa fa-edit" />
                              </button>
                            </li>
                            <li>
                              <button type="button" className="btn btn-inverse-danger" onClick={() => handleShowDeleteModal(author)}>
                                <i className="ti-trash" />
                              </button>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>}
      </div>

      {/* Edit Author Modal */}
      {showEditModal && (
        <div className="modal fade show d-block" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Author</h5>
                <button type="button" className="close" onClick={handleHideEditModal}><span>×</span></button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="author-name-edit" className="col-form-label">Author's Name</label>
                  <input className="form-control" type="text" id="author-name-edit"
                    value={authorDetails.fullname}
                    onChange={(e) => setAuthorDetails({ ...authorDetails, fullname: e.target.value })} />
                </div>
                <div className="form-group">
                  <label htmlFor="author-biography-edit" className="col-form-label">Author's Biography</label>
                  <textarea className="form-control" id="author-biography-edit"
                    value={authorDetails.biography}
                    onChange={(e) => setAuthorDetails({ ...authorDetails, biography: e.target.value })} />
                </div>
                <div className="form-group">
                  <label htmlFor="author-passport-edit" className="col-form-label">Author's Passport</label>
                  <input className="form-control" type="file" id="author-passport-edit"
                    onChange={(e) => {
                      if (e.target.files) {
                        setAuthorDetails({ ...authorDetails, passport: e.target.files[0] });
                      }
                    }} />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-light" onClick={handleHideEditModal}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleUpdateAuthor}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Author Modal */}
      {showDeleteModal && (
        <div className="modal fade show d-block" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete Author</h5>
                <button type="button" className="close" onClick={handleHideDeleteModal}><span>×</span></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete {currentAuthor?.fullname}?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-light" onClick={handleHideDeleteModal}>Close</button>
                <button type="button" className="btn btn-danger" onClick={handleDeleteAuthor}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthorsList;
