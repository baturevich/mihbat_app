import React from 'react'
import s from './VkSidebar.module.scss'

const VkSidebar = () => {
    return (
        <div className={s.sidebar}>
            <ul>
                <li>
                    <div>
                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M5.84 15.63a6.97 6.97 0 008.32 0 8.2 8.2 0 00-8.32 0zM4.7 14.57a7 7 0 1110.6 0 9.7 9.7 0 00-10.6 0zM10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm-1.5 7a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm1.5-3a3 3 0 100 6 3 3 0 000-6z" fill="currentColor" fillRule="evenodd"></path></svg>
                    </div>
                    Моя страница
                </li>
                <li>
                    <div>
                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="newsfeed_outline_20__Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="newsfeed_outline_20__Icons-20/newsfeed_outline_20"><g id="newsfeed_outline_20__newsfeed_outline_20"><path opacity=".04" d="M0 0h20v20H0z"></path><path d="M13.08 2c1.44 0 2.14.13 2.86.52a3.7 3.7 0 011.54 1.54c.39.72.52 1.42.52 2.86v6.16c0 1.44-.13 2.14-.52 2.86a3.7 3.7 0 01-1.54 1.54c-.72.39-1.42.52-2.86.52H6.92c-1.44 0-2.14-.13-2.86-.52a3.7 3.7 0 01-1.54-1.54c-.39-.72-.52-1.42-.52-2.86V6.92c0-1.44.13-2.14.52-2.86a3.7 3.7 0 011.54-1.54C4.78 2.13 5.48 2 6.92 2h6.16zm3.42 6h-13v5.08c0 1.21.09 1.68.35 2.15.2.4.52.71.92.92.47.26.94.35 2.15.35h6.16c1.21 0 1.68-.09 2.15-.35.4-.2.71-.52.92-.92.26-.47.35-.94.35-2.15V8zm-3.42-4.5H6.92c-1.21 0-1.68.09-2.15.35-.4.2-.71.52-.92.92-.23.42-.33.82-.35 1.73h13a3.48 3.48 0 00-.35-1.73 2.2 2.2 0 00-.92-.92c-.47-.26-.94-.35-2.15-.35z" id="newsfeed_outline_20__Icon-Color" fill="currentColor" fill-rule="nonzero"></path></g></g></g></svg>                    </div>
                    Новости
                </li>
                <li>
                    <div>
                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="message_outline_20__Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="message_outline_20__message_outline_20"><path id="message_outline_20__Shape" opacity=".4" d="M0 0h20v20H0z"></path><path d="M6.83 15.75c.2-.23.53-.31.82-.2.81.3 1.7.45 2.6.45 3.77 0 6.75-2.7 6.75-6s-2.98-6-6.75-6S3.5 6.7 3.5 10c0 1.21.4 2.37 1.14 3.35.1.14.16.31.15.49-.04.76-.4 1.78-1.08 3.13 1.48-.11 2.5-.53 3.12-1.22zM3.24 18.5a1.2 1.2 0 01-1.1-1.77A10.77 10.77 0 003.26 14 7 7 0 012 10c0-4.17 3.68-7.5 8.25-7.5S18.5 5.83 18.5 10s-3.68 7.5-8.25 7.5c-.92 0-1.81-.13-2.66-.4-1 .89-2.46 1.34-4.35 1.4z" id="message_outline_20__Icon-Color" fill="currentColor" fill-rule="nonzero"></path></g></g></svg>                    </div>
                    Мессенджер
                </li>
                <li>
                    <div>
                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><g clip-rule="evenodd" fill-rule="evenodd"><path d="M6.25 3.5a3 3 0 100 6 3 3 0 000-6zm-1.5 3a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM2.69 11.57c.96-.55 2.22-.82 3.56-.82s2.6.27 3.56.82c.98.56 1.69 1.47 1.69 2.68 0 .7-.28 1.3-.78 1.71-.48.39-1.1.54-1.72.54H3.5c-.61 0-1.24-.15-1.72-.54-.5-.4-.78-1-.78-1.71 0-1.21.71-2.12 1.69-2.68zm.75 1.3c-.65.37-.94.84-.94 1.38 0 .3.1.44.22.54.14.11.4.21.78.21H9c.39 0 .64-.1.78-.21.12-.1.22-.25.22-.54 0-.54-.29-1-.94-1.38-.66-.39-1.65-.62-2.81-.62s-2.15.23-2.81.62zM13.75 3.5a3 3 0 100 6 3 3 0 000-6zm-1.5 3a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"></path></g><path d="M13.75 12.25c-.23 0-.45.01-.68.03a.75.75 0 11-.14-1.49c.27-.03.54-.04.82-.04 1.34 0 2.6.27 3.56.82.98.56 1.69 1.47 1.69 2.68 0 .7-.28 1.3-.78 1.71-.48.39-1.1.54-1.72.54h-3a.75.75 0 010-1.5h3c.39 0 .64-.1.78-.21.12-.1.22-.25.22-.54 0-.54-.29-1-.94-1.38a5.77 5.77 0 00-2.81-.62z"></path></g></svg>
                    </div>
                    Друзья
                </li>
                <li>
                    <div>
                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M10 7.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM7.25 6.5a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0zm-.5 7.25c0-.42.23-.83.8-1.17A4.81 4.81 0 0110 12c1.03 0 1.88.23 2.45.58.57.34.8.75.8 1.17 0 .3-.1.44-.22.54-.14.11-.4.21-.78.21h-4.5c-.39 0-.64-.1-.78-.21-.12-.1-.22-.25-.22-.54zM10 10.5c-1.22 0-2.37.27-3.23.8-.88.53-1.52 1.37-1.52 2.45 0 .7.28 1.3.78 1.71.48.39 1.1.54 1.72.54h4.5c.61 0 1.24-.15 1.72-.54.5-.4.78-1 .78-1.71 0-1.08-.64-1.92-1.52-2.45-.86-.53-2-.8-3.23-.8zm4-5.59c.06-.4.44-.7.85-.64a2.5 2.5 0 01-.35 4.98.75.75 0 010-1.5 1 1 0 00.14-1.99.75.75 0 01-.63-.85zM15.76 10a.75.75 0 000 1.5c1.16 0 1.75.67 1.75 1.25 0 .22-.07.41-.19.55-.1.12-.24.2-.46.2a.75.75 0 000 1.5c1.43 0 2.15-1.21 2.15-2.25 0-1.71-1.6-2.75-3.25-2.75zM5 10.75a.75.75 0 00-.75-.75C2.61 10 1 11.04 1 12.75 1 13.79 1.72 15 3.15 15a.75.75 0 000-1.5.57.57 0 01-.47-.2.86.86 0 01-.18-.55c0-.58.6-1.25 1.75-1.25.41 0 .75-.34.75-.75zm.14-6.47a.75.75 0 01.22 1.48 1 1 0 00.14 1.99.75.75 0 110 1.5 2.5 2.5 0 01-.36-4.97z" fill="currentColor" fill-rule="evenodd"></path></svg>                    
                    </div>
                    Сообщества
                </li>
                <li>
                    <div>
                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M6.84 16.44c.76.06 1.74.06 3.16.06 1.42 0 2.4 0 3.16-.06a3.75 3.75 0 001.43-.32 3.5 3.5 0 001.53-1.53c.15-.29.26-.69.32-1.43l.03-.63-1.3-1.3c-.3-.3-.5-.5-.67-.64a.86.86 0 00-.27-.18.75.75 0 00-.46 0 .86.86 0 00-.27.18c-.16.13-.36.33-.67.64l-2.3 2.3a.75.75 0 01-1.06 0l-.3-.3c-.3-.3-.5-.5-.67-.64a.86.86 0 00-.27-.18.75.75 0 00-.46 0 .86.86 0 00-.27.18c-.16.13-.36.33-.67.64L4.56 15.5c.25.24.53.45.85.6.29.16.69.27 1.43.33zm9.39-6.27l.27.27V10c0-1.42 0-2.4-.06-3.16a3.75 3.75 0 00-.32-1.43 3.5 3.5 0 00-1.53-1.53 3.75 3.75 0 00-1.43-.32A43.2 43.2 0 0010 3.5c-1.42 0-2.4 0-3.16.06-.74.06-1.14.17-1.43.32a3.5 3.5 0 00-1.53 1.53c-.15.29-.26.69-.32 1.43A43.2 43.2 0 003.5 10c0 1.42 0 2.4.06 3.16.04.47.1.8.17 1.05l2.04-2.04.02-.02c.28-.28.52-.52.74-.7.23-.2.47-.37.77-.47.46-.15.94-.15 1.4 0 .3.1.54.27.77.46.16.14.34.3.53.5l1.77-1.77.02-.02c.28-.28.52-.52.74-.7.23-.2.47-.37.77-.47.46-.15.94-.15 1.4 0 .3.1.54.27.77.46.22.19.46.43.74.7zM2.54 4.73C2 5.8 2 7.2 2 10c0 2.8 0 4.2.54 5.27a5 5 0 002.19 2.19C5.8 18 7.2 18 10 18c2.8 0 4.2 0 5.27-.54a5 5 0 002.19-2.19C18 14.2 18 12.8 18 10c0-2.8 0-4.2-.55-5.27a5 5 0 00-2.18-2.19C14.2 2 12.8 2 10 2c-2.8 0-4.2 0-5.27.54a5 5 0 00-2.19 2.19zM7.25 6a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill="currentColor" fill-rule="evenodd"></path></svg>                    
                    </div>
                    Фотографии
                </li>
                <li>
                    <div>
                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="music_outline_20__Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="music_outline_20__Icons-20/music_outline_20"><g id="music_outline_20__music_outline_20"><path d="M0 0h20v20H0z"></path><path d="M14.73 2.05a2.28 2.28 0 012.75 2.23v7.99c0 3.57-3.5 5.4-5.39 3.51-1.9-1.9-.06-5.38 3.52-5.38h.37V6.76L8 8.43v5.82c0 3.5-3.35 5.34-5.27 3.62l-.11-.1c-1.9-1.9-.06-5.4 3.51-5.4h.37V6.24c0-.64.05-1 .19-1.36l.05-.13c.17-.38.43-.7.76-.93.36-.26.7-.4 1.41-.54zM6.5 13.88h-.37c-2.32 0-3.34 1.94-2.45 2.82.88.89 2.82-.13 2.82-2.45v-.37zm9.48-1.98h-.37c-2.32 0-3.34 1.94-2.46 2.82.89.89 2.83-.13 2.83-2.45v-.37zm-.02-7.78a.78.78 0 00-.92-.6L9.06 4.77c-.4.09-.54.15-.68.25a.8.8 0 00-.27.33c-.08.18-.1.35-.1.88v.67l7.97-1.67v-.95-.08z" id="music_outline_20__Icon-Color" fill="currentColor" fill-rule="nonzero"></path></g></g></g></svg>                    
                    </div>
                    Музыка
                </li>
                <li>
                    <div>
                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12.06 1.5c.65 0 1.23 0 1.7.04.51.04 1.04.13 1.56.4a4 4 0 011.74 1.74c.27.52.36 1.05.4 1.56.04.47.04 1.05.04 1.7v6.12c0 .65 0 1.23-.04 1.7a4.07 4.07 0 01-.4 1.56 4 4 0 01-1.74 1.74c-.52.27-1.05.36-1.56.4-.47.04-1.05.04-1.7.04H7.94c-.65 0-1.23 0-1.7-.04a4.06 4.06 0 01-1.56-.4 4 4 0 01-1.74-1.74 4.06 4.06 0 01-.4-1.56c-.04-.47-.04-1.05-.04-1.7V6.94c0-.65 0-1.23.04-1.7.04-.51.13-1.04.4-1.56a4 4 0 011.74-1.74 4.06 4.06 0 011.56-.4c.47-.04 1.05-.04 1.7-.04zM4.27 4.37C4 4.9 4 5.6 4 7v6c0 1.4 0 2.1.27 2.63.24.48.62.86 1.1 1.1C5.9 17 6.6 17 8 17h4c1.4 0 2.1 0 2.63-.27a2.5 2.5 0 001.1-1.1C16 15.1 16 14.4 16 13V7c0-1.4 0-2.1-.27-2.63a2.5 2.5 0 00-1.1-1.1C14.1 3 13.4 3 12 3H8c-1.4 0-2.1 0-2.63.27a2.5 2.5 0 00-1.1 1.1zM6 14c0-.33 0-.49.06-.62a.65.65 0 01.32-.32c.13-.06.3-.06.62-.06s.49 0 .62.06c.14.06.26.18.32.32.06.13.06.3.06.62s0 .49-.06.62a.65.65 0 01-.32.32c-.13.06-.3.06-.62.06s-.49 0-.62-.06a.65.65 0 01-.32-.32C6 14.49 6 14.32 6 14zm.06-4.62C6 9.51 6 9.68 6 10c0 .33 0 .49.06.62.06.14.18.26.32.32.13.06.3.06.62.06s.49 0 .62-.06a.65.65 0 00.32-.32c.06-.13.06-.3.06-.62 0-.33 0-.49-.06-.62a.65.65 0 00-.32-.32C7.49 9 7.32 9 7 9s-.49 0-.62.06a.65.65 0 00-.32.32zM12 6c0-.33 0-.49.06-.62a.65.65 0 01.32-.32c.13-.06.3-.06.62-.06s.49 0 .62.06c.14.06.26.18.32.32.06.13.06.3.06.62s0 .49-.06.62a.65.65 0 01-.32.32c-.13.06-.3.06-.62.06s-.49 0-.62-.06a.65.65 0 01-.32-.32C12 6.49 12 6.32 12 6zm.06 7.38c-.06.13-.06.3-.06.62s0 .49.06.62c.06.14.18.26.32.32.13.06.3.06.62.06s.49 0 .62-.06a.65.65 0 00.32-.32c.06-.13.06-.3.06-.62s0-.49-.06-.62a.65.65 0 00-.32-.32c-.13-.06-.3-.06-.62-.06s-.49 0-.62.06a.65.65 0 00-.32.32zM12 10c0-.33 0-.49.06-.62a.65.65 0 01.32-.32c.13-.06.3-.06.62-.06s.49 0 .62.06c.14.06.26.18.32.32.06.13.06.3.06.62 0 .33 0 .49-.06.62a.65.65 0 01-.32.32c-.13.06-.3.06-.62.06s-.49 0-.62-.06a.65.65 0 01-.32-.32c-.06-.13-.06-.3-.06-.62zM6.06 5.38C6 5.51 6 5.68 6 6s0 .49.06.62c.06.14.18.26.32.32.13.06.3.06.62.06s.49 0 .62-.06a.65.65 0 00.32-.32C8 6.49 8 6.32 8 6s0-.49-.06-.62a.65.65 0 00-.32-.32C7.49 5 7.32 5 7 5s-.49 0-.62.06a.65.65 0 00-.32.32z" fill="currentColor" fill-rule="evenodd"></path></svg>                    
                    </div>
                    Видео
                </li>
                <li>
                    <div>
                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M10.76 3.3a.94.94 0 011.86.2l-.37 4.44c-.03.34.18.66.51.77h.02a2.8 2.8 0 01.46.22c.3.15.7.4 1.08.75a.75.75 0 001.02-1.1 6.49 6.49 0 00-1.55-1.06l.33-3.89a2.44 2.44 0 00-4.84-.53l-.1.65-.02-.06a2.46 2.46 0 00-4.78.98l.34 4.49a4.63 4.63 0 00-1.46 4.49c.55 2.7 3.18 5.08 7.23 4.85h.05a.75.75 0 00-.09-1.5h-.04c-3.37.2-5.3-1.73-5.67-3.65a3.12 3.12 0 011.18-3.23 2.95 2.95 0 012.39-.4c.57.21.83.7.82 1.19a1 1 0 01-.83 1c-.32.07-.49.09-.55.09a.75.75 0 000 1.5c.24 0 .56-.06.86-.12a2.5 2.5 0 002.02-2.44 2.7 2.7 0 00-2-2.68c-.3-.08-1.3-.3-2.47.09l-.29-3.8a.96.96 0 011.87-.38l.72 2.11v.02a5.6 5.6 0 00.25.56c.04.07.15.21.34.3.3.15.65.11.92-.08.17-.13.25-.3.28-.37a5.62 5.62 0 00.12-.6l.01-.02zM16.31 18l1.38-.8.04-.03c.22-.12.47-.26.66-.4.2-.15.56-.42.77-.9.25-.55.25-1.19 0-1.75a2.2 2.2 0 00-.77-.9l-.66-.4-.04-.02-1.38-.8-.04-.02c-.22-.13-.47-.27-.68-.37a2.2 2.2 0 00-1.16-.22c-.61.06-1.16.38-1.52.87-.3.42-.37.87-.39 1.12-.02.24-.02.52-.02.78V15.84c0 .26 0 .54.02.78s.09.7.4 1.11c.35.5.9.81 1.5.88.52.05.94-.12 1.17-.22.21-.1.46-.25.68-.37zm.63-3.9c.51.3.77.44.85.63.08.17.08.36 0 .53-.08.2-.34.34-.85.64l-1.38.8c-.51.3-.77.44-.98.42a.65.65 0 01-.46-.27C14 16.68 14 16.4 14 15.8V14.2c0-.59 0-.89.12-1.06.11-.15.28-.24.46-.26.21-.02.47.13.98.42z" fill="currentColor" fill-rule="evenodd"></path></svg>                    
                    </div>
                    Клипы
                </li>
                <li>
                    <div>
                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M11.5 4h-3c-2.32 0-4.25.43-5.58 1.76S1.02 9.15 1 12c0 .8.05 1.99.46 3 .2.5.5 1.01.98 1.4.48.39 1.09.61 1.81.61.8 0 1.37-.33 1.81-.77.31-.31.58-.72.8-1.07l.17-.24c.28-.42.55-.76.91-1 .35-.24.82-.42 1.56-.42h1c.74 0 1.21.18 1.56.42.36.24.63.58.91 1l.16.24c.23.35.5.76.8 1.07.45.44 1.02.77 1.82.77a2.8 2.8 0 001.81-.61c.47-.39.78-.9.98-1.4.4-1.01.47-2.2.46-3-.02-2.84-.6-4.9-1.92-6.23C15.75 4.43 13.82 4 11.5 4zm-1 8h-1c-1.01 0-1.79.26-2.4.68-.6.4-1 .94-1.31 1.4l-.23.34c-.21.32-.37.56-.57.76a.95.95 0 01-.74.32c-.4 0-.67-.12-.87-.28a1.9 1.9 0 01-.53-.79 6.82 6.82 0 01-.35-2.42c.02-2.71.57-4.28 1.48-5.19.91-.9 2.34-1.32 4.52-1.32h3c2.18 0 3.61.42 4.52 1.32.9.91 1.46 2.48 1.48 5.19 0 .75-.06 1.7-.35 2.42a1.9 1.9 0 01-.53.8c-.2.15-.47.27-.87.27a.95.95 0 01-.74-.32c-.2-.2-.36-.44-.57-.76l-.23-.34c-.3-.46-.7-1-1.3-1.4A4.13 4.13 0 0010.5 12zM7.25 7.5a.75.75 0 00-1.5 0v.75H5a.75.75 0 000 1.5h.75v.75a.75.75 0 001.5 0v-.75H8a.75.75 0 000-1.5h-.75zm5.25.75a.75.75 0 000 1.5h2a.75.75 0 000-1.5z" fill="currentColor" fill-rule="evenodd"></path></svg>                    
                    </div>
                    Игры
                    <span>1</span>
                </li>
                <hr/>
                <li>
                    <div>
                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M7.25 5.75a2.75 2.75 0 015.5 0V6h-5.5zM5.75 6v-.25a4.25 4.25 0 018.5 0V6c1.01.02 1.62.08 2.11.33a3 3 0 011.31 1.3c.33.65.33 1.49.33 3.17v.5c0 2.52 0 3.78-.49 4.74a4.5 4.5 0 01-1.97 1.97c-.96.49-2.22.49-4.74.49H9.2c-2.52 0-3.78 0-4.74-.49a4.5 4.5 0 01-1.97-1.97C2 15.08 2 13.82 2 11.3v-.5c0-1.68 0-2.52.33-3.16a3 3 0 011.3-1.31c.5-.25 1.1-.31 2.12-.33zm-.8 1.54c.43-.04.99-.04 1.85-.04h6.4c.86 0 1.42 0 1.85.04.4.03.56.09.63.12.28.15.51.38.66.66.03.07.1.22.12.63.04.43.04.99.04 1.85v.5c0 1.28 0 2.16-.06 2.83-.05.66-.15 1-.27 1.23a3 3 0 01-1.3 1.31c-.24.12-.58.22-1.24.27-.67.06-1.55.06-2.83.06H9.2c-1.28 0-2.16 0-2.83-.06-.66-.05-1-.15-1.23-.27a3 3 0 01-1.31-1.3 3.24 3.24 0 01-.27-1.24c-.06-.67-.06-1.55-.06-2.83v-.5c0-.86 0-1.42.04-1.85.03-.4.09-.56.12-.63.15-.28.38-.51.66-.66.07-.03.22-.1.63-.12zm.8 2.33a.87.87 0 111.75 0 .87.87 0 01-1.75 0zM13.38 9a.88.88 0 100 1.75.88.88 0 000-1.75z" fill="currentColor" fill-rule="evenodd"></path></svg>                    
                    </div>
                    Маркет
                </li>
                <li>
                    <div>
                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><clipPath id="favorite_outline_20__a"><path d="M0 0h20v20H0z"></path></clipPath><g clip-path="url(#favorite_outline_20__a)"><path clip-rule="evenodd" d="M10.83 3.08a.9.9 0 00-1.66 0L7.74 6.42a1 1 0 01-.77.6l-3.12.44a.9.9 0 00-.44 1.59l2.2 1.77a1 1 0 01.35.96l-.62 3.32a.9.9 0 001.46.86l2.56-2.15a1 1 0 011.28 0l2.56 2.15a.9.9 0 001.46-.86l-.62-3.32a1 1 0 01.35-.96l2.2-1.77a.9.9 0 00-.44-1.6l-3.12-.44a1 1 0 01-.77-.6zM7.79 2.5a2.4 2.4 0 014.42 0l1.31 3.08 2.84.4a2.4 2.4 0 011.17 4.24l-1.96 1.6.57 3.02a2.4 2.4 0 01-3.9 2.28L10 15.23 7.77 17.1a2.4 2.4 0 01-3.9-2.28l.56-3.03-1.96-1.59a2.4 2.4 0 011.17-4.24l2.84-.4z" fill="currentColor" fill-rule="evenodd"></path></g></svg>                    
                    </div>
                    Закладки
                </li>
                <li>
                    <div>
                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M17.2 6.78a2 2 0 01.24.58c.06.23.06.48.06.97v2.97c0 2.52 0 3.78-.49 4.74a4.5 4.5 0 01-1.97 1.97c-.96.49-2.22.49-4.74.49h-.6c-2.52 0-3.78 0-4.74-.49a4.5 4.5 0 01-1.97-1.97c-.49-.96-.49-2.22-.49-4.74V8.7c0-2.52 0-3.78.49-4.74a4.5 4.5 0 011.97-1.97c.96-.49 2.22-.49 4.74-.49h.97c.5 0 .74 0 .97.06.2.04.4.13.58.23.2.13.37.3.72.65l3.62 3.62c.35.35.52.52.65.72zM10.3 17h-.6c-1.28 0-2.16 0-2.83-.06-.66-.05-1-.15-1.23-.27a3 3 0 01-1.31-1.3 3.24 3.24 0 01-.27-1.24C4 13.46 4 12.58 4 11.3V8.7c0-1.28 0-2.16.06-2.83.05-.66.15-1 .27-1.23a3 3 0 011.3-1.31c.24-.12.58-.22 1.24-.27C7.54 3 8.42 3 9.7 3h.3v1.28c0 .67 0 1.23.04 1.67.03.47.12.88.31 1.28.32.6.81 1.1 1.42 1.42.4.2.81.28 1.28.31.44.04 1 .04 1.67.04H16v2.3c0 1.28 0 2.16-.06 2.83-.05.66-.15 1-.27 1.23a3 3 0 01-1.3 1.31c-.24.12-.58.22-1.24.27-.67.06-1.55.06-2.83.06zm5.57-9.5h-1.12c-.71 0-1.2 0-1.58-.03a1.88 1.88 0 01-.71-.16c-.33-.17-.6-.44-.77-.77a1.88 1.88 0 01-.16-.7 21.6 21.6 0 01-.03-1.59V3.13l.01.01.37.36 3.62 3.62.36.37.01.01z" fill="currentColor" fill-rule="evenodd"></path></svg>                    
                    </div>
                    Файлы
                </li>
            </ul>
        </div>
    )
}
export default VkSidebar;