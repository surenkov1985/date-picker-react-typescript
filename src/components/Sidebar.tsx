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

export const SideMenu = () => {

    return (
        <Sidebar>
            <Title month="Август" year={2022}/>
            <Calendar/>
        </Sidebar>
    )
}