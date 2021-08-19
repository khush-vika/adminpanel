 
import React, {Component} from 'react';

export default function HOCC2(HocComponent){
    return class extends Component{
        render(){
            return (
                <div>
                    <h1>HI </h1>
                </div>

            );
        }
    } 
}