//import PropTypes from 'prop-types';
import React from 'react';
import css from '../ContactFilter/ContactFilter.module.css'
import { useDispatch, useSelector } from "react-redux"; 
import {changeFilter } from 'redux/filterSlice'

const ContactFilter = () => {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();
    const changeFilters = e => {
        dispatch(changeFilter(e.currentTarget.value))
    }
    return (
        <label className={css.contactFilterLabel}>Find contact by name
            <input className={css.contactFilterInput} type="text" value={filter} onChange={changeFilters}></input>
        </label>
    )
};
   

export default ContactFilter;

