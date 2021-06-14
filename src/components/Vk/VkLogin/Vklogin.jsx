import React from 'react'
import s from './VkLogin.module.scss'
import devices_img from '../../../img/devices.png'
import preloader from "../../../img/preloader.gif"
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
class VkLogin extends React.Component {
    state = {
        isLoading: false,
        isTypingPassword: false,
    }
    goToVkPage (){
        this.setState({
            isLoading: true
        })
        setTimeout(()=>{
            this.props.history.push(`/VkNews`)
        },1000)  
    }
    typingPasswordToggle (){
       this.setState({
           isTypingPassword: true
       })
    }
    render() {
        return (
            <div className={s.wrapper}>
                <div className={s.header}>
                    <div className={s.container}>
                        <div className={s.logo}>
                            <svg fill="none" height="24" width="136" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 11.5c0-5.42 0-8.13 1.68-9.82C3.37 0 6.08 0 11.5 0h1c5.42 0 8.13 0 9.82 1.68C24 3.37 24 6.08 24 11.5v1c0 5.42 0 8.13-1.68 9.82C20.63 24 17.92 24 12.5 24h-1c-5.42 0-8.13 0-9.82-1.68C0 20.63 0 17.92 0 12.5z" fill="#2787f5"></path>
                                <g clipRule="evenodd" fillRule="evenodd"><path d="M6.5 7.5H4.75c-.5 0-.6.24-.6.5 0 .46.6 2.76 2.76 5.8 1.45 2.07 3.49 3.2 5.34 3.2 1.11 0 1.25-.25 1.25-.68v-1.57c0-.5.1-.6.46-.6.26 0 .7.13 1.74 1.13 1.19 1.19 1.38 1.72 2.05 1.72h1.75c.5 0 .75-.25.6-.74-.15-.5-.72-1.2-1.47-2.05-.4-.49-1.02-1-1.2-1.26-.26-.34-.2-.49 0-.78 0 0 2.13-3 2.35-4.03.11-.37 0-.64-.53-.64H17.5a.76.76 0 00-.76.5s-.9 2.16-2.15 3.57c-.41.41-.6.54-.82.54-.1 0-.27-.13-.27-.5V8.14c0-.44-.13-.64-.5-.64h-2.75c-.28 0-.45.2-.45.4 0 .42.64.52.7 1.7v2.58c0 .57-.1.67-.32.67-.6 0-2.04-2.18-2.9-4.67-.16-.48-.33-.68-.78-.68z" fill="#fff"></path><path d="M66.86 12.5c0 3.24-2.43 5.5-5.78 5.5s-5.78-2.26-5.78-5.5S57.73 7 61.08 7s5.78 2.26 5.78 5.5zm-8.97 0c0 1.97 1.3 3.3 3.19 3.3s3.19-1.33 3.19-3.3c0-1.98-1.3-3.25-3.19-3.25s-3.19 1.28-3.19 3.25zm-17.14-.21c.95-.44 1.56-1.18 1.56-2.33 0-1.73-1.58-2.96-3.87-2.96h-5.27v11h5.5c2.37 0 4.02-1.29 4.02-3.05 0-1.33-.87-2.32-1.94-2.66zM35.6 9.01h2.83c.85 0 1.44.5 1.44 1.2s-.6 1.2-1.44 1.2h-2.83zM38.67 16h-3.06V13.3h3.06c.96 0 1.59.55 1.59 1.36s-.63 1.33-1.59 1.33zM51.84 18h3.19l-5.06-5.71L54.61 7h-2.9l-3.68 4.27h-.6V7H45v11h2.44v-4.38h.59zM76.47 7v4.34h-4.93V7H69.1v11h2.43v-4.44h4.93V18h2.43V7zM86.9 18h-2.44V9.22h-3.8V7H90.7v2.22h-3.8zm9.5-11c-2.11 0-3.91.89-4.52 2.8l2.24.37c.34-.67 1.05-1.2 2.15-1.2 1.33 0 2.06.84 2.17 2.28h-2.32c-3.23 0-4.79 1.42-4.79 3.45 0 2.05 1.59 3.3 3.78 3.3 1.8 0 3-.72 3.53-1.63l.5 1.63h1.76v-6.18c0-3.19-1.74-4.82-4.5-4.82zm-.72 9c-1.19 0-1.9-.5-1.9-1.4 0-.85.57-1.44 2.43-1.44h2.35c0 1.8-1.19 2.84-2.88 2.84zm17.99 2h-3.2l-3.8-4.38h-.6V18h-2.43V7h2.43v4.27h.6L110.34 7h2.9l-4.63 5.29zm3.88 0h2.43V9.22h3.8V7h-10.04v2.22h3.8zM130.1 7c3.34 0 5.56 2.4 5.56 5.37 0 .3-.02.55-.04.79h-8.54c.23 1.69 1.36 2.69 3.17 2.69 1.29 0 2.15-.4 2.68-1.2l2.29.39c-.88 2.01-2.83 2.96-5.12 2.96a5.28 5.28 0 01-5.51-5.5c0-3.12 2.17-5.5 5.51-5.5zm2.92 4.25c-.4-1.37-1.4-2.15-2.92-2.15-1.48 0-2.47.74-2.87 2.15z" fill="currentcolor"></path></g></svg>
                        </div>
                        <div className={s.search}>
                            <span className="fa fa-search"></span>
                            <input type="text" placeholder="Поиск" />
                        </div>
                        <p>Switch to English</p>
                    </div>
                </div>
                <div className={s.content}>
                    <div className={s.container}>
                        <div className={s.intro}>
                            <h2>ВКонтакте для мобильных устройств</h2>
                            <p>Установите официальное мобильное приложение
                                ВКонтакте и оставайтесь в курсе новостей ваших друзей, где бы вы ни находились.</p>
                            <img src={devices_img} alt="devices" />
                            <div className={s.platforms}>
                                <p className={s.platforms_android}>
                                    <span className="fa fa-android"></span>VK для Android</p>
                                <p className={s.platforms_apple}>
                                    <span className="fa fa-apple"></span>VK для iOS</p>
                            </div>
                            <p className={s.all_products}>Все продукты
                            <span className="fa fa-angle-right"></span></p>
                        </div>
                        <div className={s.login}>
                            <div className={s.log_block + " " + s.auth}>
                                <div className={s.input_block}>
                                    <input type="text" placeholder="Телефон или email" />
                                    <input type="password" placeholder="Пароль"
                                        onChange={() => this.typingPasswordToggle()} />
                                </div>
                                    {!this.state.isLoading
                                        ? <span onClick={()=>this.goToVkPage()}>Войти</span>
                                        : <span className={s.preloader_btn}><img src={preloader} alt="preloader"/></span>
                                    }

                                {this.state.isTypingPassword === false
                                    ? <p>Забыли пароль?</p>
                                    : <div className={s.alien}>
                                        <p></p>
                                        <div>
                                            Чужой компьютер
                                        </div>
                                      </div>
                                }
                            </div>
                            <div className={s.log_block + " " + s.registr}>
                                <h3>Впервые ВКонтакте?</h3>
                                <p className={s.text_assets}>Моментальная регистрация</p>
                                <div className={s.input_block}>
                                    <input type="text" placeholder="Ваше имя" />
                                    <input type="text" placeholder="Ваша фамилия" />
                                </div>
                                <p className={s.date_text}>Дата рождения
                                    <span className="fa fa-question-circle-o"></span>
                                </p>
                                <div className={s.input_date_block}>
                                    <div className={s.input_block + " " + s.input_date}>
                                        <input type="text" placeholder="День" className={s.day} />
                                        <span className="fa fa-angle-down"></span>
                                    </div>
                                    <div className={s.input_block + " " + s.input_date}>
                                        <input type="text" placeholder="Месяц" className={s.month} />
                                        <span className="fa fa-angle-down"></span>
                                    </div>
                                    <div className={s.input_block + " " + s.input_date}>
                                        <input type="text" placeholder="Год" className={s.year} />
                                        <span className="fa fa-angle-down"></span>
                                    </div>
                                </div>
                                <p className={s.continue_registr}>Продолжить регистрацию</p>
                                <p className={s.login_to_facebook}>Войти через Facebook</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default compose(connect(null,null),withRouter)(VkLogin);