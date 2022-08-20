import React, {useEffect} from "react";
import { useNavigate, Outlet, Routes, Route, NavLink } from "react-router-dom";
import { Week } from "./pages/Week";

export const Register:React.FC<any> = ({onClick, login}) => {

    const navigate = useNavigate()

    if (login) {
        return (
            <Week/>
        )
    }

    return (
        <>
            <button onClick={onClick}>login</button>
        </>
    )

}