import { GetCurrentDate } from "../utils/getCurrentDate"

const INITIALIZING = "INITIALIZING"
const TOGGLEINVESTMODAL = "TOGGLEINVESTMODAL"
const TOGGLESTARTUPMODAL = "TOGGLESTARTUPMODAL"
const SETNEWPAGEDATA = "SETNEWPAGEDATA"
const ADDSERVICE = "ADDSERVICE"
const DELETESERVICE = "DELETESERVICE"
const ADDORDER = "ADDORDER"
const DELETEORDER = "DELETEORDER"

const initialState = {
    initializing: false,
    isInvestModalOpen: false,
    isStartUpModalOpen: false,
    slogan: "беремся даже за самые невероятные идеи",
    invest_offer:"Если вас интересуют возможности инвестиций в самые разнообразные стартапы от простых торговых павильонов и магазинов до серьезных  финансовых  вложений в строительство и денежное управление то  это кнопка для вас! ",
    startup_offer:"Если у вас есть свой стартап-проект, идея, команда или компания. Если вы ищете инвестиции и хотите познакомиться с инвесторами. Получить грамотную консультацию по различным вопросом касающихся банковской деятельности, административных ресурсов и деловым связям то тогда эта кнопка для вас!",
    service_list:
    [
        {id:1,service_title: "Бизнес под ключ",
            service_text: "Мы предлагаем полное содействие в создании любого бизнеса! Беремся за самые сложные и оригинальные идеи, создаем бизнес под ключ!"},
        {id:2,service_title:"Консультирование",
            service_text:"Разрабатываем инновационные решения для действующих коммерческих проектов! Делаем бизнес-планы и анализируем готовые!"},
        {id:3,service_title:"Финансовые услуги",
            service_text:"Большая практика позволяет нам выкупать действующие инвестиционные проекты или перезапускать их с обновленными целями и задачами!"},
        {id:4,service_title:"Умные инвестиции",
            service_text:'Для инвестиционных компаний подбираем лучшие варианты, разделяем их по профилю: "Строительство", "Микробизнес", "Услуги населению", "Инновации".'},
        {id:5,service_title:"Управление",
            service_text:" Мы готовы брать на себя реализацию как отдельных процессов, так и полное управление проектом запуска новой компании."},
        {id:6,service_title:"Маркетинг",
            service_text:"Комплексный аутсорсинг управления проектом любой сложности - от общих представительских функций и маркетинга/рекламы, до открытия компании и постановки системы маркетинга и продаж"},
    ],
    year_on_market: "7",
    year_cash_flow: "24.000.000",
    count_ready_startup: "31",
    count_seller_project: "16",
    order_list:[
        {id:1, order_type: "Инвестор",order_name:"Евгений",order_sfera:"Строительство",
            order_contact:"8(909) 085-32-83",order_profit:"100.000₽ в неделю",order_srok:"3 месяца",
            order_summ :"2.000.000₽",order_date: "16 Июня в 15:29",
            order_text:"Комплексный аутсорсинг управления проектом любой сложности - от общих представительских функций и маркетинга/рекламы, до открытия компании и постановки системы маркетинга и продаж"
        },
        {id:2, order_type: "Стартапер",order_name:"Кирилл",order_sfera:"Строительство",
            order_contact:"8(909) 085-32-83",order_profit:"500.000₽ в неделю",order_srok:"3 месяца",
            order_summ :"4.000.000₽", order_date: "4 Июня в 18:39",
            order_text:"Комплексный аутсорсинг управления проектом любой сложности - от общих представительских функций и маркетинга/рекламы, до открытия компании и постановки системы маркетинга и продаж"
        },
        {id:3, order_type: "Инвестор",order_name:"Егор",order_sfera:"Строительство",
            order_contact:"8(909) 085-32-83",order_profit:"250.000₽ в месяц",order_srok:"20 дней",
            order_summ :"6.000.000₽",order_date: "21 Мая в 11:43",
            order_text:"Комплексный аутсорсинг управления проектом любой сложности - от общих представительских функций и маркетинга/рекламы, до открытия компании и постановки системы маркетинга и продаж"
        },
    ],
    is_done_order: false,
}

const appReducer = (state = initialState, action)=>{
    switch (action.type){
        case INITIALIZING:{
            console.log("Инициализация - успешно");
            return{ ...state, initializing: true}
        }
        case SETNEWPAGEDATA:{
            debugger
            return{ 
                ...state, 
                slogan: action.new_data.slogan,
                invest_offer: action.new_data.invest_offer,
                startup_offer: action.new_data.startup_offer,
                year_on_market: action.new_data.year_on_market,
                year_cash_flow: action.new_data.year_cash_flow,
                count_ready_startup: action.new_data.count_ready_startup,
                count_seller_project: action.new_data.count_seller_project,
            }
        }
        case  ADDSERVICE:{
            return{...state, service_list:[...state.service_list, action.new_service]}
        }
        case  DELETESERVICE:{
            return {
                ...state,
                service_list: state.service_list.filter(p => p.id !== action.service_id)
            }
        }
        case  ADDORDER:{
            let new_order = {...action.new_order}
            new_order['order_date'] = GetCurrentDate()
            return{...state, order_list:[...state.order_list, new_order],is_done_order: true}
        }
        case  DELETEORDER:{
            return {
                ...state,
                order_list: state.order_list.filter(p => p.id !== action.order_id)
            }
        }
        case TOGGLEINVESTMODAL:{
            if(state.isInvestModalOpen){
                return{ ...state, isInvestModalOpen: false}
            } else{
                return{ ...state, isInvestModalOpen: true}
            }
        }
        case TOGGLESTARTUPMODAL:{
            if(state.isStartUpModalOpen){
                return{ ...state, isStartUpModalOpen: false}
            } else{
                return{ ...state, isStartUpModalOpen: true}
            }
        }

        default:{
            return state
        }
    }
}

export const initializingAC = () =>({type: INITIALIZING})
export const toggleInvestModalAC = ()=>({type: TOGGLEINVESTMODAL})
export const toggleStartUpModalAC = ()=>({type: TOGGLESTARTUPMODAL})
export const setNewPageDataAC = (new_data)=>({type: SETNEWPAGEDATA, new_data })
export const addServiceAC = (new_service)=>({type: ADDSERVICE,new_service})
export const deleteServiceAC = (service_id)=>({type: DELETESERVICE, service_id})
export const addOrderAC = (new_order)=>({type:ADDORDER, new_order})
export const deleteOrderAC = (order_id)=>({type:DELETEORDER, order_id})

export default appReducer