import AllUsers from "./AllUsers";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Homepage(){
    const isAuth = useSelector((store) => store.isAuth.isAuth);
    const navigate = useNavigate();
    if(!isAuth) navigate("/login");
    return(
        <>
         <h2>This is Home Page</h2>
         <AllUsers/>
        </>
    )
}