export const getFilterContacts = (filter, contacts) => { 
    if (!filter) {
        return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
};


  