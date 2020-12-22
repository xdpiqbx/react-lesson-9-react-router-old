import Axios from 'axios';
import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class BooksView extends Component {
  state = {
    books:[]
  }
  async componentDidMount(){
    const response = await Axios.get('http://localhost:4040/books')
    console.log(response.data);
    this.setState({
      books: response.data
    })
  }

  render(){
    return(
      <>
        <h1>Страница книг</h1>
        <ul>
          {
            this.state.books.map(book => {
              return (
                <li key={book.id}>
                  <Link to={`${this.props.match.url}/${book.id}`}>
                    {book.title}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </>

    )
  }
}

export default BooksView;
























// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Axios from 'axios';

// class BooksView extends Component {
//   state = {
//     books: [],
//   };

//   async componentDidMount() {
//     const response = await Axios.get('http://localhost:4040/books');

//     this.setState({ books: response.data });
//   }

//   render() {
//     return (
//       <>
//         <h1>Это страница книг</h1>

//         <ul>
//           {this.state.books.map(book => (
//             <li key={book.id}>
//               <Link to={`${this.props.match.url}/${book.id}`}>
//                 {book.title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

// export default BooksView;
