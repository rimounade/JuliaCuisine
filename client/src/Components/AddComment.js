import { useState } from "react"
import { useDispatch } from "react-redux"
import { addComment } from "../Redux/Actions/CommentActions"
import { Button, Comment, Form, Input } from 'semantic-ui-react'
const AddComment=({id})=>{
    const [texte,setTexte]=useState('')

    const dispatch = useDispatch()

    const handleAdd=()=>{
        dispatch(addComment({post : id,texte}))
        setTexte('')
    }
    return(
        <div>
            {/* <input value={texte} type="text" onChange={(e)=> setTexte(e.target.value)}/>
            <button onClick={()=>handleAdd()}>AddComment</button> */}

            {/* //////////////////////////// */}


            <Comment.Group>
    {/* <Comment>
      <Comment.Avatar as='a' src='/images/avatar/small/joe.jpg' />
      <Comment.Content>
        <Comment.Author>Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <div>1 day ago</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>
            The hours, minutes and seconds stand as visible reminders that your
            effort put them all there.
          </p>
          <p>
            Preserve until your next run, when the watch lets you see how
            Impermanent your efforts are.
          </p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar as='a' src='/images/avatar/small/christian.jpg' />
      <Comment.Content>
        <Comment.Author>Christian Rocha</Comment.Author>
        <Comment.Metadata>
          <div>2 days ago</div>
        </Comment.Metadata>
        <Comment.Text>I re-tweeted this.</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment> */}
  <div style={{width : "639px"}}>
    <Form reply>
      <Form.TextArea value={texte} onChange={(e)=> setTexte(e.target.value)}/>
      <Button style={{marginLeft : "238px", backgroundColor : "#58cdd1", marginBottom:"50px"}} onClick={handleAdd} content='Ajouter Commentaire' labelPosition='left' icon='edit' primary />
    </Form>
    </div>
  </Comment.Group>
  
        </div>
    )
}

export default AddComment