import React from 'react';

const BookForm = () => {
    return (
        <div className="col-12 my-5">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card_title">Book Details</h4>
                            <p className="text-muted font-14 mb-4">Here are examples of <code>.form-control</code> applied to each textual HTML5 <code>&lt;input&gt;</code> <code>type</code>.</p>
                            <div className="form-group">
                                <label htmlFor="example-text-input" className="col-form-label">Name</label>
                                <input className="form-control" type="text" value="Carlos Rath" id="example-text-input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="example-email-input" className="col-form-label">Email</label>
                                <input className="form-control" type="email" value="name@example.com" id="example-email-input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="example-tel-input" className="col-form-label">Telephone</label>
                                <input className="form-control" type="tel" value="+880-1233456789" id="example-tel-input" />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Select</label>
                                <select className="form-control">
                                    <option>Select</option>
                                    <option>Large select</option>
                                    <option>Small select</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Custom Select</label>
                                <select className="custom-select">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                    </div>
                    <div className="form-group float-right">
                        <button className='btn btn-primary'>Save <span className='fa fa-book'></span></button>
                    </div>
                        </div>
                    </div>
                </div>
    );
}

export default BookForm;
