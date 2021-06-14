import React from 'react'
import s from './StartUpForm.module.scss'
const StartUpForm = (props)=>{
    return(
        <div className={s.investor_modal}>
        <div className={s.wrapper}>
        <i className="fa fa-close" onClick={()=>props.toggleStartUpModalAC()}></i>
            <h3>Расскажите о вашем проекте</h3>
            <div className={s.invest_form}>
                <div className={s.input_group}>
                    <input type="text" placeholder="Ваше имя" />
                    <input type="text" placeholder="Ваш возраст" />
                </div>
                <div className={s.input_group}>
                    <input type="text" placeholder="Ваши контакты" />
                    <input type="text" placeholder="Планируемая доходность" />
                </div>
                <div className={s.input_group}>
                    <input type="text" placeholder="Необходимый обьем инветсиций" />
                    <input type="text" placeholder="Предполагаемый период развития" />
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder="Кратко опишите бизнес идею Вашего  Start-Up"></textarea>
                <div className={s.btn_group}>
                    <span>Отправить заявку</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default StartUpForm