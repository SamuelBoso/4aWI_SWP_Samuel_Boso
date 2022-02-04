import React, {Component} from "react";
import styles from './ButtonRow.module.css';

export default class ButtonRow extends Component{
    render(){
        return <div className={styles.row}>
            <button>Test1</button>
            <button>Test1</button>
            <button>Test1</button>
        </div>
    }

}