import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    background: 'rgba(0,0,0,0.5)',
    margin:'20px',
  },
  media: {
    height: 340,
  },
  title:{
    fontFamily:'Nunito',
    fontWeight:'bold',
    fontSize:'2rem',
    color:'#fff',
  },
  desc:{
    fontFamily:'Nunito',
    fontSize:'1.2rem',
    color:'#ddd',
  },
});

export default function DesignL({ category,checked }) {
  const classes = useStyles();

  return (
      <Collapse in={checked}>
    <Card className={classes.root} {...(checked ? { timeout: 1000 } : {})}>
      
        <CardMedia
          className={classes.media}
          image={category.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1" className={classes.title}>
           {category.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
            {category.description} 
          </Typography>
        </CardContent>
      
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    </Collapse>
  );
}
