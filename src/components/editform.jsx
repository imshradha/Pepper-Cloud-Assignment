import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { editForm, getForms } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';

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

const EditForm = () => {

    const [form, setForm] = useState(defaultValue);

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        loadFormDetails();
    },[])

   const loadFormDetails = async () =>{
    const response = await getForms(id);
    setForm(response.data);
   }

   const onValueChange = (e) => {
        //console.log(e.target.name, e.target.value)
        setForm({...form, [e.target.name]: e.target.value})
        //console.log(user);
    }
    const editFormDetails = async () => {
        await editForm(form,id);
        navigate('/all');
    }
    return (
        <Container>
        <Typography variant = 'h4'>Edit Form</Typography>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "email" value = {form.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Text</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "text" value = {form.text}/>
            </FormControl>
            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "password" value = {form.password}/>
            </FormControl>
            <FormControl>
                <InputLabel>Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "number" value = {form.number}/>
            </FormControl> 
            <FormControl>
                <InputLabel>Date</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = "date" value = {form.date}/>
            </FormControl> 
            <FormControl>
                <Button variant= "contained" onClick = {() => editFormDetails()}>Edit Form</Button>
            </FormControl>
        </Container>
    )
} 

export default EditForm;