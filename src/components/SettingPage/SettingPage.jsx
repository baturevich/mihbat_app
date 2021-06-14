import React from 'react'
import s from './SettingPage.module.scss'

const SettingPage = (props)=>{
    // const state ={
    //     slogan: props.appData.slogan,
    //     invest_offer: props.appData.invest_offer,
    //     startup_offer: props.appData.startupOffer,
    //     service_list:[{service_title: "",
    //                     service_text: ""},],
    //     year_on_market: "",
    //     year_cash_flow: "",
    //     count_ready_startup: "",
    //     count_seller_project: "",
    // }
    return(
        <div className={s.admin_wrapper}>
            <div className={s.container}>
            <h1>Администрирование сайта</h1>
                <div className={s.admin_panel}>
                    <div className={s.setting_web}>
                        <h3>1. Главная информация</h3>
                        <div className={s.input_block}>
                            <p>Слоган</p>
                            <input type="text" />
                        </div>
                        <div className={s.input_block}>
                            <p>Оффер для Инвесторов</p>
                            <textarea name="investor_offer" id="" cols="30" rows="2"></textarea>
                        </div>
                        <div className={s.input_block}>
                            <p>Оффер для Стартапа</p>
                            <textarea name="startup_offer" id="" cols="30" rows="2"></textarea>
                        </div>
                        <h3>2. Список услуг</h3>
                        <ul>
                            <li>Бизнес под ключ</li>
                            <li>Консультрование</li>
                            <li>Финансовые услуги</li>
                            <li>Умные инвестиции</li>
                            <li>Управление</li>
                            <li>Маркетинг</li>
                        </ul>
                        <h3>3. Цифры статистики</h3>
                        <div className={s.input_block}>
                            <p>Кол-во лет на рынке</p>
                            <input type="text" />
                        </div>
                        <div className={s.input_block}>
                            <p>Годовой денежный оборот</p>
                            <input type="text" />
                        </div>
                        <div className={s.input_block}>
                            <p>Кол-во реализованных стартапов</p>
                            <input type="text" />
                        </div>
                        <div className={s.input_block}>
                            <p>Кол-во выкупленных бизнес проектов</p>
                            <input type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 export default SettingPage