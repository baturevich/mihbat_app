import React from 'react'
import s from "./MainPage.module.scss"
import Particles from 'react-particles-js';
import diag_img from "../../img/token-top.png"
import InvestModalContainer from './InvestForm/InvestFormContainer';
import StartUpFormContainer from './StartUpForm/StartUpFormContainer';

class MainPage extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                {this.props.appData.isInvestModalOpen && <InvestModalContainer/>}
                {this.props.appData.isStartUpModalOpen && <StartUpFormContainer/>}
                <div className={s.container}>
                    <header className={s.header}>
                        <div className={s.logo}>
                            <a href="##">Mihbat.ru</a>
                            <p> - беремся даже за самые невероятные идеи</p>
                        </div>
                        <a href="##" className={s.header_phone}> <i className="fa fa-mobile-phone"></i> +7 (351) 776-85-55</a>
                    </header>
                </div>
                <div className={s.container}>
                    <div className={s.offers}>
                        <div className={s.offer}>
                            <p className={s.offer_title}>Я инвестор</p>
                            <p className={s.offer_text}>
                                Если вас интересуют возможности инвестиций в самые разнообразные стартапы от простых торговых павильонов и магазинов до серьезных финансовых вложений в строительство и денежное управление то это кнопка для вас!
                                </p>
                            <span className={s.invest_btn} onClick={()=>this.props.toggleInvestModalAC()}>Инвестировать</span>
                        </div>
                        <div className={s.offer}>
                            <p className={s.offer_title}>Я стартап</p>
                            <p className={s.offer_text}>
                                Если у вас есть свой стартап-проект, идея, команда или компания. Если вы ищете инвестиции и хотите познакомиться с инвесторами. Получить грамотную консультацию по различным вопросом касающихся банковской деятельности, административных ресурсов и деловым связям то тогда эта кнопка для вас!                            </p>
                            <span className={s.startup_btn} onClick={()=>this.props.toggleStartUpModalAC()}>Найти инвестици</span>
                        </div>
                    </div>
                </div>
                <div className={s.container}>
                    <div className={s.services}>
                        <div className={s.service_group}>
                            <div className={s.service}>
                                <div className={s.service_name}>Бизнес под ключ</div>
                                <div className={s.service_text}>
                                    Мы предлагаем полное содействие в создании любого бизнеса! Беремся за самые сложные и оригинальные идеи, создаем бизнес под ключ!
                            </div>
                            </div>
                            <div className={s.service}>
                                <div className={s.service_name}>Бизнес под ключ</div>
                                <div className={s.service_text}>
                                    Мы предлагаем полное содействие в создании любого бизнеса! Беремся за самые сложные и оригинальные идеи, создаем бизнес под ключ!
                            </div>
                            </div>
                            <div className={s.service}>
                                <div className={s.service_name}>Бизнес под ключ</div>
                                <div className={s.service_text}>
                                    Мы предлагаем полное содействие в создании любого бизнеса! Беремся за самые сложные и оригинальные идеи, создаем бизнес под ключ!
                            </div>
                            </div>
                        </div>
                        <div className={s.service_group}>
                            <div className={s.service}>
                                <div className={s.service_name}>Бизнес под ключ</div>
                                <div className={s.service_text}>
                                    Мы предлагаем полное содействие в создании любого бизнеса! Беремся за самые сложные и оригинальные идеи, создаем бизнес под ключ!
                            </div>
                            </div>
                            <div className={s.service}>
                                <div className={s.service_name}>Бизнес под ключ</div>
                                <div className={s.service_text}>
                                    Мы предлагаем полное содействие в создании любого бизнеса! Беремся за самые сложные и оригинальные идеи, создаем бизнес под ключ!
                            </div>
                            </div>
                            <div className={s.service}>
                                <div className={s.service_name}>Бизнес под ключ</div>
                                <div className={s.service_text}>
                                    Мы предлагаем полное содействие в создании любого бизнеса! Беремся за самые сложные и оригинальные идеи, создаем бизнес под ключ!
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.container}>
                    <div className={s.why_trust_us}>
                        <h3>Почему люди доверяют нам</h3>
                        <div className={s.statistics}>
                            <img src={diag_img} alt="diag_img" />
                            <ul className={s.stat_list}>
                                <li className={s.stat_item_1}><span>7 </span>лет на рынке </li>
                                <li className={s.stat_item_2}><span>24 000 000 </span>руб./год – сумма инвестиций</li>
                                <li className={s.stat_item_3}><span>31 </span>реализованных стартапа</li>
                                <li className={s.stat_item_4}><span>16 </span>бизнес-проектов выкуплено</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={s.container}>
                    <div className={s.copyright}><p>OOO ТК "МИХБАТ" © 2013-2021</p></div>
                </div>
                <Particles />
            </div>
        )
    }
}
export default MainPage;