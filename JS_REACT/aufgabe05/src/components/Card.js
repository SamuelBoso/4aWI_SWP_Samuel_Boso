import React, { Component } from "react";
import styles from './Card.module.css';

export default class Card extends Component{
    render(){
        return <div className={styles.Card}>
            <div>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" width="300" height="300"></img>
            </div>
            <div>
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
            </div>

        </div>
    }
}