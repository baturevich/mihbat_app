export const GetCurrentDate = ()=>{
    let now = new Date(),
    day = now.getDate(),
    month = now.getMonth(),
    hour = now.getHours(),
    minutes = now.getMinutes(),
    fmonth;
    if (minutes < 10) {
        minutes = "0" + minutes;
    };
    switch (month) {
        case 0: fmonth = "Января"; break;
        case 1: fmonth = "Февраля"; break;
        case 2: fmonth = "Марта"; break;
        case 3: fmonth = "Апреля"; break;
        case 4: fmonth = "Мая"; break;
        case 5: fmonth = "Июня"; break;
        case 6: fmonth = "Июля"; break;
        case 7: fmonth = "Августа"; break;
        case 8: fmonth = "Сентября"; break;
        case 9: fmonth = "Октября"; break;
        case 10: fmonth = "Ноября"; break;
        case 11: fmonth = "Декабря"; break;
    default: ;
    };
    return  day + " " + fmonth + " в " + hour + ":" + minutes;
}