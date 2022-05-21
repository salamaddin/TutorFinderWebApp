import React, { useEffect, useState } from "react";
import { NavLink, useNavigate,useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Home from './Home'


const useStyles = makeStyles({
  root: {
    minWidth: 180,
    color: "red"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});


export default function OutlinedCard() {

  const [users, setUsers] = useState([]);
  const {name} = useParams();
  // const [search, setSearch] = useState('');

 

  const getUsers = async () => {
    // const responce = await fetch('https://gorest.co.in/public/v2/users');
    // const data = await responce.json();
    //  window.alert(props.category);

    const res = await fetch('/tutordata',{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        "category": name
      }),
    });

    const data = await res.json();

    setUsers(data);
    const isempty = Object.keys(data).length === 0;

   
    if ( Object.keys(users).length === 0 && users.constructor === Object) {
      window.alert("No Record Found");
    }

  }

  useEffect(() => {
    getUsers();
  },[]);


  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
    <div  style={{paddingTop:"80px"}}>
      <Grid item xs ={8}  >
    <Box item spacing={2}  m={10} p={6}  mt={-5}  >
      {
        users.map((curElement) => {
          return(
            <>
            
              <Card className={classes.root} variant="outlined">
              <CardContent>
               

                <Typography variant="h5" component="h2">
                  {curElement.name}  {/* {bull}nev{bull}o{bull}lent */}
                </Typography>

                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {curElement.email}
                </Typography>

                <Typography className={classes.pos} color="textSecondary">
                  {/* adjective */}
                </Typography>
                <Typography variant="body2" component="p">
                  subject: {curElement.category}
                  <br />
                  Teaching mode : {curElement.teaching_mood}
                </Typography>

                <Typography variant="body2" component="p">
                  Locality:  {curElement.locality}
                </Typography>

                <Typography variant="body2" component="p">
                  Contact No:  {curElement.number}
                </Typography>
                
              </CardContent>
              <CardActions>
                <Button size="small">Contact with  your teacher </Button>
              </CardActions>
            </Card>

       
       
            </>
          )

        })
      }
       </Box></Grid>
     </div>
    </>
  );
}