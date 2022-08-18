import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

export const Register:React.FC<any> = ({onClick}) => {

    const navigate = useNavigate()

    // useEffect(() => {navigate("/week")}, [])

    return (
        <button onClick={onClick}>login</button>
    )
}