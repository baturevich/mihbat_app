import React from 'react'
import VkHeader from '../VkHeader.jsx/VkHeader'
import VkSidebar from '../VkSidebar/VkSidebar'
import s from './VkProfile.module.scss'

class VkProfile extends React.Component {
    main_img_style = {
        backgroundImage: 'url(https://sun1-92.userapi.com/s/v1/ig2/a2cehW-54Atln7jPPirTq3YNZPVOi-08HvIa4JVGRgaYVXr1fTC7rA-HdOuHKeKYEBQ_2UEyVhWeaoe3YgLTljFu.jpg?size=400x0&quality=96&crop=0,723,1095,1095&ava=1)'
    }
    render() {
        return (
            <div className={s.wrapper}>
                <VkHeader />
                <div className={s.content}>
                    <div className={s.container}>
                        <VkSidebar />
                        <div className={s.profile_content}>
                            <div className={s.left_content}>
                                <div className={s.user_assets}>
                                    <div className={s.main_img} style={this.main_img_style}></div>
                                </div>
                                <div className={s.user_edit}>Редактировать</div>
                                <div className={s.user_addit}><svg fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.1 19a.9.9 0 01.9-.9h18a.9.9 0 110 1.8H3a.9.9 0 01-.9-.9zM16.5 5.9a.9.9 0 110-1.8H21a.9.9 0 01.9.9v4.5a.9.9 0 11-1.8 0V7.17l-5.96 5.97a.9.9 0 01-1.28 0L9.5 9.77l-5.86 5.87a.9.9 0 11-1.28-1.28l6.5-6.5a.9.9 0 011.28 0l3.36 3.37 5.33-5.33z" clip-rule="evenodd" fill="currentColor" fill-rule="evenodd"></path></svg>Статистика страницы</div>
                                <div className={s.user_addit}><svg fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path clip-rule="evenodd" d="M12 7.1a.9.9 0 01.9.9v3.73l2.24 2.23a.9.9 0 11-1.28 1.28l-2.5-2.5a.9.9 0 01-.26-.64V8a.9.9 0 01.9-.9z" fill-rule="evenodd"></path><path d="M19 5a9.87 9.87 0 00-7-2.9 9.87 9.87 0 00-7.1 3V3a.9.9 0 00-1.8 0v4a.9.9 0 00.9.9h4a.9.9 0 000-1.8H6.45A8.07 8.07 0 0112 3.9c2.24 0 4.26.9 5.73 2.37A8.07 8.07 0 0120.1 12c0 2.24-.9 4.26-2.37 5.73A8.07 8.07 0 0112 20.1a8.06 8.06 0 01-5.2-1.9.9.9 0 00-1.16 1.39A9.86 9.86 0 0012 21.9a9.87 9.87 0 009.9-9.9c0-2.73-1.1-5.21-2.9-7z"></path></g></svg>Воспоминания</div>
                                <div className={s.user_addit}><svg fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 3.1a4.5 4.5 0 012.35.44 3.17 3.17 0 011.31 1.31c.3.57.42 1.11.44 2.1V12a.9.9 0 01-1.8.11V8.9H3.9v5.9c0 .87.06 1.18.23 1.5.13.25.32.44.57.57.3.16.58.22 1.31.23H18.83l-1.47-1.46a.9.9 0 01-.08-1.18l.08-.1a.9.9 0 011.18-.08l.1.08 3 3a.9.9 0 01.08 1.18l-.08.1-3 3a.9.9 0 01-1.36-1.18l.08-.1 1.47-1.46H6.2c-1.07 0-1.65-.1-2.21-.37l-.14-.07a3.17 3.17 0 01-1.32-1.31 4.2 4.2 0 01-.44-2.1V7.21c0-1.16.11-1.74.44-2.35a3.17 3.17 0 011.31-1.32c.57-.3 1.11-.42 2.1-.44h.25zm0 1.8H6.2c-.88 0-1.18.06-1.5.23-.25.13-.44.32-.57.57-.16.3-.22.58-.23 1.31v.09h16.2v-.09c-.01-.73-.07-1.02-.23-1.3a1.37 1.37 0 00-.57-.58c-.3-.16-.58-.22-1.31-.23z" fill="currentColor"></path></svg>Денежные переводы</div>
                            </div>
                            <div className={s.right_content}>
                                <div className={s.main_info}>
                                    <div className={s.main_info_top}>
                                        <div className={s.user_name}>
                                            <p>Кирилл Батуревич</p>
                                            <span>online</span>
                                        </div>
                                        <div className={s.user_status}>
                                            установить статус
                                        </div>
                                        <hr />
                                    </div>
                                    <div className={s.main_info_list}>
                                        <ul>
                                            <li><p>Родной город:</p><span>Москва</span></li>
                                            <li><p>Языки:</p><span>Русский</span></li>
                                        </ul>
                                    </div>
                                    <div className={s.show_more}>Показать подробную информацию</div>
                                    <hr />
                                    <div className={s.users_addit_info}>
                                        <ul>
                                            <li>
                                                <p>55</p>
                                                <span>друзей</span>
                                            </li>
                                            <li>
                                                <p>133</p>
                                                <span>подписчика</span>
                                            </li>
                                            <li>
                                                <p>16</p>
                                                <span>подарков</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={s.photos_block}>
                                    <div className={s.no_photo}>
                                        <span></span>
                                        Добавить фотографии</div>
                                </div>
                                <div className={s.news_assets}>
                                    <img src="https://s.starladder.com/uploads/user_logo/7/2/a/1/meta_tag_0e770e377010c70b7c7418dd394cbf2f.png " alt="user_photo" />
                                    <p>Что у вас нового?</p>
                                    <div className={s.ico + " " + s.photo_ico}></div>
                                    <div className={s.ico + " " + s.video_ico}></div>
                                    <div className={s.ico + " " + s.music_ico}></div>
                                    <div className={s.ico + " " + s.text_ico}></div>
                                    <div className={s.ico + " " + s.idea_ico}></div>
                                    <div className={s.ico + " " + s.secure_ico}></div>
                                </div>
                                <div className={s.news_feed}>
                                    <div className={s.news_feed_info}>
                                        <p className={s.all_news}>Нет записей</p>
                                    </div>
                                    <div className={s.no_news}>
                                        <span></span>
                                        <p>На стене пока нет ни одной записи</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VkProfile;