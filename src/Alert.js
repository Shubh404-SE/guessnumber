
export default function Alert(props) {
    return (
        props.alert && <div className="container" style={{position:"absolute", top:"1rem", left:"72rem", width:"25vw"}}>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.type}</strong>: {props.alert.msg}</div>
        </div>

    );
};
