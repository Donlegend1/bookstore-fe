import React, { useState } from 'react';
import { Author } from "../../../types";
import endpoint from '../../../auth/endpoint';
import { ErrorAlert, SuccessAlert } from "../../../Toast/Toast";
import { useNavigate } from 'react-router-dom';
import Loader from '../../../Loader/Loader';

const CreateAuthorForm = () => {

  //set author data object
  const [authorData, setAuthorData] = useState<Author>({
    fullname: "",
    biography: "",
    passport: "",
  });

  //setting the state of the page
  const [loading, setLoading] = useState(false);

  //instantiating navigation
  const navigate = useNavigate();


  //function to create new authors
  const handleCreateAuthor = async() => {
    try {
      setLoading(true);
      const data = new FormData();
      data.append("fullname", authorData.fullname);
      data.append("biography", authorData.biography);
      data.append("passport", authorData.passport);
      await endpoint.post(`/author/create`, data).then((res) => {
        setLoading(false);
        SuccessAlert(res.data.message);
        navigate('/authors')
      });
    } catch (error:any) {
      setLoading(false);
      ErrorAlert(error.response.data.message);
      console.error("Error creating author:", error);
    }
  };

  return (
    <div className="col-12 my-5">
      <div className="card">
        <div className="card-body">
          <h4 className="card_title">Author Details</h4>
          <p className="text-muted font-14 mb-4">Complete the following details to add a new author.</p>
          <div className="form-group">
            <label htmlFor="fullname-input" className="col-form-label">Author's Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Author's Name"
              id="fullname-input"
              onChange={(e) => setAuthorData({ ...authorData, fullname: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="biography-input" className="col-form-label">Author's Biography</label>
            <textarea
              className="form-control"
              placeholder="About the Author"
              id="biography-input"
              onChange={(e) => setAuthorData({ ...authorData, biography: e.target.value })}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="passport-input" className="col-form-label">Author's Passport</label>
            <input
              className="form-control"
              type="file"
              id="passport-input"
              onChange={(e) => {
                if (e.target.files) {
                  setAuthorData({ ...authorData, passport: e.target.files[0] });
                }
              }}
            />
          </div>
          <div className="form-group float-right">
            <button className="btn btn-primary" onClick={handleCreateAuthor}>
              Save <span className="fa fa-book"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAuthorForm;
