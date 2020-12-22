import React from 'react';
import {Link} from 'react-router-dom'

const AuthorBooks = ({books}) => {
    return(
      <>
        <h2>Component AuthorBooks</h2>
        <ul>
          {
            books.map(book => {
              return(
                <li key={book.id}>
                  <Link to={`/books/${book.id}`}>{book.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </>
    )
};

export default AuthorBooks;
// import React from 'react';
// import { Link } from 'react-router-dom';

// const AuthorBooks = ({ books }) => {
//   return (
//     <ul>
//       {books.map(book => (
//         <li key={book.id}>
//           <Link to={`/books/${book.id}`}>{book.title}</Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default AuthorBooks;
