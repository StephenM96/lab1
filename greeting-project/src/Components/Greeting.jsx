Greeting(props); {

    return(
        <div className="Greetings">
            <h3>Greetings {props.name}</h3>

            {props.children}
        </div>
    );
}

export default Greeting