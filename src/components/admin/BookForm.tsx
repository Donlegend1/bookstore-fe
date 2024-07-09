import React, {useState, useEffect} from 'react';
import { Book } from "../../types";

const BookForm = () => {
    const [bookData, setBookData] = useState<Book>({
        title: "",
        author: "",
        description: "",
        coverImageUrl: "",
        rating:""
      });
  const handleCreateBook = () => {
    console.log('====================================');
    console.log(bookData);
    console.log('====================================');
   
    };
    return (
        <div className="col-12 my-5">
            <div className="card">
                <div className="card-body">
                    <h4 className="card_title">Book Details</h4>
                    <p className="text-muted font-14 mb-4">Complete the following details to add a new book.</p>
                    <div className="form-group">
                        <label htmlFor="example-text-input" className="col-form-label">Book Title</label>
                        <input className="form-control" type="text" placeholder="She Stoops to Conquer" id="example-text-input" onChange={(e) => setBookData({...bookData, title :e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label className="col-form-label">Book Author</label>
                        <select className="form-control" onChange={(e) => setBookData({...bookData, author :e.target.value })} >
                            <option>Select</option>
                            <option>Large select</option>
                            <option>Small select</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="example-tel-input" className="col-form-label">Book Description</label>
                        <textarea className="form-control" placeholder="About She Stoops to Conquer"  name="" id="" onChange={(e) => setBookData({...bookData, description :e.target.value })} ></textarea>
                    </div>
                   
                    <div className="form-group">
                        <label className="col-form-label"> Book Rating</label>
                        <select className="custom-select" onChange={(e) => setBookData({...bookData, rating :e.target.value })} >
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                     <div className="form-group">
                        <label htmlFor="example-tel-input" className="col-form-label">Book Cover</label>
                        <input className="form-control" type='file' name="" id="" onChange={(e) => {
                            if (e.target.files) {
                            setBookData({ ...bookData, coverImageUrl: e.target.files[0] });
                            }
                        }} />
                    </div>
                    <div className="form-group float-right">
                        <button className='btn btn-primary' onClick={handleCreateBook}>Save <span className='fa fa-book'></span></button>
                    </div>
                        </div>
                    </div>
        </div>
    );
}

export default BookForm;
