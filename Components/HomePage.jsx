import React from 'react';
import Nav from './Nav';
import { FaSearch, FaArrowRight } from 'react-icons/fa';
import Card from './Card';


const HomePage = () => {
  return (
    <main className="flex flex-col p-4">
      <Nav />
      <div>
        <h1 className='font-black tracking-extra-wide text-red-600 text-center text-9xl mx-auto'>DARUL IQRA</h1>
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
        <Card book={{
          title: 'The Alchemist',
          thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51ZU%2BCvkTyL._SX331_BO1,204,203,200_.jpg'
        }} />
        <Card book={{
          title: 'The Alchemist',
          thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51ZU%2BCvkTyL._SX331_BO1,204,203,200_.jpg'
        }} />
        <Card book={{
          title: 'The Alchemist',
          thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51ZU%2BCvkTyL._SX331_BO1,204,203,200_.jpg'
        }} />
        <Card book={{
          title: 'The Alchemist',
          thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51ZU%2BCvkTyL._SX331_BO1,204,203,200_.jpg'
        }} />
        <Card book={{
          title: 'The Alchemist',
          thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51ZU%2BCvkTyL._SX331_BO1,204,203,200_.jpg'
        }} />
        <Card book={{
          title: 'The Alchemist',
          thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51ZU%2BCvkTyL._SX331_BO1,204,203,200_.jpg'
        }} />
        
      </div>
    </main>
  )
}

export default HomePage