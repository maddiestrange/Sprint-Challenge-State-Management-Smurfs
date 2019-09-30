import React from "react";
import { connect } from "react-redux";

import { getSmurfData, addSmurf } from '../actions/actions';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';

const SmurfCards = props => {
    console.log('SmurfCards', props.smurfs)
    return(
        <div>
            <SmurfForm 
            smurf={props.smurfs} addSmurf={props.addSmurf}
            />
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

export default connect(mapStateToProps, {getSmurfData, addSmurf})(SmurfCards);