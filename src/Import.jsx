import React, { Component } from "react";
import FragComp from "./Fragment/FragComp";
import News from "./News/News";
import Index from "./RegPureComp/Index";
import Smart from "./SmartComponent/Smart";

class Import extends Component {
    render() {
        return (
            <div className='container'>
                <h3 className='text-center'>Advance React JS</h3>

                {/*
                <Smart /> 
                <Index /> 
                <FragComp /> 
                
                */}

                <News/>
            </div>
        )
    }
}
export default Import