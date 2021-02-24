import { combineReducers } from 'redux';



const selectedComicReducer = (selectedComic = {}, action) => {
    switch(action.type){
    case 'SELECTED_COMIC' :
        const {img,title,alt,num,error} = action.payload;
        if(error) {
            return {error}
        }
        return {img,title,alt,num} 
    case 'RESET' :
        return {}
    default:
        return selectedComic;
    }   
}


export default combineReducers({
    selectedComic: selectedComicReducer
})