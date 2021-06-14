import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './StartPage.module.scss'

const StartPage = ()=>{
    return(
        <div className={s.admin_list}>
            <h1>Выберите сервис</h1>
            <ul>
            <NavLink to={'/VkSetting'}>VK</NavLink>
            <NavLink to={'/InstSetting'} >Instagram</NavLink>
            </ul>
        </div>
    )
}

export default StartPage;