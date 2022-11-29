import { useEffect, useState } from 'react';

import { Table, TableHead, TableRow, TableCell, TableBody, styled, Button } from '@mui/material';

import { getForms} from '../service/api'

import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width : 90%;
    margin : 50px auto 0 auto ;
    `;
const THead = styled(TableRow)`
    background : #000000;
    & > th{
        color : #fff;
        font-size : 20px;
    }
`;

const TBody = styled(TableRow)`
    & > td{
        font-size : 20px;
    }
`;
const AllForms = () => {
    const [forms, setForms] = useState([]);
    useEffect(() => {
        getAllForms();
    }, []);

    const getAllForms = async () => {
        let response = await getForms();
        setForms(response.data);
        console.log(response.data);
    }

    const deleteFormDetails = async (id) => {
        //deleteForm(id);
        getAllForms();
    }

    return (
            <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Text</TableCell>
                    <TableCell>Password</TableCell>
                    <TableCell>Number</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {
                    forms.map(form => (
                        <TBody key = {form._id}>
                            <TableCell>{form._id}</TableCell>
                            <TableCell>{form.email}</TableCell>
                            <TableCell>{form.text}</TableCell>
                            <TableCell>{form.password}</TableCell>
                            <TableCell>{form.number}</TableCell>
                            <TableCell>{form.date}</TableCell>
                            <TableCell>
                                <Button variant = 'contained' style = {{marginRight: 10}} component = {Link} to = {`/edit/${form._id}`}>Edit</Button>
                                <Button variant = 'contained' color = 'secondary' onClick = {() => deleteFormDetails(form._id)}>Delete</Button>
                            </TableCell>
                        </TBody>
                     ) )
                }
            </TableBody>
        </StyledTable>
        )
}

export default AllForms;