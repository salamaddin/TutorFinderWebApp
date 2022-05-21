import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) =>
createStyles({
	paper: {
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	},
	root: {
	flexGrow: 1,
	},
}),
);

export default function Category() {
const classes = useStyles();

return (
	<div>
	<Grid container spacing={3}>

		<Grid item xs={2} sm={4}>
		<Paper className={classes.paper}>
        <img width="100%"
      src="https://www.urbanpro.com/assets/topicId-603.png"
      alt="new"
      />
	  <p>B.Tech tuition</p>
        </Paper>
		</Grid>

		<Grid item xs={2} sm={4}>
		<Paper className={classes.paper}>
        <img width="100%"
      src="https://www.urbanpro.com/assets/topicId-2259.png"
      alt="new"
      />
	  <p>Class XI-XII tuition</p>
        </Paper>
		</Grid>

		<Grid item xs={2} sm={4}>
		<Paper className={classes.paper}>
        <img width="100%"
      src="https://www.urbanpro.com/assets/topicId-2258.png"
      alt="new"
      />
	  <p>Class IX-X tuition</p>
        </Paper>
		</Grid>
		<Grid item xs={2} sm={4}>
		<Paper className={classes.paper}>
        <img width="100%"
      src="https://www.urbanpro.com/assets/topicId-189.png"
        alt="new"
      />
	  <p>Class I-V tuition</p>
        </Paper>
		</Grid>
		<Grid item xs={2} sm={4}>
		<Paper className={classes.paper}>
        <img width="100%"
      src="https://www.urbanpro.com/assets/topicId-2282.png"
       alt="new"
      />
	  <p>Class VI-VII tuition</p>
        </Paper>
		</Grid>
		<Grid item xs={2} sm={4}>
		<Paper className={classes.paper}>
        <img width="100%"
      src="https://www.urbanpro.com/assets/topicId-2281.png "
       alt="new"
      />
	  <p>Coding for kids</p>
        </Paper>
		</Grid>
	</Grid>
	</div>
);
}
