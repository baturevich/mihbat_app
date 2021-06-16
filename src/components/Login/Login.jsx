import React from 'react'
import { NavLink } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { activeErrorModeAC, authAdminAC } from '../../redux/appReducer'
import s from './Login.module.scss'

const Login = (props)=>{
    const login = "admin"
    const password = "admin"
    let temp_login = ""
    let temp_password  = ""
    const get_login = ()=>{
        if(temp_password === password & temp_login===login){
            props.authAdminAC()
            setTimeout(()=>{
                props.history.push(`/admin`)
            },200)
        }
        else{
            props.activeErrorModeAC()
        }
    }
    return(
        <div className={s.wrapper}>
            <div className={s.login}>
                <h2>Администирование сайта</h2>
                <div className={s.input_group}>
                    <p>Логин</p>
                    <input type="text" 
                    className={props.appData.is_error_mode&& s.error}
                     onChange={e=> temp_login = e.currentTarget.value}/>
                    
                </div>
                <div className={s.input_group}>
                    <p>Пароль</p>
                    <input type="password" 
                    className={props.appData.is_error_mode&& s.error}
                    onChange={e=> temp_password = e.currentTarget.value} />
                </div>
                {props.appData.is_error_mode
                    ? <div className={s.error_text}>Неверное имя пользователя или пароль</div>
                    : null}
                <span onClick={()=>get_login()}>Войти</span>
            </div>
            <NavLink to="/MainPage"> <i className="fa fa-angle-double-left"></i> Вернуться обратно</NavLink>
        </div>
    )
}

const mapStateToProps = (state) => ({ appData: state.appData })

export default compose(connect(mapStateToProps,{authAdminAC,activeErrorModeAC}),withRouter,)(Login)


