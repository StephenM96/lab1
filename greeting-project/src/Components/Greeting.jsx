import { useState } from "react";

function Greeting(props) {

return(
        <div className="Greetings">
                <h3>Hello {props.name ? <>{props.name}</> : "World!"}</h3>
                {props.children} 
                {/* this needs to show "support" to the greeting via children? */}
        </div>
    );
}

export default Greeting