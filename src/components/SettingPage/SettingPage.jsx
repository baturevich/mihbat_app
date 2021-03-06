import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addServiceAC, deleteOrderAC, deleteServiceAC, setNewPageDataAC } from '../../redux/appReducer'
import s from './SettingPage.module.scss'

const SettingPage = (props) => {
    let state = {
        slogan: props.appData.slogan,
        invest_offer: props.appData.invest_offer,
        startup_offer: props.appData.startup_offer,
        service_list: props.appData.service_list,
        year_on_market: props.appData.year_on_market,
        year_cash_flow: props.appData.year_cash_flow,
        count_ready_startup: props.appData.count_ready_startup,
        count_seller_project: props.appData.count_seller_project,
    }
    let new_service = {
        id: state.service_list.length + 1,
        service_title: '',
        service_text: '',
    }
    const setNewService = () => {
        if (new_service.service_title !== '' & new_service.service_text !== '') {
            props.addServiceAC(new_service)
        }
    }
    const setNewPageData = () => {
        props.setNewPageDataAC(state)
    }
    return (
        <div className={s.admin_wrapper}>
            <div className={s.container}>
                <h1>Админ-панель <NavLink to="/MainPage" className={s.link_btn}>Перейти на сайт</NavLink></h1>
                <div className={s.admin_panel}>
                    <div className={s.setting_web}>
                        <h3>1. Главная информация</h3>
                        <div className={s.input_block}>
                            <p>Слоган</p>
                            <input type="text" placeholder={state.slogan}
                                onChange={(e) => state.slogan = e.currentTarget.value} />
                        </div>
                        <div className={s.input_block}>
                            <p>Оффер для Инвесторов</p>
                            <textarea name="investor_offer" cols="30" rows="5"
                                onChange={(e) => state.invest_offer = e.currentTarget.value}
                                placeholder={state.invest_offer}></textarea>
                        </div>
                        <div className={s.input_block}>
                            <p>Оффер для Стартапа</p>
                            <textarea name="startup_offer" cols="30" rows="5"
                                onChange={(e) => state.startup_offer = e.currentTarget.value}
                                placeholder={state.startup_offer}></textarea>
                        </div>
                        <span className={s.setting_btn} onClick={() => setNewPageData()}>Сохранить изменения</span>
                        <h3>2. Список услуг</h3>
                        <ul>
                            {state.service_list.map(i => {
                                return (<li key={Math.random() * 3}>{i.service_title}
                                    <i className="fa fa-trash" onClick={() => props.deleteServiceAC(i.id)}></i> </li>)
                            })}

                        </ul>
                        <div className={s.add_service}>
                            <div className={s.input_block}>
                                <p>Заголовок</p>
                                <input type="text"
                                    onChange={(e) => new_service.service_title = e.currentTarget.value} />
                            </div>
                            <div className={s.input_block}>
                                <p>Текст</p>
                                <textarea name="new_service"
                                    onChange={(e) => new_service.service_text = e.currentTarget.value}
                                    id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <span className={s.setting_btn} onClick={() => setNewService()}>Добавить услугу</span>
                        <h3>3. Цифры статистики</h3>
                        <div className={s.input_block}>
                            <p>Кол-во лет на рынке</p>
                            <input type="text"
                                onChange={(e) => state.year_on_market = e.currentTarget.value}
                                placeholder={state.year_on_market} />
                        </div>
                        <div className={s.input_block}>
                            <p>Годовой денежный оборот</p>
                            <input type="text"
                                onChange={(e) => state.year_cash_flow = e.currentTarget.value}
                                placeholder={state.year_cash_flow} />
                        </div>
                        <div className={s.input_block}>
                            <p>Кол-во реализованных стартапов</p>
                            <input type="text"
                                onChange={(e) => state.count_ready_startup = e.currentTarget.value}
                                placeholder={state.count_ready_startup} />
                        </div>
                        <div className={s.input_block}>
                            <p>Кол-во выкупленных бизнес проектов</p>
                            <input type="text"
                                onChange={(e) => state.count_seller_project = e.currentTarget.value}
                                placeholder={state.count_seller_project} />
                        </div>
                        <span className={s.setting_btn} onClick={() => setNewPageData()}>Сохранить изменения</span>
                    </div>
                    <div className={s.setting_order}>
                        <div className={s.order_list}>
                        <h3>Список заявок</h3>
                        {props.appData.order_list.reverse().map(o=>{
                            let is_investor = o.order_type == "Инвестор" ? true : false
                            return(
                                <div className={s.order_item} key={Math.random()*5}>
                                <div className={s.order_type}>
                                    <i className="fa fa-user"></i> {o.order_type} {o.order_name} 
                                    <p>{o.order_date}</p>
                                </div>
                                <div className={s.order_sfera}>{is_investor ? "Сфера" : "Возраст"}: <span>{o.order_sfera}</span></div>
                                <div className={s.order_contact}>Контакты: <span>{o.order_contact}</span></div>
                                <div className={s.order_summ}>{is_investor ? "Обьём инвестиций" : " Планируемая доходность"}: <span>{o.order_summ}</span></div>
                                <div className={s.order_profit}>{is_investor ? "Ожидаемая доходность" : "Необходимо финансов"}: <span>{o.order_profit}</span></div>
                                <div className={s.order_srok}>{is_investor ? "Ожидаемая доходность" : "Период развития"}: <span>{o.order_srok}</span></div>
                                <div className={s.order_text}>Краткое описание проекта: <span>{o.order_text}</span></div>
                                <div className={s.order_delete}onClick={()=>props.deleteOrderAC(o.id)}><i className="fa fa-trash"></i></div>
                            </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({ appData: state.appData })

export default connect(mapStateToProps, { setNewPageDataAC, addServiceAC, deleteServiceAC, deleteOrderAC})(SettingPage)