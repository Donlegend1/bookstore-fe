import React, { useState, useEffect, useRef } from 'react';
import { Book, Author } from "../../../types";
import endpoint from '../../../auth/endpoint';
import { ErrorAlert, SuccessAlert } from "../../../Toast/Toast";
import { useNavigate } from 'react-router-dom';
import Loader from '../../../Loader/Loader';

const BookForm: React.FC = () => {
    const [bookData, setBookData] = useState<Book>({
        title: "",
        author: {} as Author,
        description: "",
        coverImageUrl: "",
        rating: "",
        reviews: []
    });
    const [authorsList, setAuthorsList] = useState<Author[]>([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const bookCoverRef = useRef<HTMLDivElement | null>(null);

    const [errors, setErrors] = useState({
        title: "",
        author: "",
        description: "",
        coverImageUrl: "",
       
    });

    const getPreview = (targetFile: File | null) => {
        if (targetFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(targetFile);
        } else {
            setPreviewImage(null);
        }
    };

    const handleDivClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleCreateBook = async () => {
        if (!validateForm()) return;

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

    const validateForm = () => {
        let formErrors = {
            title: "",
            author: "",
            description: "",
            coverImageUrl: "",
          
        };
        let isValid = true;

        if (!bookData.title.trim()) {
            formErrors.title = "Book title is required.";
            isValid = false;
        }

        if (!bookData.author || !bookData.author.id) {
            formErrors.author = "Please select an author.";
            isValid = false;
        }

        if (!bookData.description.trim()) {
            formErrors.description = "Book description is required.";
            isValid = false;
        }

        if (!bookData.coverImageUrl) {
            formErrors.coverImageUrl = "Book cover image is required.";
            isValid = false;
        }

     
        setErrors(formErrors);
        return isValid;
    };

    return (
        <div className="col-12 my-5">
            <div className="card">
                {loading ? <Loader /> :
                    <div className="card-body">
                        <h4 className="card_title">Book Details</h4>
                        <p className="text-muted font-14 mb-4">Complete the following details to add a new book.</p>
                        <div className="d-flex justify-content-center">
                            <div
                                className="card text-center p-3"
                                style={{
                                    width: '300px',
                                    height: '300px',
                                    border: '1px solid #ddd',
                                    cursor: 'pointer'
                                }}
                                onClick={handleDivClick}
                            >
                                {previewImage ? (
                                    <img
                                        src={previewImage as string}
                                        alt="Preview"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                ) : (
                                    <div ref={bookCoverRef} style={{ width: '100%', height: '100%', fontWeight: "bold" }}>
                                        Click to upload book image
                                    </div>
                                )}
                            </div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={(e) => {
                                    if (e.target.files && e.target.files.length > 0) {
                                        getPreview(e.target.files[0]);
                                        setBookData({ ...bookData, coverImageUrl: e.target.files[0] });
                                    }
                                }}
                            />
                        </div>
                        {errors.coverImageUrl && <div className="text-danger">{errors.coverImageUrl}</div>}
                        <div className="form-group">
                            <label htmlFor="book-title" className="col-form-label">Book Title</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Type in book title"
                                id="book-title"
                                onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
                            />
                            {errors.title && <div className="text-danger">{errors.title}</div>}
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
                            {errors.author && <div className="text-danger">{errors.author}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="book-description" className="col-form-label">Book Description</label>
                            <textarea
                                className="form-control"
                                placeholder="Type in book description"
                                id="book-description"
                                onChange={(e) => setBookData({ ...bookData, description: e.target.value })}
                            ></textarea>
                            {errors.description && <div className="text-danger">{errors.description}</div>}
                        </div>
                        <div className="form-group">
                            <label className="col-form-label">Book Rating</label>
                            <select
                                className="custom-select"
                                onChange={(e) => setBookData({ ...bookData, rating: e.target.value })}
                            >
                                <option value="" selected>Select rating</option>
                                <option value="1">One star</option>
                                <option value="2">Two stars</option>
                                <option value="3">Three stars</option>
                                <option value="4">Four stars</option>
                                <option value="5">Five stars</option>
                            </select>
                           
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
