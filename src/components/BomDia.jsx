import React from "react";

export default props => 
    <div>
        <h1 key='h1'>Bom dia {props.name}!</h1>
        <h2 key='h2'>Você tem { props.idade } anos</h2>
    </div>

/*
export default props => 
    <React.Fragment>
        <h1>Bom dia { props.name }!</h1>
        <h2>Você tem { props.idade } anos</h2>
    </React.Fragment>
*/