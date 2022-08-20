import React from "react"
import styled from "styled-components"
import { ICalendar } from "./Sidebar"
import { WeekDays } from "./WeekDays"


const CalendarCont = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
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

export interface IDays {
    weekDay: string,
    numb?: number
}

export const Calendar:React.FC<ICaalendarProps> = ({dates}) => {

    const days:IDays[] = [{weekDay: "ПН"}, {weekDay: "ВТ"}, {weekDay: "СР"}, {weekDay:"ЧТ"}, {weekDay:"ПТ"}, {weekDay:"СБ"}, {weekDay:"ВС"}]

    return (
        <CalendarCont>
            <WeekDays days={days}/>
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