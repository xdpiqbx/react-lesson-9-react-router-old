import React from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import AuthorsView from './views/AuthorsView'
import BookDetailsView from './views/BookDetailsView'
import BooksView from './views/BooksView'
import HomeView from './views/HomeView'
import NotFoundView from './views/NotFoundView'

// const linkStyle = {
//   base: {
//     color: 'black'
//   },
//   active: {
//     color: 'red'
//   }
// }

const App = () => {
  return (
    <>
      <ul>
        <li><NavLink exact to='/' className="NavLink" activeClassName="NavLink--active">Home</NavLink></li>
        <li><NavLink to='/authors' className="NavLink" activeClassName="NavLink--active">Authors</NavLink></li>
        <li><NavLink to='/books' className="NavLink" activeClassName="NavLink--active">Books</NavLink></li>
      </ul>
      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route path='/authors' component={AuthorsView} />
        <Route path='/books/:bookId' component={BookDetailsView} />
        <Route path='/books' component={BooksView} />
        <Route component={NotFoundView} />  {/* не передаю путь */}
      </Switch>
    </>
  )
}

export default App

































// import React from 'react';
// import { Route, NavLink, Switch } from 'react-router-dom';
// import HomeView from './views/HomeView';
// import AuthorsView from './views/AuthorsView';
// import BooksView from './views/BooksView';
// import NotFoundView from './views/NotFoundView';
// import BookDetailsView from './views/BookDetailsView';

// const App = () => (
//   <>
//     <ul>
//       <li>
//         <NavLink
//           exact
//           to="/"
//           className="NavLink"
//           activeClassName="NavLink--active"
//         >
//           Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/authors"
//           className="NavLink"
//           activeClassName="NavLink--active"
//         >
//           Authors
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/books"
//           className="NavLink"
//           activeClassName="NavLink--active"
//         >
//           Books
//         </NavLink>
//       </li>
//     </ul>

//     <Switch>
//       <Route exact path="/" component={HomeView} />
//       <Route path="/authors" component={AuthorsView} />
//       <Route exact path="/books" component={BooksView} />
//       <Route path="/books/:bookId" component={BookDetailsView} />
//       <Route component={NotFoundView} />
//     </Switch>
//   </>
// );

// export default App;
