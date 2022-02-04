import React, { Component } from "react";
import styles from './Listrow.module.css';

export default class listrow extends Component{
    render(){
        return <div className={styles.test}>
                <h1>List:</h1>
                <ul>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Beer</li>
                </ul>
        </div>
    }
}