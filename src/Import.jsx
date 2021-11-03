import React, { Component } from "react";
import Axios from "./Axios/Axios";
import FragComp from "./Fragment/FragComp";
import LifeCycle from "./LifeCycle/LifeCycle";
import News from "./News/News";
import News2 from "./News2/News2";
import News3 from "./News3/News3";
import Index from "./RegPureComp/Index";
import Smart from "./SmartComponent/Smart";

class Import extends Component {
    render() {
        return (
            <div className='container'>
                {/* <h3 className='text-center'>Advance ReactJS</h3> */}

                {/*
                <Smart /> 
                <Index /> 
                <FragComp /> 
                <LifeCycle />
                
                */}


                {/* <News /> */}

                {/* <News2 /> */}

                <News3/>




            </div>
        )
    }
}
export default Import