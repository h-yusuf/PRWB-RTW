const Button = (props) => {
    const click2 = () => {
        return alert("ini alert in line");
    }
    return(
        <div className="btn">
            <button onClick={() => props.clicked()}>
                Click Me
            </button>
            <button onClick={click2}>Buton Alert no props</button>
        </div>
    )
}
export default Button;