import React, { useState } from 'react'
import './Modal.css'
import { IoClose } from "react-icons/io5";

export default function AddCartModal({ setShowAddModal, setPosts, posts }) {
  const [userId, setUserId] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  console.log(userId, title, description);

  const handleAddCart = () => {
    const newCard = { userId, title, body: description, id: posts.length + 1 };
    setPosts([newCard, ...posts]);
    setShowAddModal(false);
  }

  const arr1 = [1,2,3,4,5,6,7];
  const arr2 = [...arr1, 8,9,10,11,12];

  return (
    <div className='modal-backdrop-css'>
      <div className='modal-card'>
        <div className=' d-flex justify-content-between align-items-center'>
          <h4>Rostan ham o'chirmoqchimisiz</h4>
          <IoClose onClick={() => setShowAddModal(false)} className='fs-2 m-2 ' />
        </div>
        <div>
          <h4>Formani toldiring</h4>

          <form action="">
            <input type="number" onChange={({ target }) => setUserId(target.value)} class="form-control my-2" placeholder="Enter user id" aria-label="Example text with button addon" aria-describedby="button-addon1" />
            <input type="text" onChange={({target}) => setTitle(target.value)} class="form-control my-2" placeholder="Title" aria-label="Example text with button addon" aria-describedby="button-addon1" />
            <div class="form-floating mb-4">
              <textarea onChange={({target}) => setDescription(target.value)} class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
              <label for="floatingTextarea">Comments</label>
            </div>
          </form>

          <div className=' d-flex justify-content-between'>
            <button className='btn btn-danger' onClick={() => setShowAddModal(false)}>Cancel</button>
            <button className='btn btn-success' onClick={handleAddCart}>Tasdiqlash</button>
          </div>
        </div>
      </div>
    </div>
  )
}
