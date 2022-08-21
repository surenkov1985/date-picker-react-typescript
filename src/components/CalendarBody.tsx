import React, { useState } from "react"
import styled from "styled-components"
import { ICalendar } from "./Sidebar"

const CalendarWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(7, 30px);
    grid-gap: 10px;

    &.monthWrapper {
        height: 100%;
        grid-template-columns: repeat(7, 1fr);
        grid-gap: 0;
    }
`
const WeekDay = styled.li`
    font-weight: 600;
    font-size: 10px;
    padding: 4px;
    color: #71717A;
    text-align: center;
`

const DateEl = styled(WeekDay)`
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

    &.monthPageDay {
        height:100%; 
        border-radius: 0;
        align-items: flex-start;
        color: #000000;
        font-size: 14px;
        font-weigth: 500;
        &.previous {
            color: #71717A
        }
        &.next {
            color: #71717A
        }
        &:not(:nth-child(7n + 7)) {
            border-right: 1px solid #E0E0E0;
            border-top: 1px solid #E0E0E0;
        }
        &:nth-child(7n + 7) {
            border-top: 1px solid #E0E0E0;
        }
        &:hover {
            background: #EFF6FF;
        }
        &.today {
            background: #aed2ff;
            color: #000000;
            &:hover {
            background: #aed2ff;
            color: #000000;
        }

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

const DayText = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    & > .month {
        color: #71717A;
    }
`


interface ICaalendarProps {
    dates: ICalendar[]
    dateClass?: string
    wrapClass?: string
}

export const CalendarBody:React.FC<ICaalendarProps> = ({dates, dateClass, wrapClass}) => {

    const month:string[] = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    let fullDate = new Date()
    const [fullMonth, setFullMonth] = useState<string>("")

    return (
        <CalendarWrapper className={wrapClass}>
            {dates.map((res) => {

                return (
                    <DateEl key={res.id} className={res.month.join(" ") + " " + dateClass}  >
                        <DayText >
                            { res.day }
                            {dateClass && <span className="month">
                                {res.fullMonth}
                            </span>}
                        </DayText>
                        
                        <Tasks>
                            <Task color="blue"></Task>
                            <Task color="violet"></Task>
                            <Task color="pink"></Task>
                        </Tasks>
                    
                    </DateEl>)
            })}
        </CalendarWrapper>
    )
}