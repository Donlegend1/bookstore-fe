import React, { useState, useEffect } from 'react';
import { Book, Author } from "../../../types";
import endpoint from '../../../auth/endpoint';
import { ErrorAlert, SuccessAlert } from "../../../Toast/Toast";
import { useNavigate } from 'react-router-dom';
import Loader from '../../../Loader/Loader';

const BookForm: React.FC = () => {

    //setting various state in this component
    const [bookData, setBookData] = useState<Book>({
        title: "",
        author: {} as Author,
        description: "",
        coverImageUrl: "",
        rating: ""
    });
    const [authorsList, setAuthorsList] = useState<Author[]>([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();



//function to create book
    const handleCreateBook = async () => {
        try {
            setLoading(true);
            const data = new FormData();
            data.append("title", bookData.title);
            data.append("author", (bookData.author as Author).id!.toString());
            data.append("description", bookData.description);
            data.append("coverImageUrl", bookData.coverImageUrl as string);
            data.append("rating", bookData.rating);

            await endpoint.post(`/book/create`, data).then((res) => {
                setLoading(false);
                SuccessAlert(res.data.message);
                navigate('/books');
            });
        } catch (error: any) {
            setLoading(false);
            ErrorAlert(error.response.data.message);
            console.error("Error creating book:", error);
        }
    };


    //function to get all authors
    const getAuthorsList = async () => {
        try {
            const res = await endpoint.get(`/author/list`);
            setAuthorsList(res.data.authors);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getAuthorsList();
    }, []);

    return (
        <div className="col-12 my-5">
            <div className="card">
                {loading ? <Loader /> :
                <div className="card-body">
                    <h4 className="card_title">Book Details</h4>
                    <p className="text-muted font-14 mb-4">Complete the following details to add a new book.</p>
                    <div className="form-group">
                        <label htmlFor="book-title" className="col-form-label">Book Title</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="She Stoops to Conquer"
                            id="book-title"
                            onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label className="col-form-label">Book Author</label>
                        <select
                            className="form-control"
                            onChange={(e) => {
                                const selectedAuthor = authorsList.find(author => author.id === parseInt(e.target.value));
                                setBookData({ ...bookData, author: selectedAuthor! });
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
                        <label htmlFor="book-description" className="col-form-label">Book Description</label>
                        <textarea
                            className="form-control"
                            placeholder="About She Stoops to Conquer"
                            id="book-description"
                            onChange={(e) => setBookData({ ...bookData, description: e.target.value })}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label className="col-form-label">Book Rating</label>
                        <select
                            className="custom-select"
                            onChange={(e) => setBookData({ ...bookData, rating: e.target.value })}
                        >
                            <option value="" selected>Open this select menu</option>
                            <option value="1">One star</option>
                            <option value="2">Two stars</option>
                            <option value="3">Three stars</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="book-cover" className="col-form-label">Book Cover</label>
                        <input
                            className="form-control"
                            type="file"
                            id="book-cover"
                            onChange={(e) => {
                                if (e.target.files) {
                                    setBookData({ ...bookData, coverImageUrl: e.target.files[0] });
                                }
                            }}
                        />
                    </div>
                    <div className="form-group float-right">
                        <button className='btn btn-primary' onClick={handleCreateBook}>
                            Save <span className='fa fa-book'></span>
                        </button>
                    </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default BookForm;
