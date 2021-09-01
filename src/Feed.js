import React, { useEffect, useState } from 'react'

//icons
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
//style
import './Feed.css'
//other
import InputOption from './InputOption'
import Post from './Post'
import { db } from './firebase'

function Feed() {
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })),
      ),
    )
  }, [])

  const sendPost = (e) => {
    e.preventDefault()
    // db.collection('posts').add({
    //   name: 'sudeep bhandari',
    //   description: 'this is a test',
    //   message: input,
    //   photoUrl: '',
    //   timestanp: firebase.firestore.FieldValue.serverTimestamp(),
    // })
  }

  return (
    <div className="feed">
      <div className="feed_container">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input value={input} type="text" placeholder="type" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="input_option">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/* Posts */}
      {posts.map(() => (
        <Post />
      ))}
      <Post />
    </div>
  )
}

export default Feed
