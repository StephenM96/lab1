function Greeting(props) {

return(
        <div className="Greetings">
            <h3>Hello {props.name}</h3>
            {props.name ? <p>{props.name}</p> : "World!"}
            {props.children} 
            {/* this needs to show "support" to the greeting via children? */}
        </div>
    );
}

export default Greeting