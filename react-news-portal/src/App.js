import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import "./components/News/news.css"

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div className="App">
      <Navbar setSearchQuery={setSearchQuery} setCategory={setCategory} />
      <News searchQuery={searchQuery} category={category} />
    </div>
  );
}

export default App;
