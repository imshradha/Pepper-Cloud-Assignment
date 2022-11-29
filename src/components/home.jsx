import { Box, Typography, styled, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Home = () => {

    let navigate = useNavigate(); 
const routeChange = () =>{ 
  let path = `/create`; 
  navigate(path);
}
    return (
        <Header>
            <Typography variant="h4" style={{display: 'flex', justifyContent:'center', alignItems:'center', fontWeight: 'bold' }}>Welcome to Form Builder Application <br/> Create Your Form Today</Typography>
            <Box style={{display: 'flex', justifyContent:'center'}}>
                <Button variant="contained" color="primary" style={{height:'100px',width:'200px', fontSize:'20px'}} onClick = {() => routeChange()}>create form</Button>
            </Box>
        </Header>
    )
}

export default Home;