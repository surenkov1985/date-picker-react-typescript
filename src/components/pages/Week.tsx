import React, {useState, useEffect} from "react"
import styled from "styled-components"
import { WeekDays, CalendarHeader, WeekDay } from "../WeekDays"
import { IDays } from "../calendar"

const Hours = styled.ul`
    display: flex;
    flex-direction: column;

    &:hover > li {
        background: #EFF6FF;
    }

    &:not(:last-child) {
        border-right: 1px solid #E0E0E0
    }

`
const Hour = styled(WeekDay)`
    height: 72px;
    cursor: pointer;

    &:not(:last-child) {
        border-right: none!important;
        border-bottom: 1px solid #E0E0E0!important;
    }

    &:last-child {border-bottom: none!important;}

`
const WeekHead = styled(WeekDays)`
    position: sticky;
    top: 0;
    cursor: pointer;

    & > li:hover {
        background: #EFF6FF;
    }
`

const WeekContent = styled.div`
    position: relative;
    overflow: auto;
    height: 100%;
`

export const Week = () => {

    const days:IDays[] = [{weekDay: "ПН"}, {weekDay: "ВТ"}, {weekDay: "СР"}, {weekDay:"ЧТ"}, {weekDay:"ПТ"}, {weekDay:"СБ"}, {weekDay:"ВС"}]
    const [weekDays, setWeekDays] = useState(days)

    const [hours, setHours] = useState<string[]>([])

    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    let today = date.getDate()

    function getHours() {

        const arr = []

        for (let i = 0; i < 24; i++) {
            let newDate = new Date(year, month, today, i, 0)
            let hour = newDate.toLocaleTimeString("ru", { hour: '2-digit', minute: '2-digit' })
            arr.push(hour)
        }

        setHours(arr)
    }

    useEffect(() => {
        let firstDay = date.getDate() - (date.getDay() === 0 ? 7 : date.getDay())
        days.map(day => {
            firstDay += 1
            return day.numb = firstDay
            
        })
        setWeekDays(days)
    }, [])

    useEffect(() => {
        
        getHours()
    }, [])

    return (
        <WeekContent>
            <WeekHead className="baseHeader" childClassName="baseWeekDays" days={weekDays} />
            <CalendarHeader className="baseHeader">
                <Hours>
                    {hours.map((res) => {
                        return (
                            <Hour key={res} className="baseWeekDays">{res}</Hour>
                        )
                    })}
                </Hours>
                {days.map(res => {
                    return (
                        <Hours key={res.weekDay} >
                            {hours.map((hour) => {
                                return (
                                    <Hour key={res.weekDay + hour} className="baseWeekDays" ></Hour>
                                )
                            })}
                        </Hours>
                    )
                })}
            </CalendarHeader>
        </WeekContent>
    )
}

 {/* <CalendarHeader className="baseHeader">
                <Hours>
                    {hours.map((res) => {
                        return (
                            <Hour key={res} className="baseWeekDays">{res}</Hour>
                        )
                    })}
                </Hours>
                {days.map(res => {
                    return (
                        <Hours key={res.weekDay}>
                            {hours.map((hour) => {
                                return (
                                    <Hour key={res.weekDay + hour} className="baseWeekDays"></Hour>
                                )
                            })}
                        </Hours>
                    )
                })}
            </CalendarHeader> */}