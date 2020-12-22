import Axios from 'axios';
import React, {Component} from 'react'
import { NavLink, Route } from 'react-router-dom';
import AuthorBooks from '../components/AuthorBooks'

class AuthorsView extends Component {
  state = {
    authors:[]
  }
  async componentDidMount(){
    const response = await Axios.get('http://localhost:4040/authors?_embed=books')
    console.log(response.data);
    this.setState({
      authors: response.data
    })
  }

  render(){
    return(
      <>
        <h1>Страница авторов</h1>
        <ul>
          {
            this.state.authors.map(author => {
            return (
              <li key={author.id}>
                <NavLink to={`${this.props.match.url}/${author.id}`}>
                  {author.name}
                </NavLink>
              </li>
            )
          })
          }
        </ul>
        {/* <Route path={`${this.props.match.path}/:authorId`} component={AuthorBooks}/> */}
        <Route
          path={`${this.props.match.path}/:authorId`}
          render={props => {
            const bookId = Number(props.match.params.authorId)
            const author = this.state.authors.find(({id}) => id === bookId)
            return author ? <AuthorBooks {...props} books={author.books}/> : null
          }}
        />
      </>

    )
  }
}

export default AuthorsView;



























// import React, { Component } from 'react';
// import Axios from 'axios';
// import { NavLink, Route } from 'react-router-dom';
// import AuthorBooks from '../components/AuthorBooks';

// class AuthorsView extends Component {
//   state = {
//     authors: [],
//   };

//   async componentDidMount() {
//     const response = await Axios.get(
//       ' http://localhost:3000/authors?_embed=books',
//     );

//     this.setState({ authors: response.data });
//   }

//   render() {
//     const { match } = this.props;

//     return (
//       <>
//         <h1>Это страница авторов</h1>

//         <ul>
//           {this.state.authors.map(author => (
//             <li key={author.id}>
//               <NavLink to={`${match.url}/${author.id}`}>{author.name}</NavLink>
//             </li>
//           ))}
//         </ul>

//         <Route
//           path={`${match.path}/:authorId`}
//           render={props => {
//             const bookId = Number(props.match.params.authorId);
//             const author = this.state.authors.find(({ id }) => id === bookId);

//             return author && <AuthorBooks {...props} books={author.books} />;
//           }}
//         />
//       </>
//     );
//   }
// }

// export default AuthorsView;
