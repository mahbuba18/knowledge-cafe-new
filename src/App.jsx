import { useState } from 'react'
import './App.css'
import Header from './componants/Header/Header'
import Blogs from './componants/Blogs/Blogs'
import Bookmarks from './componants/Bookmarks/Bookmarks'


function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = (id,time) => {
    setReadingTime(readingTime + time);
    //remove the read blog from bookmark
    const remainingBookmarks=bookmarks.filter(bookmark=>bookmark.id !==id);
    setBookmarks(remainingBookmarks)

  }
  const handleAddBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);

  }

  return (

    <>

      <Header> </Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>


    </>
  )
}

export default App
