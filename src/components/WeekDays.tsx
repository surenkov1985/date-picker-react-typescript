import React from "react"
import styled from "styled-components"
import { IDays } from "./calendar"

export const CalendarHeader = styled.ul`
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: repeat(7, 30px);

  

    &.baseHeader {
        grid-column-gap: 0;
        grid-template-columns: 50px repeat(7, 1fr);
        box-shadow: inset -1px -1px 0px #E0E0E0;
    }
`
export const WeekDay = styled.li`
    font-weight: 600;
    font-size: 10px;
    padding: 4px;
    color: #71717A;
    text-align: center;

    &.baseWeekDays {
        background: #FAFAFA;
        // box-shadow: inset -1px -1px 0px #E0E0E0;
        padding: 4px 8px 16px;
        text-align: start;
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        margin-left: 0;

        &:not(:last-child) {
            border-right: 1px solid #E0E0E0;
            border-bottom: 1px solid #E0E0E0;
        }
        &:last-child {
            border-bottom: 1px solid #E0E0E0;
        }
    }
`
const DayNumb = styled.span`
    font-weight: 500;
    font-size: 22px;
    color: #000000;
`

interface IWeekDaysProps {
    className?: string,
    childClassName?: string,
    days: IDays[]
}

export const WeekDays:React.FC<IWeekDaysProps> = ({className, childClassName, days}) => {

    return  (<CalendarHeader className={className}>
                {className && <WeekDay className={childClassName}/>}
                {days.map((day, index) => {
                    return (
                        <WeekDay className={childClassName} key={index}>
                            {day.weekDay}
                            {day.numb && <DayNumb>{day.numb}</DayNumb>}
                        </WeekDay> 
                    )
                })}
            </CalendarHeader>)
}