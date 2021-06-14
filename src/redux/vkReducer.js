const CHANGEUSERDATA = "CHANGEUSERDATA";
const CHANGEMAINPHOTO = "CHANGEMAINPHOTO";
const CHANGEADDPHOTOS = "CHANGEADDPHOTOS";
const CHANGEADDPHOTOSCOUNT = "CHANGEADDPHOTOSCOUNT";
const CHANGEPOSTDATA = "CHANGEPOSTDATA";

const initialState = {
    main_data:{
        fio: "Leo Does",
        birthday: "11.11.2011",
        family: "В активном поиске",
        friends: "1",
        photos: "1",
        followers: "1",
        videos: "1",
        audio: "1",
        gifts: "1",
    },
    main_photo_url: "https://s.starladder.com/uploads/user_logo/7/2/a/1/meta_tag_0e770e377010c70b7c7418dd394cbf2f.png ",
    add_photos_count: 0,
    add_photos: [],
    last_post_data:{
        time:"13 авг 2012",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, aspernatur velit. Porro quasi expedita repellat sed deserunt fugit aliquid rem.",
        photo_url:"",
        likes_count:154,
        comment_count:4,
        report_count:2,
    },
    news_data:{}
}

const vkReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGEUSERDATA: {
            return {...state, main_data: action.user_data}
        }
        case CHANGEMAINPHOTO:{
            return{
                ...state, main_photo_url: action.main_photo_url
            }
        }
        case CHANGEADDPHOTOS: {
            return {...state, add_photos: action.add_photos}
        }
        case CHANGEADDPHOTOSCOUNT:{
            return{...state, add_photos_count: action.add_photos_count}
        }
        case CHANGEPOSTDATA:{
            return{...state, last_post_data: action.post_data}
        }
        default: {return state}
    }
}

export const changeUserDataAC = (user_data) => ({type: CHANGEUSERDATA,user_data})
export const changeMainPhotoAC = (main_photo_url)=>({type:CHANGEMAINPHOTO, main_photo_url})
export const changeAddPhotosAC = (add_photos) => ({type: CHANGEADDPHOTOS,add_photos})
export const changeAddPhotosCountAC = (add_photos_count)=>(
    {type:CHANGEADDPHOTOSCOUNT, add_photos_count})
export const changePostDataAC = (post_data)=>({type:CHANGEPOSTDATA,post_data})

export default vkReducer