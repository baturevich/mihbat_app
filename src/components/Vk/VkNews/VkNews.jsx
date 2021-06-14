import React from 'react'
import VkHeader from '../VkHeader.jsx/VkHeader'
import VkSidebar from '../VkSidebar/VkSidebar'
import s from './VkNews.module.scss'
import news_categ from '../../../img/news_categ.png'
const VkNews = (props) => {
    return (
        <div className={s.wrapper}>
            <VkHeader />
            <div className={s.content}>
                <div className={s.container}>
                    <VkSidebar />
                    <div className={s.news_content}>
                        <div>
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
                            <div className={s.news}>
                                <div className={s.news_info}>
                                    <img src="https://sun1-95.userapi.com/s/v1/if1/M7gM2GGJJ4Iek-yB7-IHNHyCHRVyivZ-gYZqoMpnIOz98kB7G7xHx0hJUyYSJWiGv4kulw.jpg?size=100x0&quality=96&crop=35,66,743,743&ava=1" alt="news_img" />
                                    <div>
                                        <p>Smart Business</p>
                                        <span>cегодня в 19:06</span>
                                    </div>
                                    <i className="fa fa-angle-down"></i>
                                </div>
                                <div className={s.news_body}>
                                    <p>Умение вести переговоры – универсальное искусство, которым, как ни странно, большинство из нас совершенно не владеет. Особенно это касается выходцев тех стран, в культуре которых торговаться не особенно принято. Ниже вы найдёте несколько советов, обобщающих опыт лучших мастеров в «искусстве торговаться»:</p>
                                    <img src="https://sun9-45.userapi.com/impg/Y0Kp_broMRbumYWCFoUWhDP6CeKL8bh91cIsvQ/JTDWF3bysk8.jpg?size=1280x640&quality=96&sign=99e07cbd3fa4506ddcc5b44dbded0005&type=album" alt="" />
                                </div>
                                <hr />
                                <div className={s.news_footer}>
                                    <p><span className={s.likes_count}></span>15</p>
                                    <p><span className={s.comment_count}></span>56</p>
                                    <p><span className={s.reply_count}></span>30</p>
                                    <p className={s.views_count}><span></span>2.5K</p>
                                </div>
                            </div>
                        </div>
                        <div className={s.news_categ}>
                            <img src={news_categ} alt="news_categ_img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VkNews;