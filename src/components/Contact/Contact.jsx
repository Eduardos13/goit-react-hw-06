import React from 'react';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsSlice';

const Contact = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.number}</p>
      <button onClick={() => dispatch(deleteContact(item.id))}>Delete</button>
    </div>
  );
};

export default Contact;
