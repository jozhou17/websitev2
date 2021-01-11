import React, { Component } from 'react';
import {useState} from 'react';
import './experience.css';
import { Tabs, Tab,} from "@material-ui/core";
import ProductMindset from './productMindset';
import Marina from './marina';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        fontFamily: 'Source Code Pro',
        borderBottom: '2.25px solid black',
        fontSize: '1.15rem',
        color:'black',
        fontWeight:'bold',
    },
  };

function Experience(props){

    const {classes} = props;
    const [selectedTab,setSelectedTab] = useState(0)

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue)
    }
    return(
        <div className = 'expContainer' id = 'expID'>
            <header className = 'expTitleContainer'>
                <h1 className = 'expTitle'>Work Experience</h1>
            </header>
            <div className = 'tabContainer'>
                <Tabs value={selectedTab} onChange={handleChange}>
                    <Tab className = {classes.root} label= "Product Mindset" />
                    <Tab className = {classes.root} label= "Marina Bay Market" />
                </Tabs>
            </div>
            {selectedTab === 0 && <ProductMindset/>}
            {selectedTab === 1 && <Marina/>}
        </div>
    )

}

export default withStyles(styles)(Experience);