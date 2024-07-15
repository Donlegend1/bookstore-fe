import React, { useState, useRef } from 'react';
import { Author } from "../../../types";
import endpoint from '../../../auth/endpoint';
import { ErrorAlert, SuccessAlert } from "../../../Toast/Toast";
import { useNavigate } from 'react-router-dom';
import Loader from '../../../Loader/Loader';

const CreateAuthorForm = () => {
  const [authorData, setAuthorData] = useState<Author>({
    fullname: "",
    biography: "",
    passport: "",
  });

  const [errors, setErrors] = useState({
    fullname: "",
    biography: "",
    passport: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const AuthorPictureRef = useRef<HTMLDivElement | null>(null);

  const handleCreateAuthor = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      const data = new FormData();
      data.append("fullname", authorData.fullname);
      data.append("biography", authorData.biography);
      data.append("passport", authorData.passport);
      await endpoint.post(`/author/create`, data).then((res) => {
        setLoading(false);
        SuccessAlert(res.data.message);
        navigate('/authors');
      });
    } catch (error: any) {
      setLoading(false);
      ErrorAlert(error.response.data.message);
      console.error("Error creating author:", error);
    }
  };

  const validateForm = () => {
    let formErrors = { fullname: "", biography: "", passport: "" };
    let isValid = true;

    if (!authorData.fullname.trim()) {
      formErrors.fullname = "Author's name is required.";
      isValid = false;
    }

    if (!authorData.biography.trim()) {
      formErrors.biography = "Author's biography is required.";
      isValid = false;
    }

    if (!authorData.passport) {
      formErrors.passport = "Author's passport image is required.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

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

  return (
    <div className="col-12 my-5 ">
      <div className="card">
        <div className="card-body">
          <h4 className="card_title">Author Details</h4>
          <p className="text-muted font-14 mb-4">Complete the following details to add a new author.</p>
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
                  style={{width: '100%', height: 'auto'}} 
                />
              ) : (
                <div ref={AuthorPictureRef} style={{width: '100%', height: '100%'}}>
                  Click to upload
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
                  setAuthorData({ ...authorData, passport: e.target.files[0] });
                }
              }}
            />
          </div>
          {errors.passport && <div className="text-danger">{errors.passport}</div>}
          <div className="form-group">
            <label htmlFor="fullname-input" className="col-form-label">Author's Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Author's Name"
              id="fullname-input"
              value={authorData.fullname}
              onChange={(e) => setAuthorData({ ...authorData, fullname: e.target.value })}
            />
            {errors.fullname && <div className="text-danger">{errors.fullname}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="biography-input" className="col-form-label">Author's Biography</label>
            <textarea
              className="form-control"
              placeholder="About the Author"
              id="biography-input"
              value={authorData.biography}
              onChange={(e) => setAuthorData({ ...authorData, biography: e.target.value })}
            ></textarea>
            {errors.biography && <div className="text-danger">{errors.biography}</div>}
          </div>
          <div className="form-group float-right">
            <button className="btn btn-primary" onClick={handleCreateAuthor}>
              Save <span className="fa fa-graduation-cap"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAuthorForm;
