import React from "react"
import styled from "styled-components"
import { ICalendar } from "./Sidebar"

const CalendarCont = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`

const CalendarHeader = styled.ul`
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: repeat(7, 30px);
`
const WeekDay = styled.li`
    font-weight: 600;
    font-size: 10px;
    padding: 4px;
    color: #71717A;
    text-align: center;
`

const CalendarWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(7, 30px);
    grid-gap: 10px;
`

const Date = styled(WeekDay)`
    color: #FFFFFF;
    height: 30px;
    font-weight: 600;
    font-size: 11px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;

    &.today {
        background: #3B82F6;
        &:hover {
        background: #3B82F6;
        color: #FFFFFF;
    }
    }

    .previous {
        color: #71717A
    }
    &.next {
        color: #71717A
    }

    &:hover {
        background: #99999f;
        color: #FFFFFF;
    }
`

const Tasks = styled.div`
    display: flex;
    column-gap: 3px;
    justify-content: center;
    margin-top: 1px;
`
const Task = styled.span.attrs(props => ({
        color: props.color
    }
))`
    
    border: 2px solid ${props => props.color};
    border-radius: 50%;
    
`

interface ICaalendarProps {
    dates: ICalendar[]
}

export const Calendar:React.FC<ICaalendarProps> = ({dates}) => {

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
                {dates.map((res) => {
                    return (
                        <Date key={res.id} className={res.month.join(" ")}>
                            {res.day}
                            <Tasks>
                                <Task color="blue"></Task>
                                <Task color="violet"></Task>
                                <Task color="pink"></Task>
                            </Tasks>
                        
                        </Date>)
                })}
            </CalendarWrapper>
        </CalendarCont>
    )
}