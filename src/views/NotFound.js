import { useHistory } from "react-router-dom";

const NotFound =() =>{
    let history = useHistory();
    const handleClickBtn = () =>{
        history.push('/');
    }
    return (
        <div className="notFoundContainer">
            <h4>This page isn't Available</h4>
            <h5>The link may be broken, or the page haven been removed.</h5>
            <button className = "btn btn-primary"
                onClick={handleClickBtn}
            >
                Go to home page
            </button>
        </div>
    )
}
export default NotFound;