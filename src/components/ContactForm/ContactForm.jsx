import React, { useState } from 'react';
import s from './ContactForm.module.css';
import { Field, Form, Formik } from 'formik';
import { CiCirclePlus } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = { name: '', number: '' };
  const onSubmit = (values, options) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    options.resetForm();
  };
  return (
    <div className={s.formWraper}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={s.form}>
          <Field
            className={s.input}
            name="name"
            placeholder="Enter contact's name"
          />
          <Field
            className={s.input}
            name="number"
            placeholder="Enter contact's phone number"
          />
          <button type="submit" className={s.addBtn}>
            <CiCirclePlus />
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
