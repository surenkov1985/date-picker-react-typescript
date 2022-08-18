import React from "react"
import styled from "styled-components"
import {IoChevronBackOutline} from "react-icons/io5"
import {IoChevronForwardOutline, } from "react-icons/io5"

const CalendarTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TitleEl = styled.h2`
    font-weight: 500;
    font-size: 22px;
    white-space: nowrap;

    & > span {
        cursor: pointer;
            &:hover {
            opacity: 0.5;
        }
    }
`

const ControlBtns = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
`

export const ArrowBtn = styled.button`
    width: 25;
    height: 25;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #FFFFFF;

    &:hover {
        opacity: 0.5;
    }
`

interface ITitleProps {
    month: string,
    year: number
}

export const Title: React.FC<ITitleProps> = ({month, year}) => {

    return (
        <>
            <CalendarTitle>
                <TitleEl>
                    <span className="month">{month}</span>
                    <span className="year" style={{color: "#EF4444", fontWeight: 400}}> {year}</span>
                </TitleEl>
           
                <ControlBtns >
                    <ArrowBtn><IoChevronBackOutline size={20} /></ArrowBtn>
                    <ArrowBtn><IoChevronForwardOutline size={20} /></ArrowBtn>
                </ControlBtns>
             </CalendarTitle>
        </>
    )
}