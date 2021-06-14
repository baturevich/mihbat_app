import React from 'react'
import s from './InvestForm.module.scss'

const InvestForm = (props)=>{
    return(
        <div className={s.investor_modal}>
        <div className={s.wrapper}>
        <i className="fa fa-close" onClick={()=>props.toggleInvestModalAC()}></i>
            <h3>Расскажите о ваших возможностях</h3>
            <div className={s.invest_form}>
                <div className={s.input_group}>
                    <input type="text" placeholder="Ваше имя" />
                    <input type="text" placeholder="Сфера интересов" />
                </div>
                <div className={s.input_group}>
                    <input type="text" placeholder="Ваши контакты" />
                    <input type="text" placeholder="Ожидаемая доходность" />
                </div>
                <div className={s.input_group}>
                    <input type="text" placeholder="Доступный обьем инвестиций" />
                    <input type="text" placeholder="Ожидаемый срок окупаемости" />
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder="Кратко опишите какая сфера бизнеса кажется вам перспективной для инвестиций"></textarea>
                <div className={s.btn_group}>
                    <span>Отправить заявку</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default InvestForm