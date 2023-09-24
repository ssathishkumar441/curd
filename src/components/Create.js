import React, {useState} from 'react'
import axios from 'axios'
import {Form, Button, Checkbox} from 'semantic-ui-react'
import { API_URL } from '../Constants/URL'
import{useNavigate} from 'react-router-dom'

function Create() {
     const [firstName, setFirstName]=useState('');
      const [lastName, setLastName]=useState('');
       const [checked, setChecked]=useState(false);
       const navigate =useNavigate();
    

       const postData =async()=>{
        await axios.post(API_URL, {
            firstName,
            lastName,
            checked
        })
        navigate('/read');
       }

    return (
        <Form className="form">
            <Form.Field>
                <label>First Name</label>
                <input valu={firstName} 
                onChange={event=>setFirstName (event.target.value)} placeholder="Enter First name"/>
            </Form.Field><br/>
             <Form.Field>
                <label>Last Name</label>
                <input valu={lastName} 
                 onChange={event=>setLastName (event.target.value)} placeholder="Enter Last name"/>
            </Form.Field><br/>
            <Form.Field>
                <Checkbox checked={checked} onChange={()=>setChecked(!checked)} label="Agreee the Terms & conditions">Last Name</Checkbox><br/>
               <Button onClick={postData}>submit</Button>
            </Form.Field>
        </Form>
   
  )
}

export default Create