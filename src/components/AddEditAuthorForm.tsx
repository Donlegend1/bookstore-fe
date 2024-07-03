import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../redux/store';
import { addBook, editBook, fetchBookDetails } from '../redux/actions/bookActions';

interface IFormInput {
  title: string;
  author: string;
  description: string;
}

const AddEditBookForm: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const dispatch = useDispatch();
  const book = useSelector((state: RootState) => state.books.bookDetails);

  useEffect(() => {
    if (id) {
    //   dispatch(fetchBookDetails(id));
    }
  }, [id, dispatch]);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    author: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
  });

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema)
  });

  useEffect(() => {
    if (book) {
      setValue('title', book.title);
      setValue('author', book.author);
      setValue('description', book.description);
    }
  }, [book, setValue]);

  const onSubmit: SubmitHandler<IFormInput> = data => {
    if (id) {
    //   dispatch(editBook({ id, ...data }));
    } else {
    //   dispatch(addBook(data));
    }
  };

  return (
    <div>
      <h1>{id ? 'Edit Book' : 'Add Book'}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Title:
          <input {...register('title')} />
          {errors.title && <div>{errors.title.message}</div>}
        </label>
        <label>
          Author:
          <input {...register('author')} />
          {errors.author && <div>{errors.author.message}</div>}
        </label>
        <label>
          Description:
          <textarea {...register('description')} />
          {errors.description && <div>{errors.description.message}</div>}
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddEditBookForm;
