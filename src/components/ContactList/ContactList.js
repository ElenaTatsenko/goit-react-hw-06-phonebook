//import PropTypes from 'prop-types';
import React from 'react';
//import { nanoid } from "nanoid";
import css from '../ContactList/ContactList.module.css'
import { useDispatch, useSelector } from "react-redux"; 
import { deleteContact } from '../../redux/contactsSlice';
//import { getFilterContacts } from 'utils/getFilterContacts';



const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);
    console.log(contacts)

    const onDeleteContact = id => dispatch(deleteContact(id));

    const getFilterContacts = () => {
        if (!filter) {
            return contacts;
        }
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
        
    };

    return (
        <ul className={css.contactList}>{getFilterContacts.map(({ name, number, id }) => {
            return (<li key={id} className={css.contactListItem}>
                <p className={css.contactListEl}><span className={css.contactListSpan}>Name:</span> {name}</p>
                <p className={css.contactListEl}> <span className={css.contactListSpan}>Number:</span> {number}</p>
                <button className={css.contactListDelBtn} onClick={() => onDeleteContact(id)} type="button">Remove</button>
            </li>)
        }
            
        
        )}
        </ul>);
};
        

    
export default ContactList;

//ContactList.propTypes = {
  //  onDeleteContact: PropTypes.func.isRequired,
    //contacts: PropTypes.arrayOf(PropTypes.shape({
     //   id: PropTypes.string.isRequired,
      //  name: PropTypes.string.isRequired,
     //   number: PropTypes.string.isRequired,
   // }))
//}