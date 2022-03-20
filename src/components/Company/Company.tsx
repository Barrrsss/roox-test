import React, {useState} from 'react';
import {Validate} from '@src/utils/Validate';

import './Company.scss';

interface UserParams {
    user: any;
}


const Company = ({user}: UserParams) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [input, setInput] = useState('');

    const {values, handleChange, buttonUnlock, isValid} = Validate({
        name: user.name,
        username: user.username,
        email: user.email,
        street: user.address.street,
        city: user.address.city,
        zipcode: user.address.zipcode,
        phone: user.phone,
        website: user.website,
        comment: input,
    });

    const disabled = () => {
        if (Boolean(values.name) && Boolean(values.username) &&
            Boolean(values.email) && Boolean(values.street) &&
            Boolean(values.city) && Boolean(values.zipcode) &&
            Boolean(values.phone) && Boolean(values.website)) {
            buttonUnlock();
        }
        setIsDisabled(!isDisabled);
    };
    const send = () => {
        console.log(JSON.stringify(values));
    };

    return (
        <section className='profile'>
            <div className='button__field'>
                <p className='button__title'>Сортировка</p>
                <button className='button'>по городу</button>
                <button className='button'>по компании</button>
            </div>
            <div className='profile__container'>
                <div className='profile__container_title'>
                    <h1 className='profile__title'>Профиль пользователя</h1>
                    <button className='profile__button' type='submit' onClick={disabled}>Редактировать</button>
                </div>
                <form className='profile__form' method='POST' noValidate>
                    <div className='profile__form_container'>
                        <label className='profile__form_label'>Name</label>
                        <input className='profile__form_input' placeholder='Name' id='name-input'
                               name='name' onChange={handleChange} value={values.name} minLength={2} maxLength={30}
                               disabled={isDisabled} required />
                    </div>
                    <div className='profile__form_container'>
                        <label className='profile__form_label'>User name</label>
                        <input className='profile__form_input' placeholder='Username'
                               id='username-input'
                               name='username' onChange={handleChange} value={values.username} minLength={2}
                               maxLength={30}
                               required disabled={isDisabled} />
                    </div>
                    <div className='profile__form_container'>
                        <label className='profile__form_label'>Email</label>
                        <input className='profile__form_input' placeholder='Email' id='email-input'
                               name='email' onChange={handleChange} value={values.email} minLength={2} maxLength={30}
                               required disabled={isDisabled} />
                    </div>
                    <div className='profile__form_container'>
                        <label className='profile__form_label'>Street</label>
                        <input className='profile__form_input' placeholder='Street'
                               id='street-input'
                               name='street' onChange={handleChange} value={values.street} minLength={2} maxLength={30}
                               required disabled={isDisabled} />
                    </div>
                    <div className='profile__form_container'>
                        <label className='profile__form_label'>City</label>
                        <input className='profile__form_input' placeholder='City' id='city-input'
                               name='city' onChange={handleChange} value={values.city} minLength={2} maxLength={30}
                               required disabled={isDisabled} />
                    </div>
                    <div className='profile__form_container'>
                        <label className='profile__form_label'>Zip code</label>
                        <input className='profile__form_input' placeholder='Zipcode'
                               id='zipcode-input'
                               name='zipcode' onChange={handleChange} value={values.zipcode} minLength={2}
                               maxLength={30}
                               required disabled={isDisabled} />
                    </div>
                    <div className='profile__form_container'>
                        <label className='profile__form_label'>Phone</label>
                        <input className='profile__form_input' placeholder='Phone' id='phone-input'
                               name='phone' onChange={handleChange} value={values.phone} minLength={2} maxLength={30}
                               required disabled={isDisabled} />
                    </div>
                    <div className='profile__form_container'>
                        <label className='profile__form_label'>Website</label>
                        <input className='profile__form_input' placeholder='Website'
                               id='website-input'
                               name='website' onChange={handleChange} value={values.website} minLength={2}
                               maxLength={30} required disabled={isDisabled} />
                    </div>
                    <div className='profile__form_container'>
                        <label className='profile__form_label'>Comment</label>
                        <textarea className='profile__form_input profile__form_input_comment' placeholder='Comment' id='comment'
                               name='comment' onChange={handleChange} value={input}
                               onInput={e => setInput(e.currentTarget.value)} disabled={isDisabled} />
                    </div>
                </form>
                <button type='submit' className='profile__button profile__button_send' onClick={send} disabled={!isValid}>Отправить</button>
            </div>
        </section>
    );
};

export default Company;
