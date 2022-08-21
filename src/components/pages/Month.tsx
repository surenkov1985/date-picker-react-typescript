import React, {useState, useEffect} from "react"
import styled from "styled-components"
import { WeekDays, CalendarHeader, WeekDay } from "../WeekDays"
import { IDays } from "../calendar"
import { ICalendar, SideMenu } from "../Sidebar"
import { CalendarBody } from "../CalendarBody"

export const Month = () => {

    const days:IDays[] = [{weekDay: "ПН"}, {weekDay: "ВТ"}, {weekDay: "СР"}, {weekDay:"ЧТ"}, {weekDay:"ПТ"}, {weekDay:"СБ"}, {weekDay:"ВС"}]
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

        calendarDays.push({day:i, month: ["current", i === today ? "today" : ""], id: "c" + i, fullMonth: i === 1 ? month[date.getMonth()] : ""})
    } 

    if (firstWeekDay !== 1) {

        for (let i = 0; i < firstWeekDay; i++) {
               
            calendarDays.unshift({day: new Date(fullYear, todayMonth + 1, -i).getDate(), month: ["previous"], id: "pr" + i})
        }
    }
    if (lastWeekDay !== 0) {

         for (let i = 1; i <= 7 - lastWeekDay; i++) {

            calendarDays.push({day:i, month: ["next"], id: "n" + i, fullMonth: i === 1 ? month[date.getMonth() + 1] : ""})
        }
    }

    return (
        <>
            <WeekDays  className="monthHeader" days={days} />
            <CalendarBody dates={calendarDays} dateClass="monthPageDay" wrapClass="monthWrapper"/>
        </>
    )
}