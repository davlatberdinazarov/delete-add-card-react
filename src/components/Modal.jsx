import React from 'react'
import './Modal.css'
import { IoClose } from "react-icons/io5";

export default function Modal({ setShowModal, handleDeletePost, id }) {
  return (
    <div className='modal-backdrop-css'>
        <div className='modal-card'>
             <div className=' d-flex justify-content-between align-items-center'>
                <h4>Rostan ham o'chirmoqchimisiz</h4>
                <IoClose onClick={() => setShowModal(false)} className='fs-2 m-2 '/>
             </div>
             <div>
                <p>Ushbu modaldan chiqish uchun Enter tugmasini bosing.</p>

                <div className=' d-flex justify-content-between'>
                    <button className='btn btn-danger' onClick={() => setShowModal(false)}>Cancel</button>
                    <button className='btn btn-success' onClick={() => handleDeletePost(id)}>Tasdiqlash</button>
                </div>
             </div>
        </div>
    </div>
  )
}
