import React, { useEffect, useState } from 'react'
import AddContact from './AddContact';
import ContactList from './ContactList';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
    const LOCAL_STORAGE_KEY = "contactlist"

    const [contactlist, setContactlist] = useState([]);

    useEffect(() => {
        const storedContact = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedContact) {
            setContactlist(JSON.parse(storedContact));
        }

    }, [])

    const removeContactHandler = (contact) => {
        const updateContactList = contactlist.filter((existingContact) => {
            return existingContact !== contact;
        })
        setContactlist(updateContactList);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactlist));
    }
    const addContactHandler = (newContact) => {
        const updateContactList = [...contactlist, newContact]
        setContactlist(updateContactList);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactlist));

    }

    return (
        <div className='container'>
            <Header userName="omkar" />
            <Routes>
                <Route exact path='/addcontact' element={<AddContact addContactHandler={addContactHandler} />} />
                <Route exact path='/contactlist' element={<ContactList removeContactHandler={removeContactHandler} contactlist={contactlist} />} />
            </Routes>
        </div>
    )
}

export default Home