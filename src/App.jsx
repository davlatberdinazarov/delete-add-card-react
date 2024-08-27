import { useEffect, useState } from 'react'
import './App.css'
import Modal from './components/Modal';
import AddCartModal from './components/AddCartModal';

function App() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [cardId, setCardId] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
     .then(response => response.json())
     .then(data => setPosts(data))
     .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <h1 className=' container'>Loading...</h1>
  }

  const handleDeletePost = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    setShowModal(false);
  }
  return (
    <div className='container py-3 my-3'>
      <div className=' d-flex justify-content-center'>
      { showAddModal && <AddCartModal posts={posts} setPosts={setPosts} setShowAddModal={setShowAddModal} />}
      <button onClick={() => setShowAddModal(true)} className='btn btn-primary'>Add cart</button>
      </div>
      <h1 className=' text-white'>Posts { posts.length }</h1>
      { showModal && <Modal id={cardId} handleDeletePost={handleDeletePost} setShowModal={setShowModal}/>}

      <div className=' d-flex gap-3 flex-wrap'>
        { posts.length > 0 && posts.map(post => {
          return (
            <div onClick={() => setCardId(post.id)} key={post.id} className=' rounded shadow bg-white overflow-auto' style={{ height: '360px', width: '400px' }}>
              <div className='card-body p-4 '>
                <h1>UserId: {post.userId}</h1>
                <h2 className='card-title mb-4'>{ post.title }</h2>
                <p className='card-text'>{ post.body }</p>
                <button onClick={() => setShowModal(true)} className='btn btn-danger'>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
      <div>
        <h1>{ count }</h1>
        <button onClick={() => setCount(prev => prev + 1)} className=' btn btn-primary'>Click</button>
        <button onClick={() => setColor(color + 1)} className=' btn btn-success'>Change color</button>
      </div>
    </div>
  )
}

export default App
