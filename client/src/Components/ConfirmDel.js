import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {deleteUser } from '../Redux/Actions/AuthActions';
import { deleteRecette } from '../Redux/Actions/RecetteActions';
import { deleteComment } from '../Redux/Actions/CommentActions';
import { Comment, Form } from 'semantic-ui-react'
const ConfirmDel=({oneUser})=> {
  
  const [show, setShow] = useState(false);
  const location = useLocation()
  console.log(oneUser)
  console.log(location.pathname)
  const verif = location.pathname
const navigate = useNavigate()
const dispatch= useDispatch()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const handleDelete=()=>{
      
      // const token= localStorage.getItem('token')
      console.log(verif.includes('/Profil'))
      const x = verif.includes('/Profil') || verif.includes('/DescriptionUser') 
       x ?
  
          dispatch(deleteUser(oneUser._id,navigate,verif))
          :   
    
          dispatch(deleteRecette(oneUser._id,navigate))
        handleClose()  }
  return (
    <>
    {/* {
      verif.includes('/DescriptionRecette') ?  */}


  
      <button class="btn draw-border"  onClick={handleShow}>
        Supprimer
      </button>
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Supprimer</Modal.Title>
        </Modal.Header>
        <Modal.Body>Supprimer ? </Modal.Body>
        
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


export default ConfirmDel