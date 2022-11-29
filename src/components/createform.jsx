import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from '@mui/material';
import { useState } from 'react';
import { createForm } from '../service/api.js';
import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
   width: 50%;
   margin: 5% auto 0 auto;
   & > div {
       margin: 20px
   }
`

const defaultValue = {
    email: '',
    text: '',
    password: '',
    number: '',
    date: ''
}

const CreateForm = () => {

    const [form, setForm] = useState(defaultValue);

    const navigate = useNavigate();

    const onValueChange = (e) => {
        //console.log(e.target.name, e.target.value)
        setForm({...form, [e.target.name]: e.target.value})
    }
    const addFormDetails = async () => {
        await createForm(form);
        navigate('/all');
    }
    return (
        <Container>
        <Typography variant = 'h4'> Create Form </Typography>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Text</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "text"/>
            </FormControl>
            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "password"/>
            </FormControl>
            <FormControl>
                <InputLabel>Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "number"/>
            </FormControl> 
            <FormControl>
                <InputLabel>Date</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "date"/>
            </FormControl> 
            <FormControl>
                <Button variant= "contained" onClick = {() => addFormDetails()}>Create Form</Button>
            </FormControl>
        </Container>
    )
} 

export default CreateForm;