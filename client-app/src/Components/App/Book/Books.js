import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_BOOK_DATA = gql`
  query GET_BOOKS {
    books {
      author
      title
    }
  }
`;

function Books() {
  const { loading, error, data } = useQuery(GET_BOOK_DATA);

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

    </div>
  )
}

export default Books
