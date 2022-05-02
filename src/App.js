import React from 'react';
import './style.css';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import { Container } from '@mui/material';
import { ImageList } from '@mui/material';
import { ImageListItem } from '@mui/material';
import data from './data.json'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

export default function App() {
  const [name,setName] = React.useState('')
  const [email,setEmail] = React.useState('')
  const [number,setNumber] = React.useState(null)
  return (
    <div>
      <AppBar>
        <Toolbar>
    <Typography>Hello Siva</Typography>ss
    </Toolbar>
    </AppBar>
    <Container>
      <Typography variant="h3">Our Latest Photography</Typography>
      <Typography > Pleasure To take requests</Typography>
    </Container>
    <Container>
     <ImageList rowHeight={170} cols={3}>
       {data.map((item) =>
          <ImageListItem key={item.id}cols={1}>
            <img src={item.img} alt={item.name} />
          </ImageListItem>
       )}

     </ImageList>
    </Container>
    <center>
    <Typography variant="h5">Contact Form</Typography>
    <form>
      <Container>
   <TextField value={name}style={{"width":"300px","margin":"5px"}}type="text" label="Name" variant="outlined"/> <br />
   <TextField value={email}style={{"width":"300px","margin":"5px"}}type="email" label="Email" variant="outlined"/> <br />
   <TextField value={number}style={{"width":"300px","margin":"5px"}}type="Number" label="Number" variant="outlined"/> <br />
      </Container>
      <Button variant="contained" color="primary">Submit</Button>
    </form>
</center>
    </div>
  );
}


export default App;