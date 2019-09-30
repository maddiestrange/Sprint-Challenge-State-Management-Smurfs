import React, {useState} from 'react';

function SmurfForm ({addSmurf, smurfs}) {

    const [Smurf, setSmurf] = useState({ name: "", age: 0, height: 0 + "cm"})

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            addSmurf(Smurf)
            console.log(smurfs)
        }}>
            <label>Name:</label>
            <input
                type="text"
                id="name"
                onChange={(e) => setSmurf({...Smurf, name: e.target.value})}></input>

            <label>Age:</label>
            <input
                type="number"
                id="age"
                onChange={(e) => setSmurf({...Smurf, age: e.target.value})}></input>

            <label>Height in cm:</label>
            <input
                type="number"
                id="height"
                onChange={(e) => setSmurf({...Smurf, height: e.target.value + "cm"})}></input>

            <button type="submit">Add smurf</button>

        </form>
    )
}

export default SmurfForm;