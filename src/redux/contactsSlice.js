import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";


export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
     
    reducers: {
        addContact(state, action) {
            state.find(
                contact => 
                    action.payload.name.toLowerCase() === contact.name.toLowerCase() ?
                        alert(`${action.payload.name} is already in contacts.`)
                        : state.push({
                            id: nanoid(),
                            name: action.payload.name,
                            number: action.payload.number,
                        })        
               )
        },
        deleteContact(state, action) {
          return state.filter(contact => action.payload.id !== contact.id )
        },
        
                  
    }
})
const persistConfig = {
    key: 'contacts',
    storage
};

export const persistContactReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, deleteContact } = contactsSlice.actions;
