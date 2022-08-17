import React from "react"
import styled from "styled-components"

const CalendarCont = styled.div`
    display: flex;
    flex-direction: column;
`

const CalendarHeader = styled.ul`
    display: flex;
    column-gap: 10px;
    align-items: center;
    justify-content: space-between;
`
const WeekDay = styled.li`
    font-weight: 600;
    font-size: 10px;
    padding: 4px;
    color: #71717A;
`

const CalendarWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));
    grid-gap: 10px;
`
export const Calendar = () => {

    const days:string[] = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]
    const numbers:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    return (
        <CalendarCont>
            <CalendarHeader>
                {days.map((day, index) => {
                    return (
                        <WeekDay key={index}>{day}</WeekDay> 
                    )
                })}
            </CalendarHeader>
            <CalendarWrapper>
                {numbers.map((numb, index) => {
                    return <WeekDay key={index}>{numb}</WeekDay>
                })}
            </CalendarWrapper>
        </CalendarCont>
    )
}