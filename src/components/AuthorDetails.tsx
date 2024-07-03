import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../redux/store';
import { fetchAuthorDetails } from '../redux/actions/authorActions';

const AuthorDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
//   const author = useSelector((state: RootState) => state.authorDetails);
    const author = 
        {
            name: "Mee",
            biography: "Mee",

        books: [
            {
                id: 1,
                title:"Books"
                }
            ]
                
            
      }
  


  useEffect(() => {
    // dispatch(fetchAuthorDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      {author ? (
        <>
          <h1>{author.name}</h1>
          <p>Biography: {author.biography}</p>
          <h2>Books by {author.name}</h2>
          <ul>
            {author.books.map(book => (
              <li key={book.id}>{book.title}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AuthorDetails;
