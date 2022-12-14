import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {ArrowBtn} from "./Title"
import {IoChevronBackOutline, IoSearchOutline} from "react-icons/io5"
import {IoChevronForwardOutline, } from "react-icons/io5"
import { NavLink, Routes, Route, useNavigate, Navigate, Outlet } from "react-router-dom";
import {Day} from "./pages/Day"
import {Week} from "./pages/Week"
import {Month} from "./pages/Month"
import {Year} from "./pages/Year"
import {Register} from "./register"
import { SideMenu } from './Sidebar';


const CalendarBaseCont = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 16px 16px 0;
    row-gap: 16px;
`

const BaseHead = styled.header`
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

const BaseMain = styled.main`
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const Label = styled.label`
    display: flex;
    align-items: center;
    background: #E5E5E5;
    padding: 4px;
    border-radius: 4px;
    column-gap: 8px;
`

const Search = styled.input`
    background: #E5E5E5;
    font-weight: 400;
    font-size: 12px;
`

const DayControl = styled.button`
    display: flex;
    column-gap: 8px;
`

export const CalendarBase = () => {
    
    return (
        
        <>
            <SideMenu/>
            <CalendarBaseCont>
                <BaseHead>
                    <DateControl>
                        <ArrowBaseLeft><IoChevronBackOutline size={20} /></ArrowBaseLeft>
                        <ArrowBaseText>??????????????</ArrowBaseText>
                        <ArrowBaseRight><IoChevronForwardOutline size={20} /></ArrowBaseRight>
                    </DateControl>
                    <DayControl>
                        <DayLink to="/day">????????</DayLink>
                        <DayLink to="/week">????????????</DayLink>
                        <DayLink to="/month">??????????</DayLink>
                        <DayLink to="/year">??????</DayLink>
                    </DayControl>
                    <Label>
                        <IoSearchOutline style={{width: "20px", height: "20px", cursor: "pointer"}}/>
                        <Search placeholder="Search"/>
                    </Label>
                </BaseHead>
                <BaseMain>
                    
                    <Outlet/>
                </BaseMain>
                
            </CalendarBaseCont>
        </>
    )
}