import React, { useRef } from 'react';
import classes from './Trener.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Button } from '@material-ui/core';
import shortid from "shortid";

const Trener = (props) => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    const ref = useRef(null);

    const executeScroll = () => ref.current.scrollIntoView({block: "start", inline: "nearest"});

    const handleClick = (trenerIndex) => {
        props.setCurrentTrener(trenerIndex);
        executeScroll();
    }

    let paragraphs = props.trener.text.map((item, index) => {
        if(index > 0){
            return <p>{item}</p>
        }
    });

    const getRandomKey = () => {
        return shortid.generate();
    }
    
    return(
        <div className={classes.main} data-aos="zoom-out" key={getRandomKey()}  ref={ref}>
            <img src={props.trener.img}/>
            {props.trener.list ?
            <div className={classes.text}>
                <p><strong>{props.trener.title}</strong> - {props.trener.text[0]}</p>
                <p>{props.trener.text[1]}</p>
                <p>{props.trener.text[2]}</p>
                <p>{props.trener.text[3]}</p>
                <ul>
                    <li>{props.trener.text[4]}</li>
                    <li>{props.trener.text[5]}</li>
                    <li>{props.trener.text[6]}</li>
                </ul>
                <p>{props.trener.text[7]}</p>
                <p>{props.trener.text[8]}</p>
                <p>{props.trener.text[9]}</p>
                <div className={classes.buttons}>
                    <Button className={classes.but + " " + (props.currentTrener === 0 && classes.active)} onClick={()=>{handleClick(0)}}>01</Button>
                    <Button className={classes.but + " " + (props.currentTrener === 1 && classes.active)} onClick={()=>{handleClick(1)}}>02</Button>
                    <Button className={classes.but + " " + (props.currentTrener === 2 && classes.active)} onClick={()=>{handleClick(2)}}>03</Button>
                    <Button className={classes.but + " " + (props.currentTrener === 3 && classes.active)} onClick={()=>{handleClick(3)}}>04</Button>
                </div>
            </div> : 
            <div className={classes.text}>
                <p><strong>{props.trener.title}</strong> - {props.trener.text[0]}</p>
                {paragraphs}
                <div className={classes.buttons}>
                    <Button className={classes.but + " " + (props.currentTrener === 0 && classes.active)} onClick={()=>{handleClick(0)}}>01</Button>
                    <Button className={classes.but + " " + (props.currentTrener === 1 && classes.active)} onClick={()=>{handleClick(1)}}>02</Button>
                    <Button className={classes.but + " " + (props.currentTrener === 2 && classes.active)} onClick={()=>{handleClick(2)}}>03</Button>
                    <Button className={classes.but + " " + (props.currentTrener === 3 && classes.active)} onClick={()=>{handleClick(3)}}>04</Button>
                </div>
            </div>}
            
        </div>
    );
}

export default Trener;