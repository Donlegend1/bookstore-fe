import React, { useContext, useEffect, useState } from 'react';
import { Book } from '../../../types';
import endpoint from '../../../auth/endpoint';
import { useParams } from 'react-router-dom';
import Loader from '../../../Loader/Loader'; 
import { Nav, Tab, Button, Modal, Form } from 'react-bootstrap'; 
import { Context } from '../../../auth/Context';

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useContext(Context);
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [review, setReview] = useState({ rating: '', comment: '', review_by: user?.id || "", book_id: id });
   const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:8000/";

  const dummyReadingHistory = [
    { id: 1, user: 'John Doe', date: '2024-01-01', progress: '50%' },
    { id: 2, user: 'Jane Smith', date: '2024-02-15', progress: '75%' },
    { id: 3, user: 'Alice Johnson', date: '2024-03-10', progress: '100%' }
  ];


  //function to get single book
  const getSingleBook = async () => {
    setLoading(true);
    try {
      const res = await endpoint.get(`/book/${id}`);
      setBook(res.data.book);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleBook();
  }, [id]);


  //function to control modals
  const handleShowReviewModal = () => setShowReviewModal(true);
  const handleCloseReviewModal = () => setShowReviewModal(false);


  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({ ...prevReview, [name]: value }));
  };


  //function to submit reviews
  const handleSubmitReview = async () => {
    try {
      const reviewData = {
        ...review,
        review_by: user?.id || "",
        book_id: id
      };
      console.log(reviewData);
      
      const res = await endpoint.post(`/reviews`, reviewData);
      console.log(res.data);
      handleCloseReviewModal();
      setReview({ rating: '', comment: '', review_by: user?.id || "", book_id: id });
      getSingleBook();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mt-5">
      {book ? (
        <div className="card mb-4 mx-5 my-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={BACKEND_URL + book.coverImageUrl} alt="Book cover" className="card-img mt-5" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <Tab.Container defaultActiveKey="details">
                  <Nav variant="tabs">
                    <Nav.Item>
                      <Nav.Link eventKey="details">Details</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="reviews">Reviews</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="history">Reading History</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="details">
                      <h4 className="card-title mt-3">{book.title}</h4>
                      <fieldset className="mt-3">
                        <legend>Author Details</legend>
                        <div className="d-flex">
                          <img src={BACKEND_URL +  book.author.passport} alt="Author" className="img-thumbnail mr-3" style={{ width: '100px', height: '100px' }} />
                          <div>
                            <p><strong>Name:</strong> {book.author.fullname}</p>
                            <p><strong>Biography:</strong> {book.author.biography}</p>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset className="mt-3">
                        <legend>Book Description</legend>
                        <p>{book.description}</p>
                      </fieldset>
                      <div className="d-flex align-items-center mt-3">
                        <span className="mr-2">Rating:</span>
                        <div className="badge badge-primary">{book.rating}</div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="reviews">
                      {book.reviews && book.reviews.length > 0 ? (
                        <div>
                          {book.reviews.map((review) => (
                            <div key={review.id} className="mb-3">
                              <div className="d-flex justify-content-between">
                                <div>
                                  <strong>{review.user.fullname}</strong>
                                  <p>{review.comment}</p>
                                </div>
                                <div>
                                  <p>Rating:  <span className="badge badge-dark">{review.rating}  <span className='fa fa-star'></span></span></p>
                                 
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p>No reviews available.</p>
                      )}
                      <Button variant="primary" onClick={handleShowReviewModal} className="mt-3">
                        Add Review
                      </Button>
                    </Tab.Pane>
                    <Tab.Pane eventKey="history">
                      <h4>Reading History</h4>
                      {dummyReadingHistory.length > 0 ? (
                        <ul className="list-group">
                          {dummyReadingHistory.map((entry) => (
                            <li key={entry.id} className="list-group-item d-flex justify-content-between align-items-center">
                              <div>
                                <strong>User:</strong> {entry.user}
                                <br />
                                <strong>Date:</strong> {entry.date}
                                <br />
                                <strong>Progress:</strong> {entry.progress}
                              </div>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>No reading history available.</p>
                      )}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="alert alert-warning" role="alert">
          Book not found.
        </div>
      )}

      {/* modal to add review */}
      <Modal show={showReviewModal} onHide={handleCloseReviewModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formRating">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                name="rating"
                value={review.rating}
                onChange={handleReviewChange}
                min="1"
                max="5"
              />
            </Form.Group>
            <Form.Group controlId="formComment">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="comment"
                value={review.comment}
                onChange={handleReviewChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseReviewModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitReview}>
            Submit Review
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BookDetail;
