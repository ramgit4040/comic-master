
export const selectedComicActionCreator = (comicID) => {
    const url = comicID ? `/${comicID}/info.0.json` : `/info.0.json`;
    return async (dispatch) => {
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(response.statusText)
        } 
        const data = await response.json();
        return dispatch({ type : 'SELECTED_COMIC',payload: data})
    }
    catch(e) {
        const error = {error : e.message}
        return dispatch({ type : 'SELECTED_COMIC',payload: error})
    }
   
    }
}

 export const RESET = () => {
     return {
         type : 'RESET'
     }
 }