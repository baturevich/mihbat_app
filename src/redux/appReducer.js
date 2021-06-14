const INITIALIZING = "INITIALIZING"
const TOGGLEINVESTMODAL = "TOGGLEINVESTMODAL"
const TOGGLESTARTUPMODAL = "TOGGLESTARTUPMODAL"
const SETSLOGAN = "SETSLOGAN"


const initialState = {
    initializing: false,
    isInvestModalOpen: false,
    isStartUpModalOpen: false,
    slogan: "берёмся даже за самые невероятные идеи",
        invest_offer:"Если вас интересуют возможности инвестиций в самые разнообразные стартапы от простых торговых павильонов и магазинов до серьезных  финансовых  вложений в строительство и денежное управление то  это кнопка для вас! ",
        startup_offer:"Если у вас есть свой стартап-проект, идея, команда или компания. Если вы ищете инвестиции и хотите познакомиться с инвесторами. Получить грамотную консультацию по различным вопросом касающихся банковской деятельности, административных ресурсов и деловым связям то тогда эта кнопка для вас!",
        service_list:[
            {service_title: "Бизнес под ключ",
                service_text: "Мы предлагаем полное содействие в создании любого бизнеса! Беремся за самые сложные и оригинальные идеи, создаем бизнес под ключ!"},
            {service_title:"Консультирование",
                service_text:"Разрабатываем инновационные решения для действующих коммерческих проектов! Делаем бизнес-планы и анализируем готовые!"},
            {service_title:"Финансовые услуги",
                service_text:"Большая практика позволяет нам выкупать действующие инвестиционные проекты или перезапускать их с обновленными целями и задачами!"},
            {service_title:"Умные инвестиции",
                service_text:'Для инвестиционных компаний подбираем лучшие варианты, разделяем их по профилю: "Строительство", "Микробизнес", "Услуги населению", "Инновации".'},
            {service_title:"Управление",
                service_text:" Мы готовы брать на себя реализацию как отдельных процессов, так и полное управление проектом запуска новой компании."},
            {service_title:"Маркетинг",
                service_text:"Комплексный аутсорсинг управления проектом любой сложности - от общих представительских функций и маркетинга/рекламы, до открытия компании и постановки системы маркетинга и продаж"},
                    ],
        year_on_market: "7",
        year_cash_flow: "24.000.000",
        count_ready_startup: "31",
        count_seller_project: "16",
}

const appReducer = (state = initialState, action)=>{
    switch (action.type){
        case INITIALIZING:{
            console.log("Инициализация - успешно");
            return{ ...state, initializing: true}
        }
        case SETSLOGAN:{
            return{ ...state, slogan: action.slogan}
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

export default appReducer