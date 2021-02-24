import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { selectedComicActionCreator,RESET } from '../actions';
import DisplayComicData from './DisplayComicData';


const CurrentComic = (props) => {

    useEffect(() => {
        props.selectedComicActionCreator()
        return () => {
          props.RESET()
        };
      }, []);

    return (
    <>
        <h2>Current Comic Page</h2>
        <DisplayComicData />
    </>
    )
}

export default connect(null , {selectedComicActionCreator,RESET })(CurrentComic);