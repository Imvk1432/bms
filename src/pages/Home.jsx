import React, { useEffect, useState } from 'react'
import AddBook from '../components/AddBook'
import Book from '../components/Book'
import useFetch from '../useFetch';
import './Home.css'

const Home = () => {
    console.log("Home Rendered.")
    let { data } = useFetch('http://localhost:8000/books');

    let [books, setBooks] = useState(null);

    useEffect(()=>{
        setBooks(data);
    }, [data]);



    function handleRemove(id) {
        fetch(`http://localhost:8000/books/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                let newBooks = books.filter(
                    (element) => {
                        return element.id !== id;
                    }
                )
                setBooks(newBooks);
            })
            .catch(error => {
                console.error('Error removing book:', error);
            });
    }

    function handleSubmit(book) {
        fetch('http://localhost:8000/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(() => {
                let newBooks = [...books];
                newBooks.push(book);
                setBooks(newBooks);
            })
            .catch(error => {
                console.error('Error adding book:', error);
            });
    }

  return (
    <div className='home-container'>
    <AddBook handleSubmit={handleSubmit}> </AddBook>
    {
        books &&
            books.map(
                (element) => {
                    return <Book
                        key={element.id}
                        id={element.id}
                        title={element.title}
                        author={element.author}
                        price={element.price}
                        handleRemove={handleRemove}
                        books={books}
                        setBooks={setBooks}
                    >
                    </Book>
                }
            )
    }
</div>
  )
}

export default Home
