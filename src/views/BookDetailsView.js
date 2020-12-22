import Axios from 'axios'
import React, { Component } from 'react'
class BookDetailsView extends Component{
  state = {
    authorId: 0,
    descr: "",
    genre: "",
    id: 0,
    imgUrl: "",
    title: ""
  }
  
  async componentDidMount(){
    const bookId = this.props.match.params.bookId
    const response = await Axios.get(`http://localhost:4040/books/${bookId}`)
    //console.log(response.data);
    this.setState({ ...response.data })
    console.log(this.state)
  }

  render(){
    const {imgUrl, title, genre, descr} = this.state
    return(
      <>
        <img src={imgUrl} alt={descr} />
        <h2>{title}</h2>
        <p>{descr}</p>
        <p>{genre}</p>
      </>
    )
  }
}


export default BookDetailsView
































// export default BookDetailsView;

// import React, { Component } from 'react';
// import Axios from 'axios';

// class BookDetailsView extends Component {
//   state = {
//     descr: null,
//     genre: null,
//     id: null,
//     imgUrl: null,
//     title: null,
//     author: null,
//   };

//   async componentDidMount() {
//     const { bookId } = this.props.match.params;
//     const response = await Axios.get(
//       `http://localhost:4040/books/${bookId}?_expand=author`,
//     );

//     this.setState({ ...response.data });
//   }

//   render() {
//     const { imgUrl, title, author, descr } = this.state;
//     return (
//       <>
//         <h1>Страница одной книги {this.props.match.params.bookId}</h1>
//         <img src={imgUrl} alt="" />
//         <h2>{title}</h2>
//         {author && <p>Автор: {author.name}</p>}
//         <p>{descr}</p>
//       </>
//     );
//   }
// }

// export default BookDetailsView;
