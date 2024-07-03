import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchUserProfile, updateUserProfile } from '../redux/actions/userActions';

const UserProfile: React.FC = () => {
  const dispatch = useDispatch();
//   const profile = useSelector();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();

  useEffect(() => {
    // dispatch(fetchUserProfile());
  }, [dispatch]);

  const handleSave = () => {
    // dispatch(updateUserProfile({ name, email }));
    setEditing(false);
  };

  return (
    <div>
      <h1>User Profile</h1>
      {editing ? (
        <div>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>Name: {"profile.name"}</p>
          <p>Email: {"profile.email"}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
