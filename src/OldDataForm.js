import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './FormStyles.css';
import * as Yup from 'yup';

const initialValues = {
    id: Math.floor(Math.random() * 100) + 1,
    name: '',
    username: '',
    email: '',
    address: {
        street: '',
        suite: '',
        city: '',
        zip: '',
        geo: {
            lat: '',
            lng: ''
        }
    },
    phone: '',
    website: '',
    company: {
        name: '',
        catchPhrase: '',
        bs: ''
    }
};
const onSubmit = (values, DataTransfer) => {
    DataTransfer(values);
    console.log(values);
};
const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    phone: Yup.number().required('Required')
});

function OldDataForm(props) {
    return (props.formTrigger) && (
        <Formik
            initialValues={initialValues}
            onSubmit={(e) => onSubmit(e, props.DataTransfer)}
            validationSchema={validationSchema}
        >
            <div setformtrigger={props.formTrigger}>
                <div className='formpopup'>
                    <div className='formoverlay'></div>
                    <div className='formcontent'>
                        <div className='form-div'>
                            <h2>User Details Form</h2>
                            <Form>
                                <div className='form-field'>
                                    <label htmlFor='name'>Enter a name : </label>
                                    <Field name='name' type='text' id='name'
                                    />
                                    <ErrorMessage name='name' />
                                </div>
                                <div className='form-field'>
                                    <label htmlFor='username'>Enter a username : </label>
                                    <Field name='username' type='text' id='username'
                                    />
                                </div>
                                <div className='form-field'>

                                    <label htmlFor='email'>Enter a email : </label>
                                    <Field name='email' type='text' id='email'
                                    />
                                    <ErrorMessage name='email' />
                                </div>
                                <div className='form-field'>
                                    <label htmlFor='phone'>Enter a phone : </label>
                                    <Field name='phone' type='text' id='phone'
                                    />
                                    <ErrorMessage name='phone' />
                                </div>
                                <div className='form-field'>
                                    <label htmlFor='website'>Enter a website : </label>
                                    <Field name='website' type='text' id='website'
                                    />
                                </div>
                                <h3>company</h3>
                                <div className='form-field'>
                                    <label htmlFor='companyname'>Enter a companyName : </label>
                                    <Field name='company.name' type='text' id='companyname'
                                    />
                                </div>
                                <div className='form-field'>
                                    <label htmlFor='catchPhrase'>Enter a catchPhrase : </label>
                                    <Field name='company.catchPhrase' type='text' id='catchPhrase'
                                    />
                                </div>
                                <div className='form-field'>
                                    <label htmlFor='bs'>Enter a bs : </label>
                                    <Field name='company.bs' type='text' id='bs'
                                    />
                                </div>
                                <h3>Address :</h3>
                                <div className='form-field'>
                                    <label htmlFor='street'>Enter a street : </label>
                                    <Field name='address.street' type='text' id='street'
                                    />
                                </div>
                                <div className='form-field'>
                                    <label htmlFor='suite'>Enter a suite : </label>
                                    <Field name='address.suite' type='text' id='suite'
                                    />
                                </div>
                                <div className='form-field'>
                                    <label htmlFor='city'>Enter a city : </label>
                                    <Field name='address.city' type='text' id='city'
                                    />
                                </div>
                                <div className='form-field'>
                                    <label htmlFor='zip'>Enter a zip : </label>
                                    <Field name='address.zip' type='text' id='zip'
                                    />
                                </div>
                                <h3>Geo</h3>
                                <div className='form-field'>
                                    <label htmlFor='lat'>Enter a lat : </label>
                                    <Field name='address.geo.lat' type='text' id='lat'
                                    />
                                </div>
                                <div className='form-field'>
                                    <label htmlFor='lng'>Enter a lng : </label>
                                    <Field name='address.geo.lng' type='text' id='lng'
                                    />
                                </div>
                                <button type='submit' className='submit-btn'>Submit</button>
                                <a className='close-form' onClick={() => props.setFormTrigger(false)}>×</a>
                            </Form>
                        </div>
                    </div >
                </div >
            </div >
        </Formik>
    );
}
export default OldDataForm;