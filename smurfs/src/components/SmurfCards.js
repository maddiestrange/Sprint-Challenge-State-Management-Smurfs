import React from "react";
import { connect } from "react-redux";

import { getSmurfData } from '../actions/actions';
import Smurfs from './Smurfs';

const SmurfCards = props => {
    console.log('SmurfCards', props.smurfs)
    return(
        <div>
            <button onClick={props.getSmurfData}> 
            Show the Smurfs               
            </button>

            {props.smurfs && props.smurfs.map(smurf =>(
                <Smurfs
                    key={smurf.id}
                    smurf={smurf}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, {getSmurfData})(SmurfCards);