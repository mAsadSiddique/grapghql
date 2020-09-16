import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';

const GET_BOOK_DATA = gql`
  query GET_BOOKS {
    books {
      author
      title
    }
  }
`;


const ADD_BOOKS = gql`
  mutation addBooks($title: String!, $author: String!) {
    addBooks(
      input: {title: $title, author: $author}
   ) {
      title
      author
    }
  }
`;


function Books() {
  const { loading, error, data } = useQuery(GET_BOOK_DATA);

  const [UPDATE_BOOKS] = useMutation(ADD_BOOKS);

  console.log([UPDATE_BOOKS]);

  if (loading)
    return <h2>Loading</h2>
  if (error)
    return <h2>error</h2>

  const { books } = data;
  console.log(books)
  return (
    <div>
      <h1>Books List</h1>
      <table border={2}>
        <thead>
          <tr>
            <th>Author Name</th>
            <th>Book Title</th>
          </tr>
        </thead>
        {
          books.map((bk, ind) => {
            return (
              <tbody key={ind}>
                <tr >
                  <td>{bk.author}</td>
                  <td>{bk.title}</td>
                </tr>
              </tbody>

            )
          })
        }
      </table>

      <button onClick={() =>
        UPDATE_BOOKS({
          variables: {
            title: "Cars Book", author: "John Perk"
          }
        })
      }>
        Add Books</button>

    </div>
  )
}

export default Books
