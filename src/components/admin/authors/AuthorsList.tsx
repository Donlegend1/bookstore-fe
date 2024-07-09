import React, { useState } from 'react';
import { Author } from '../../../types';

const AuthorsList: React.FC = () => {
const authorsData = [
{
id: 1,
name: "Shake spare",
biography: "About Shake spare",
books: [
{
id: 1,
title: "Book 1",
author: "Shake spare",
description: "Description 1",
coverImageUrl: "Cover 1",
rating: 4
},
{
id: 2,
title: "Book 2",
author: "Shake spare",
description: "Description 2",
coverImageUrl: "Cover 2",
rating: 4
}
]
},
{
id: 2,
name: "Author 2",
biography: "Biography 2",
books: [
{
id: 3,
title: "Book 3",
author: "Author 2",
description: "Description 3",
coverImageUrl: "Cover 3",
rating: 4
},
{
id: 4,
title: "Book 4",
author: "Author 2",
description: "Description 4",
coverImageUrl: "Cover 4",
rating: 4
}
]
}
];

const [authors, setAuthors] = useState(authorsData);
const [showAuthorModal, setShowAuthorModal] = useState<boolean>(false);
	const [showEditModal, setShowEditModal] = useState<boolean>(false);
		const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
			const [currentAuthor, setCurrentAuthor] = useState<Author | null>(null);

				const [authorDetails, setAuthorDetails] = useState<Author>({
					name: "",
					biography: "",
					books: []
					});

					const handleShowAuthorModal = () => {
					// setAuthorDetails({
					// id:null,
					// name: "",
					// biography: "",
					// books: []
					// });
					setShowAuthorModal(true);
					};

					const handleHideAuthorModal = () => {
					setShowAuthorModal(false);
					};

					const handleShowEditModal = () => {
					// setAuthorDetails(author);
					setShowEditModal(true);
					};

					const handleHideEditModal = () => {
					setShowEditModal(false);
					};

					const handleShowDeleteModal = () => {
					// setCurrentAuthor(author);
					setShowDeleteModal(true);
					};

					const handleHideDeleteModal = () => {
					setShowDeleteModal(false);
					};

					const handleSaveAuthor = () => {
					handleHideAuthorModal();
					};

					const handleUpdateAuthor = () => {
					handleHideEditModal();
					};

					const handleDeleteAuthor = () => {
					// setAuthors(updatedAuthors);
					handleHideDeleteModal();
					};

					return (
					<div className="row mx-3 ">
						<div className="col-12 mt-4">
							<div className="d-flex justify-content-end my-1 ">
								<button type="button" className="btn btn-primary btn-rounded mt-2" onClick={handleShowAuthorModal}>
                                        New Author
                                        <i className="fa fa-user" />
								</button>
							</div>

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
													{authors.map((author, index) =>
													<tr key={author.id}>
														<th scope="row">{index + 1}</th>
														<td>{author.name}</td>
														<td>{author.biography}</td>
														<td>
															{author.books.map((book, bookIndex) =>
															<div key={bookIndex}>{book.title}<br /></div>
															)}
														</td>
														<td><span className="badge badge-primary">Active</span></td>
														<td>
															<ul className="d-flex justify-content-center">
																<li className="mr-3">
																	<button type="button" className="btn btn-inverse-primary" onClick={()=> handleShowEditModal()}>
																		<i className="fa fa-edit" />
																	</button>
																</li>
																<li>
																	<button type="button" className="btn btn-inverse-danger" onClick={()=> handleShowDeleteModal()}>
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
							</div>
						</div>

						{/* New Author Modal */}
						{showAuthorModal && (
						<div className="modal fade show d-block" tabIndex={-1} role="dialog">
							<div className="modal-dialog" role="document">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title">New Author</h5>
										<button type="button" className="close" onClick={handleHideAuthorModal}><span>×</span></button>
									</div>
									<div className="modal-body">
										<div className="form-group">
											<label htmlFor="author-name" className="col-form-label">Author's Name</label>
											<input className="form-control" type="text" id="author-name" value={authorDetails.name} onChange={(e)=>
											setAuthorDetails({ ...authorDetails, name: e.target.value })} />
										</div>
										<div className="form-group">
											<label htmlFor="author-biography" className="col-form-label">Author's Biography</label>
											<textarea className="form-control" id="author-biography" value={authorDetails.biography} onChange={(e)=> setAuthorDetails({ ...authorDetails, biography: e.target.value })} />
																</div>
														</div>
														<div className="modal-footer">
																<button type="button" className="btn btn-light" onClick={handleHideAuthorModal}>Close</button>
																<button type="button" className="btn btn-primary" onClick={handleSaveAuthor}>Save changes</button>
														</div>
												</div>
										</div>
								</div>
						)}

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
																				value={authorDetails.name}
																				onChange={(e) => setAuthorDetails({ ...authorDetails, name: e.target.value })} />
																</div>
																<div className="form-group">
																		<label htmlFor="author-biography-edit" className="col-form-label">Author's Biography</label>
																		<textarea className="form-control" id="author-biography-edit"
																				value={authorDetails.biography}
																				onChange={(e) => setAuthorDetails({ ...authorDetails, biography: e.target.value })} />
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
																<p>Are you sure you want to delete {currentAuthor?.name}?</p>
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
