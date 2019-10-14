import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor:'#343a40',
    color:'white',
    borderRadius:0
  },
});



export default function CenteredTabs(props) {
  const classes = useStyles();
  const [value] = React.useState(0);

  const handleChange = (event, newValue) => {

    props.onTabChange(newValue)
   // setValue(newValue);
  };

  return (
      <div>
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
      >
        <Tab label="Reviews" />
        <Tab label="media" />
        <Tab label="Credits" />
     
      </Tabs>
    </Paper>
      </div>


  );
}