import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './VkSetting.module.scss'

const VkSetting = (props) => {
 // Класс можно если попробовать 
 //он блюр(когда уводишь от элeмента или же сделать кнопку сохранить после каждого изменения)

    console.log(props.vk_data);
    let user_temp_data = {
        fio: props.vk_data.main_data.fio,
        birthday: props.vk_data.main_data.birthday,
        family: props.vk_data.main_data.family,
        friends: props.vk_data.main_data.friends,
        photos: props.vk_data.main_data.photos,
        followers: props.vk_data.main_data.followers,
        videos: props.vk_data.main_data.videos,
        audio: props.vk_data.main_data.audio,
        gifts: props.vk_data.main_data.gifts,
    }
    let post_data_temp ={
        time: "",
        text: "",
        photo_url: "",
        likes_count: 0,
        comment_count: 12,
        report_count: 0,
    }
    let user_add_photos_count = props.vk_data.add_photos_count;
    let user_temp_photos = props.vk_data.add_photos
    const SetUserData = () => {
        props.changeUserDataAC(user_temp_data)
    }
    const set_add_photos_count = (count) => {
        let temp_count = Number(count)
            user_add_photos_count = temp_count
            if (temp_count > 4) {
                alert("Максимальное число - 4")
            } else {
                let add_photos_temp = []
                for(let i =1; i <= temp_count;i++){
                    add_photos_temp.push({id:i,url:"https://s.starladder.com/uploads/user_logo/7/2/a/1/meta_tag_0e770e377010c70b7c7418dd394cbf2f.png"})
                }
                props.changeAddPhotosAC(add_photos_temp)
                props.changeAddPhotosCountAC(user_add_photos_count)
            }   
    }
    const set_add_photos = (photo_id,photo_url)=>{
        user_temp_photos[photo_id-1].url = photo_url
        props.changeAddPhotosAC(user_temp_photos)
    }
    const set_post_data = ()=>{
        props.changePostDataAC(post_data_temp)
    }
    return (
        <>
            <h2>Настройка страницы Vk</h2>
            <div className={s.VkSetting}>
                <div className={s.setting}>
                    <h3>1.Главная информация</h3>
                    <div className={s.setting_item}>
                        <p>ФИО</p>
                        <input 
                        type="text" placeholder={props.vk_data.main_data.fio}
                        onChange={(e) => user_temp_data.fio = e.currentTarget.value}
                         />
                    </div>
                    <div className={s.setting_item}>
                        <p>Дата рождения</p>
                        <input 
                        type="text" placeholder={props.vk_data.main_data.birthday}
                        onChange={(e) => user_temp_data.birthday = e.currentTarget.value} />
                    </div>
                    <div className={s.setting_item}>
                        <p>Семейное положение</p>
                        <input type="text" placeholder={props.vk_data.main_data.family}
                        onChange={(e) => user_temp_data.family = e.currentTarget.value} />
                    </div>
                    <div className={s.setting_item}>
                        <p>Кол-во Фотографий</p>
                        <input type="number" placeholder={props.vk_data.main_data.photos}
                        onChange={(e) => user_temp_data.photos = e.currentTarget.value} />
                    </div>
                    <div className={s.setting_item}>
                        <p>Кол-во Друзей</p>
                        <input type="number" placeholder={props.vk_data.main_data.friends}
                            onChange={(e) => user_temp_data.friends = e.currentTarget.value} />
                    </div>
                    <div className={s.setting_item}>
                        <p>Кол-во Подписчиков</p>
                        <input type="number" placeholder={props.vk_data.main_data.followers}
                        onChange={(e) => user_temp_data.followers = e.currentTarget.value} />
                    </div>
                    <div className={s.setting_item}>
                        <p>Кол-во Видеозаписей</p>
                        <input type="number" placeholder={props.vk_data.main_data.videos}
                        onChange={(e) => user_temp_data.videos = e.currentTarget.value} />
                    </div>
                    <div className={s.setting_item}>
                        <p>Кол-во Аудиозаписей</p>
                        <input type="number" placeholder={props.vk_data.main_data.audio}
                        onChange={(e) => user_temp_data.audio = e.currentTarget.value} />
                    </div>
                    <div className={s.setting_item}>
                        <p>Кол-во Подарков</p>
                        <input type="number" placeholder={props.vk_data.main_data.gifts}
                        onChange={(e) => user_temp_data.gifts = e.currentTarget.value} />
                    </div>
                    <span className={s.save_data} onClick={SetUserData}>Сохранить Главную Информацию</span>
                    <h3>2.Фотографии</h3>
                    <div className={s.setting_item}>
                        <p>Главная Фотография(URL)</p>
                        <input type="text" 
                        placeholder="https://" 
                        onChange={(e) => props.changeMainPhotoAC(e.currentTarget.value)} />
                    </div>
                    <div className={s.setting_item}>
                        <p>Ко-во фото под профилем</p>
                        <input type="number"
                            placeholder="Если нет, оставить пустым"
                            onChange={(e) => set_add_photos_count(e.currentTarget.value)} />
                    </div>
                    {props.vk_data.add_photos_count > 0
                        ? props.vk_data.add_photos.map((i) => {  
                            return (
                                <div className={s.setting_item} key={Math.random()*3}>
                                    <p>Фото №{i.id}</p>
                                    <input type="text" 
                                    onChange={(e)=> set_add_photos(i.id, e.currentTarget.value)}
                                    placeholder="https://"/>
                                </div>
                            )
                        })
                        : null
                    }
                    <h3>3.Крайний пост</h3>
                    <div className={s.setting_item}>
                        <p>Время публикации</p>
                        <input type="text" onBlur={(e)=>post_data_temp.time = e.currentTarget.value}/>
                    </div>
                    <div className={s.setting_item}>
                        <p>Текст</p>
                       <input type="text"onBlur={(e)=>post_data_temp.text = e.currentTarget.value}/>
                    </div>
                    <div className={s.setting_item}>
                        <p>Фотография(URL)</p>
                        <input type="text" 
                        placeholder="если нет, оставить пустым"
                        onBlur={(e)=>post_data_temp.photo_url = e.currentTarget.value}/>
                    </div>
                    <div className={s.setting_item}>
                        <p>Кол-во лайков</p>
                        <input type="number" onBlur={(e)=>post_data_temp.likes_count = e.currentTarget.value}/>
                    </div>
                    <div className={s.setting_item}>
                        <p>Кол-во комментов</p>
                        <input type="number" onBlur={(e)=>post_data_temp.comment_count = e.currentTarget.value}/>
                    </div>
                    <div className={s.setting_item}>
                        <p>Кол-во репостов</p>
                        <input type="number" onBlur={(e)=>post_data_temp.report_count = e.currentTarget.value}/>
                    </div>
                    <span className={s.save_data} onClick={set_post_data}>Сохранить пост</span>
                </div>
                <div className={s.result}>
                    <div className={s.main_result_block}>
                        <img src={props.vk_data.main_photo_url} alt="main_photo" />
                        <div>
                            <p>{props.vk_data.main_data.fio}</p>
                            <p>{props.vk_data.main_data.birthday}</p>
                        </div>
                    </div>
                    <p>Семейное положение: {props.vk_data.main_data.family}</p>
                    <p>Количество фотографий: {props.vk_data.main_data.photos}</p>
                    <p>Количество Друзей: {props.vk_data.main_data.friends}</p>
                    <p>Количество Подписчиков: {props.vk_data.main_data.followers}</p>
                    <p>Количество Видеозаписей: {props.vk_data.main_data.videos}</p>
                    <p>Количество Аудиозаписей: {props.vk_data.main_data.audio}</p>
                    <p>Количество Подарков: {props.vk_data.main_data.gifts}</p>
                    <div className={s.photos_block}>
                        {props.vk_data.add_photos_count > 0
                            ? props.vk_data.add_photos.map((i) => {
                                return (
                                    <img src={i.url} key={Math.random() * 3} alt="addit_photo" />
                                )
                            })
                            : <p>Фото нет</p>
                        }
                    </div>
                    <div className={s.post_data}>
                        <span className={s.author}>{props.vk_data.main_data.fio}</span>
                        <span className={s.date}>{props.vk_data.last_post_data.time}</span>
                        <span className={s.text}>{props.vk_data.last_post_data.text}</span>
                        {props.vk_data.last_post_data.photo_url.length >0
                            ? <img src={props.vk_data.last_post_data.photo_url} alt="photo_url"/>
                            :null
                        }
                        <div className={s.post_assets}>
                            <span><i className="fa fa-heart"></i>{props.vk_data.last_post_data.likes_count}</span>
                            <span><i className="fa fa-comment"></i>{props.vk_data.last_post_data.likes_count}</span>
                            <span><i className="fa fa-reply"></i>{props.vk_data.last_post_data.likes_count}</span>
                        </div>
                    </div>
                    <NavLink to={'/VkLogin'} className={s.save_data}>Перейти на страницу</NavLink>
                </div>
            </div>
        </>
    )
}
export default VkSetting;