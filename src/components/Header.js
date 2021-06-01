import React,{useEffect,useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar,Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh',
    },
    appbar: {
        background: "none",
        fontFamily: 'Nunito', 
    },
    appbarWrapper:{
        width: '80%',
        margin:'0 auto',
    },
    appbarTitle:{
        flexGrow: '1',
    },
    icon: {
        color: "#0e3150",
        fontSize: "2rem",
    },
    colorText:{
        color: '#0e3150',
    },
    container:{
        textAlign: 'center',
        fontFamily:'Odibee Sans',
    },
    title:{
        color:'#000000',
        fontSize:'6rem',
    },
    goDown:{
        color: "#000000",
        fontSize: "4rem",
    },
}));

export default function Header() {
    const classes= useStyles();
    const [checked,setChecked]= useState(false);
    useEffect(()=>{
        setChecked(true);
    },[])
    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle}>Graphix<span className={classes.colorText}>Gram</span></h1>
                <IconButton>
                    <SortIcon className={classes.icon} />
                </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}
            collapsedHeight={50}>
                <div className={classes.container}>
                    <h1 className={classes.title}>Welcome to <br />
                    Graphix<span className={classes.colorText}>Gram</span>
                    </h1>
                    <Scroll to="categoriesl" smooth={true}>
                    <IconButton>
                        <ExpandMoreIcon className={classes.goDown} />
                    </IconButton>
                    </Scroll>
                </div>
            </Collapse>
            
        </div>
    );
}
