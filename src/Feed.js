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
import firebase from 'firebase/compat/app'
import { useSelector } from 'react-redux'
import { selectUser } from './features/counter/userSlice'

function Feed() {
  const user = useSelector(selectUser)
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts')
    .onSnapshot((snapshot) =>
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
    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timestanp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput('')
  }

  return (
    <div className="feed">
      <div className="feed_container">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
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

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  )
}

export default Feed
