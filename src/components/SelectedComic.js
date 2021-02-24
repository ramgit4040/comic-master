import React, {useState,useEffect} from 'react';
import { connect } from 'react-redux';
import { selectedComicActionCreator,RESET } from '../actions';
import DisplayComicData from './DisplayComicData';
import '../css/SelectedComic.css'


const SelectComic = (props) => {
    const [selectedID, setSelectedId] = useState('');

    useEffect(() => {
        return () => {
          props.RESET()
        };
      }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.selectedComicActionCreator(selectedID)
    }
    return (
    <>
    <h2>Select Comic Page</h2>
    <form onSubmit = {handleSubmit} className = "form-data">
        <label htmlFor = "comic">Comic Id</label>
        <input 
            type = "number"
            id = "comic"
            placeholder = "Please enter comic id"
            value = {selectedID}
            onChange = {(e) => setSelectedId(e.target.value)}
        />
        <button type = "submit" disabled = {!selectedID}>Submit</button>
    </form>
    <DisplayComicData/>
    </>
    )
}



export default connect(null , {selectedComicActionCreator,RESET })(SelectComic);