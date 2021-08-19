import React, {Component} from 'react';
import HOCC2 from './HOCC2';
export default function Hoc(HocComponent){
    return class extends Component{
        render(){
            return (
                <div>
                    <HOCC2></HOCC2>
                </div>

            );
        }
    } 
}