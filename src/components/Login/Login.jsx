import React from 'react'
import { NavLink } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { activeErrorModeAC, authAdminAC } from '../../redux/appReducer'
import s from './Login.module.scss'

// const Login = (props) => {
//     const login = "admin"
//     const password = "admin"
//     let temp_login = ""
//     let temp_password = ""
//     const get_login = () => {
//         if (temp_password == password & temp_login == login) {
//             this.props.authAdminAC()
//             setTimeout(() => {
//                 this.props.history.push(`/admin`)
//             }, 200)
//         }
//         else {
//             this.props.activeErrorModeAC()
//         }
//     }
//     console.log(this.props.appData.is_auth);
//     if (this.props.appData.is_auth === true) {
//         return (
//             <div className={s.wrapper}>
//                 <div className={s.login}>
//                     <h2>Администирование сайта</h2>
//                     <div className={s.input_group}>
//                         <p>Логин</p>
//                         <input type="text"
//                             className={this.props.appData.is_error_mode && s.error}
//                             onChange={e => temp_login = e.currentTarget.value} />

//                     </div>
//                     <div className={s.input_group}>
//                         <p>Пароль</p>
//                         <input type="password"
//                             className={this.props.appData.is_error_mode && s.error}
//                             onChange={e => temp_password = e.currentTarget.value} />
//                     </div>
//                     {this.props.appData.is_error_mode
//                         ? <div className={s.error_text}>Неверное имя пользователя или пароль</div>
//                         : null}
//                     <span onClick={() => get_login()}>Войти</span>
//                 </div>
//             </div>
//         )
//     }
//     else {
//         return (
//             <>
//                 <Redirect to="/admin" />
//             </>
//         )
//     }
// }
class Login extends React.Component {
    login = "admin"
    password = "admin"
    temp_login = ""
    temp_password = ""
    get_login = () => {
        if (this.temp_password == this.password & this.temp_login == this.login) {
            this.props.authAdminAC()
            setTimeout(() => {
                this.props.history.push(`/admin`)
            }, 200)
        }
        else {
            this.props.activeErrorModeAC()
        }
    }
    render() {
        if (this.props.appData.is_auth === false) {
            return (
                <div className={s.wrapper}>
                    <div className={s.login}>
                        <h2>Администирование сайта</h2>
                        <div className={s.input_group}>
                            <p>Логин</p>
                            <input type="text"
                                className={this.props.appData.is_error_mode && s.error}
                                onChange={e => this.temp_login = e.currentTarget.value} />

                        </div>
                        <div className={s.input_group}>
                            <p>Пароль</p>
                            <input type="password"
                                className={this.props.appData.is_error_mode && s.error}
                                onChange={e => this.temp_password = e.currentTarget.value} />
                        </div>
                        {this.props.appData.is_error_mode
                            ? <div className={s.error_text}>Неверное имя пользователя или пароль</div>
                            : null}
                        <span onClick={() => this.get_login()}>Войти</span>
                    </div>
                </div>
            )
        }
        else {
            return (
                <>
                    <Redirect to="/admin" />
                </>
            )
        }
    }
}

const mapStateToProps = (state) => ({ appData: state.appData })

export default compose(connect(mapStateToProps, { authAdminAC, activeErrorModeAC }), withRouter,)(Login)


