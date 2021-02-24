import React from 'react';
import {connect} from 'react-redux';

const DisplayComicData = (props) => {

    if(props.selectedComicData.error) {
        return <h3>Something went wrong OR Id not found. </h3>
    }
    return (
        <section>
            <h2>{props.selectedComicData.title}</h2>
            <img
            src = {props.selectedComicData.img} 
            alt = {props.selectedComicData.alt}
            title = {props.selectedComicData.alt}
            onClick={event =>  window.location.href=`https://xkcd.com/${props.selectedComicData.num}`}
            />    
        </section>
    )
}

const mapStateToProps = (state) => {
    return {selectedComicData : state.selectedComic}
}

export default connect(mapStateToProps)(DisplayComicData);