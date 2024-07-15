import React, { useState, useEffect, useContext, ChangeEvent, FormEvent } from 'react';
import endpoint from '../../../auth/endpoint';
import Loader from '../../../Loader/Loader';
import { Context } from '../../../auth/Context';
import { Form, Button, Container } from 'react-bootstrap';
import { User } from '../../../types';


const UpdateUser: React.FC = () => {
  const { user } = useContext(Context);
  const [userData, setUserData] = useState<User>({
    fullname: user?.fullname || '',
    email: user?.email || '',
    password: '',
    passport: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'passport' && files) {
      setUserData((prevData) => ({ ...prevData, passport: files[0] }));
    } else {
      setUserData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      data.append('fullname', userData.fullname);
      data.append('email', userData.email);
      if (userData.password) {
        data.append('password', userData.password);
      }
      if (userData.passport) {
        data.append('passport', userData.passport);
      }

      const res = await endpoint.post('/user/update', data);
      console.log(res.data);
      setUserData({
        ...userData,
        fullname: res.data.user.fullname,
        email: res.data.user.email,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullname"
            value={userData.fullname}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Passport</Form.Label>
          <Form.Control
            type="file"
            name="passport"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default UpdateUser;
