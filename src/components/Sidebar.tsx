import React from "react"
import styled from "styled-components"
import { Calendar } from "./calendar"
import { Title } from "./Title"

const Sidebar = styled.div`
    max-width: 300px;
    height: 100%;
    background: #18181B;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    padding: 16px;
    row-gap: 16px;
`
export interface ICalendar {
    day: number,
    month: string[],
    id: string

}

export const SideMenu = () => {

    const month:string[] = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    const calendarDays:ICalendar[] = []; 
    let date = new Date()
    const today = date.getDate()
    const todayMonth = date.getMonth()
    const fullYear:number = date.getFullYear()
    const fullMonth:string = month[todayMonth]
    const lastDate:number = new Date(fullYear, todayMonth + 1, 0).getDate()
    const firstWeekDay = new Date(fullYear, todayMonth, 1).getDay()
    const lastWeekDay = new Date(fullYear, todayMonth + 1, 0).getDay()

    for (let i = 1; i <=lastDate; i++) {

        calendarDays.push({day:i, month: ["current", i === today ? "today" : ""], id: "c" + i})
    } 

    if (firstWeekDay !== 1) {

        for (let i = 0; i < firstWeekDay; i++) {
               
            calendarDays.unshift({day: new Date(fullYear, todayMonth + 1, -i).getDate(), month: ["previous"], id: "pr" + i})
        }
    }
    if (lastWeekDay !== 0) {

         for (let i = 1; i <= 7 - lastWeekDay; i++) {

            calendarDays.push({day:i, month: ["next"], id: "n" + i})
        }
    }

    return (
        <Sidebar>
            <Title month={fullMonth} year={+fullYear}/>
            <Calendar dates={calendarDays}/>
        </Sidebar>
    )
}