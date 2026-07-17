export default Button;

function Button({label, classList = [], clickFunction, type}){

    return(
        <button className={`btn ${classList.join(" ")}`} type={type} onClick={clickFunction}>
            {label}
        </button>
    );

}