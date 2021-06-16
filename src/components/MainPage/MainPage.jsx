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
                {this.props.appData.isInvestModalOpen && <InvestModalContainer />}
                {this.props.appData.isStartUpModalOpen && <StartUpFormContainer />}
                <div className={s.container}>
                    <header className={s.header}>
                        <div className={s.logo}>
                            <a href="##">Mihbat.ru</a>
                            <p> - {this.props.appData.slogan}</p>
                        </div>
                        <a href="##" className={s.header_phone}> <i className="fa fa-mobile-phone"></i> +7 (351) 776-85-55</a>
                    </header>
                </div>
                <div className={s.container}>
                    <div className={s.offers}>
                        <div className={s.offer}>
                            <p className={s.offer_title}>Я инвестор</p>
                            <p className={s.offer_text}>{this.props.appData.invest_offer}</p>
                            <span className={s.invest_btn} onClick={() => this.props.toggleInvestModalAC()}>Инвестировать</span>
                        </div>
                        <div className={s.offer}>
                            <p className={s.offer_title}>Я стартап</p>
                            <p className={s.offer_text}>{this.props.appData.startup_offer}</p>
                            <span className={s.startup_btn} onClick={() => this.props.toggleStartUpModalAC()}>Найти инвестици</span>
                        </div>
                    </div>
                </div>
                <div className={s.container}>
                    <div className={s.services}>
                        <div className={s.service_group}>
                            {this.props.appData.service_list.map(i => {
                                if(i.id <=3){
                                    return (
                                        <div className={s.service} key={Math.random()*5}>
                                            <div className={s.service_name}>{i.service_title}</div>
                                            <div className={s.service_text}>{i.service_text}</div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                        <div className={s.service_group}>
                        {this.props.appData.service_list.map(i => {
                                if(i.id > 3){
                                    return (
                                        <div className={s.service} key={Math.random()*5}>
                                            <div className={s.service_name}>{i.service_title}</div>
                                            <div className={s.service_text}>{i.service_text}</div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
                <div className={s.container}>
                    <div className={s.why_trust_us}>
                        <h3>Почему люди доверяют нам</h3>
                        <div className={s.statistics}>
                            <img src={diag_img} alt="diag_img" />
                            <ul className={s.stat_list}>
                                <li className={s.stat_item_1}><span>{this.props.appData.year_on_market}</span> лет на рынке </li>
                                <li className={s.stat_item_2}><span>{this.props.appData.year_cash_flow}</span> руб./год – сумма инвестиций</li>
                                <li className={s.stat_item_3}><span>{this.props.appData.count_ready_startup}</span> реализованных стартапа</li>
                                <li className={s.stat_item_4}><span>{this.props.appData.count_seller_project}</span> бизнес-проектов выкуплено</li>
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