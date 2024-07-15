import React, { useState, useEffect } from 'react';
import { Author } from '../../../types';
import endpoint from '../../../auth/endpoint';
import { useParams } from 'react-router-dom';
import Loader from '../../../Loader/Loader'; 
import { Nav, Tab, Button, Modal, Form, Card, Container, Row, Col } from 'react-bootstrap'; 

const AuthorDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [author, setAuthor] = useState<Author | null>(null);
  const [loading, setLoading] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [review, setReview] = useState({ rating: '', comment: '' });
  const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:8000/";

  const getSingleAuthor = async () => {
    setLoading(true);
    try {
      const res = await endpoint.get(`/author/${id}`);
      setAuthor(res.data.author);
      console.log('=================author===================');
      console.log(res.data.author);
      console.log('====================================');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleAuthor();
  }, [id]);

  const handleShowReviewModal = () => setShowReviewModal(true);
  const handleCloseReviewModal = () => setShowReviewModal(false);

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({ ...prevReview, [name]: value }));
  };



  if (loading) {
    return <Loader />;
  }

  return (
    <Container className="mt-5">
      {author ? (
        <Card className="mb-4">
          <Row className="no-gutters">
            <Col md={4}>
              <Card.Img variant="top" src={BACKEND_URL + author.passport} alt="Author" className="mt-3 ml-3" />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Tab.Container defaultActiveKey="details">
                  <Nav variant="tabs">
                    <Nav.Item>
                      <Nav.Link eventKey="details">Biography</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="reviews">Books</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="details">
                      <Card.Title className="mt-3">{author.fullname}</Card.Title>
                      <Card.Text>
                        <strong>Biography:</strong> {author.biography}
                      </Card.Text>
                      <Button variant="primary" onClick={handleShowReviewModal} className="mt-3">
                        Add Review
                      </Button>
                    </Tab.Pane>
                    <Tab.Pane eventKey="reviews">
                    {author.books && author.books.length > 0 ? (
                        <div>
                          {author.books.map((book) => (
                            <div key={book.id} className="mb-3">
                              <div className="d-flex justify-content-between">
                                <div>
                                  <strong>{book.title}</strong>
                                 
                                </div>
                                <div>
                                  <p>Rating:  <span className="badge badge-dark">{book.rating}  <span className='fa fa-star'></span></span></p>
                                 
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p>No book available.</p>
                      )}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ) : (
        <div className="alert alert-warning" role="alert">
          Author not found.
        </div>
      )}

    
    </Container>
  );
};

export default AuthorDetails;
