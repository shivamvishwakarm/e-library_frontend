import React from 'react';
import Nav from './Nav';
import { FaSearch, FaArrowRight } from 'react-icons/fa';
import Card from './Card';
import Footer from './Footer';
import { CarouselSpacing } from './CarouselSpacing';


const books = [
  {
    name: "Book 1",
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51ZU%2BCvkTyL._SX331_BO1,204,203,200_.jpg',
    description: "This is a description of Book 1.",
    pdfLink: "https://example.com/book1.pdf",
    language: "English",
    author: "Author 1",
    subject: "Subject 1"
  },
  {
    name: "Book 2",
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51ZU%2BCvkTyL._SX331_BO1,204,203,200_.jpg',
    description: "This is a description of Book 2.",
    pdfLink: "https://example.com/book2.pdf",
    language: "English",
    author: "Author 2",
    subject: "Subject 2"
  },

  {
    name: "Book 3",
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51ZU%2BCvkTyL._SX331_BO1,204,203,200_.jpg',
    description: "This is a description of Book 3.",
    pdfLink: "https://example.com/book3.pdf",
    language: "English",
    author: "Author 3",
    subject: "Subject 3"
  },
  {
    name: "Book 3",
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51ZU%2BCvkTyL._SX331_BO1,204,203,200_.jpg',
    description: "This is a description of Book 3.",
    pdfLink: "https://example.com/book3.pdf",
    language: "English",
    author: "Author 3",
    subject: "Subject 3"
  },
  {
    name: "Book 3",
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51ZU%2BCvkTyL._SX331_BO1,204,203,200_.jpg',
    description: "This is a description of Book 3.",
    pdfLink: "https://example.com/book3.pdf",
    language: "English",
    author: "Author 3",
    subject: "Subject 3"
  },
  {
    name: "Book 3",
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51ZU%2BCvkTyL._SX331_BO1,204,203,200_.jpg',
    description: "This is a description of Book 3.",
    pdfLink: "https://example.com/book3.pdf",
    language: "English",
    author: "Author 3",
    subject: "Subject 3"
  },

]





const HomePage = () => {
  return (
    <main className="flex flex-col p-4">
      <Nav />
      <div className="">
        <h1 className='font-black tracking-extra-wide text-red-600 text-center  mx-auto sm:text-7xl md:text-8xl lg:text-9xl'>
          DARUL IQRA
         </h1>
      </div>

      <div className="flex justify-center items-center my-9">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-12 pl-10 pr-10 py-3 border-2 rounded-full text-lg focus:outline-none"
          />
          <FaSearch className="absolute left-0 top-0 ml-5 mt-4 text-gray-400" />
          <FaArrowRight className="absolute right-0 top-0 mr-5 mt-4 text-gray-400" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {books.map((book, index) => (
          <Card key={index} book={book} />
        ))}
        
      </div>

      <CarouselSpacing />

      <Footer/>
    </main>
  )
}

export default HomePage