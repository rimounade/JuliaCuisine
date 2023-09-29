import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {deleteUser } from '../Redux/Actions/AuthActions';
import { deleteRecette } from '../Redux/Actions/RecetteActions';
import { deleteComment } from '../Redux/Actions/CommentActions';
import { Comment, Form } from 'semantic-ui-react'
const ConfirmDelComm=({oneUser})=> {
  
  const [show, setShow] = useState(false);
  const location = useLocation()

const dispatch= useDispatch()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const handleDelete=()=>{
      

          dispatch(deleteComment({id :oneUser?._id, idPost : oneUser?.post?._id}))
 }
  return (
    <>
    {/* {
      verif.includes('/DescriptionRecette') ?  */}
      <Comment.Actions>
      <Comment.Action onClick={handleShow}>
      <i class="fa-regular fa-trash-can fa-2xl"></i>
      </Comment.Action>
    </Comment.Actions>

  
      {/* <Button variant="danger" onClick={handleShow}>
        Delete
      </Button> */}
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Supprimer</Modal.Title>
        </Modal.Header>
        <Modal.Body>Supprimer </Modal.Body>
        <Modal.Footer>
        <button  class="btn draw-border"   onClick={handleClose}>Fermer</button>
        <button  class="btn draw-border"  onClick={handleDelete}>Oui</button>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Yes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ConfirmDelComm