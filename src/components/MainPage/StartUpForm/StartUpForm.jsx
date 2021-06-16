import React from 'react'
import s from './StartUpForm.module.scss'
const StartUpForm = (props) => {
    const state = {
        id: props.appData.order_list.length + 1,
        order_type: "Стартапер",
        order_name: "",
        order_summ: "",
        order_sfera: "",
        order_contact: "",
        order_profit: "",
        order_srok: "",
        order_text: "",
    }
    const addNewOrder = () => {
        props.addOrderAC(state)
    }
    return (
        <div className={s.investor_modal}>
            <div className={s.wrapper}>
                <i className="fa fa-close" onClick={() => props.toggleStartUpModalAC()}></i>
                {!props.appData.is_done_order && <h3>Расскажите о вашем проекте</h3>}
                {!props.appData.is_done_order
                    ? <div className={s.invest_form}>
                        <div className={s.input_group}>
                            <input type="text" placeholder="Ваше имя" onChange={(e) => state.order_name = e.currentTarget.value} />
                            <input type="text" placeholder="Ваш возраст" onChange={(e) => state.order_sfera = e.currentTarget.value} />
                        </div>
                        <div className={s.input_group}>
                            <input type="text" placeholder="Ваши контакты" onChange={(e) => state.order_contact = e.currentTarget.value} />
                            <input type="text" placeholder="Планируемая доходность" onChange={(e) => state.order_profit = e.currentTarget.value} />
                        </div>
                        <div className={s.input_group}>
                            <input type="text" placeholder="Необходимый обьем инветсиций" onChange={(e) => state.order_summ = e.currentTarget.value} />
                            <input type="text" placeholder="Предполагаемый период развития" onChange={(e) => state.order_srok = e.currentTarget.value} />
                        </div>
                        <textarea name="" id="" cols="30" rows="10"
                            onChange={(e) => state.order_text = e.currentTarget.value}
                            placeholder="Кратко опишите бизнес идею Вашего  Start-Up"></textarea>
                        <div className={s.btn_group}>
                            <span className={s.add_order} onClick={()=>addNewOrder()}>Отправить заявку</span>
                        </div>
                    </div>
                    : <div className={s.order_done}>
                        Заявка успешно отправлена.
                        <p>Ожидайте, в скором времени мы свяжемся с вами</p>
                        <span className="fa fa-check-circle-o"></span>
                    </div>
                }
            </div>
        </div>
    )
}

export default StartUpForm