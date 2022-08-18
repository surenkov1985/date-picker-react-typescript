import React, { useEffect } from "react";
import styled from "styled-components";
import {ArrowBtn} from "./Title"
import {IoChevronBackOutline} from "react-icons/io5"
import {IoChevronForwardOutline, } from "react-icons/io5"
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import {Day} from "./pages/Day"
import {Week} from "./pages/Week"
import {Month} from "./pages/Month"
import {Year} from "./pages/Year"
import {Register} from "./register"

const CalendarBaseCont = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 16px;
    row-gap: 16px;
`

const BaseHead = styled.head`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`

const ArrowBaseLeft = styled(ArrowBtn)`
    background: #F4F4F5;
    color: #18181B;
    padding: 4px;
    border-radius: 3px 0 0 3px;
`
const ArrowBaseText = styled(ArrowBtn)`
    background: #F4F4F5;
    color: #18181B;
    font-weight: 500;
    font-size: 14px;
    margin: 0 5px;
    padding: 4px 16px;
`
const ArrowBaseRight = styled(ArrowBtn)`
    background: #F4F4F5;
    color: #18181B;
    padding: 4px;
    border-radius: 0 3px 3px 0;
`
const DateControl = styled.div`
    display: flex;
`

const DayLink = styled(NavLink)`
    text-decoration: none;
    padding: 4px 16px;
    border-radius: 8px;
    font-weight: 500;
    font-size: 14px;
    color: #71717A;
    cursor: pointer;
    
    &:hover {
        opacity: 0.5;
    }

    &.active {
        background: #DC2626;
        color #FFFFFF;
        cursor: default;
            &:hover {
            opacity: 1;
        }
    }
`

const BaseMain = styled.main``

const DayControl = styled.button`
    display: flex;
    column-gap: 8px;`

export const CalendarBase = () => {

    const navigate = useNavigate()

    // useEffect(() => {navigate("/week")}, [])
    function onButtonHandler() {
        navigate("/week")
    }
    
    return (
        <CalendarBaseCont>
            <BaseHead>
                <DateControl>
                    <ArrowBaseLeft><IoChevronBackOutline size={20} /></ArrowBaseLeft>
                    <ArrowBaseText>Сегодня</ArrowBaseText>
                    <ArrowBaseRight><IoChevronForwardOutline size={20} /></ArrowBaseRight>
                </DateControl>
                <DayControl>
                    <DayLink to="/day">День</DayLink>
                    <DayLink to="/week">Неделя</DayLink>
                    <DayLink to="/month">Месяц</DayLink>
                    <DayLink to="/year">Год</DayLink>
                </DayControl>
            </BaseHead>
            <BaseMain>
                <Routes>
                    <Route path="/" element={<Register onClick={onButtonHandler}/>}>
                        <Route path="day" element={<Day/>}/>
                        <Route path="week" element={<Week/>}/>
                        <Route path="month" element={<Month/>}/>
                        <Route path="year" element={<Year/>}/>
                    </Route>
                </Routes>
            </BaseMain>
        </CalendarBaseCont>
    )
}