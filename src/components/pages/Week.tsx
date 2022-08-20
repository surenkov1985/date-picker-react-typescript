import React, {useState, useEffect} from "react"
import styled from "styled-components"
import { WeekDays, CalendarHeader, WeekDay } from "../WeekDays"
import { IDays } from "../calendar"

const Hours = styled.ul`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        border-right: 1px solid #E0E0E0
    }
`
const Hour = styled(WeekDay)`
    height: 72px;

    &:not(:last-child) {
        border-right: none!important;
        border-bottom: 1px solid #E0E0E0!important;
    }

    &:last-child {border-bottom: none!important;}
`
const WeekHead = styled(WeekDays)`
    position: sticky;
    top: 0;
`

const WeekContent = styled.div`
    position: relative;
    overflow: auto;
    height: 100%;
`

export const Week = () => {

    const days:IDays[] = [{weekDay: "ПН"}, {weekDay: "ВТ"}, {weekDay: "СР"}, {weekDay:"ЧТ"}, {weekDay:"ПТ"}, {weekDay:"СБ"}, {weekDay:"ВС"}]
    const [weekDays, setWeekDays] = useState(days)

    const times:string[] = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
    const [hours, setHours] = useState<string[]>([])
    // const hours:string[] = []

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
    // let firstDay = date.getDate() - date.getDay()

    useEffect(() => {
        let firstDay = date.getDate() - date.getDay()
        days.map(day => {
            firstDay += 1
            return day.numb = firstDay
            
        })
        setWeekDays(days)
    }, [])

    useEffect(() => {
        
        getHours()
        console.log(hours)
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
                        <Hours key={res.weekDay}>
                            {hours.map((hour , index) => {
                                return (
                                    <Hour key={res.weekDay + hour} className="baseWeekDays"></Hour>
                                )
                            })}
                        </Hours>
                    )
                })}
            </CalendarHeader>
        </WeekContent>
    )
}