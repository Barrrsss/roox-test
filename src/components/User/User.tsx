import React from 'react'
import './User.scss';

interface UserParams {
    name: string;
    city: string;
    company: string;
    clickMoreInfo: any;
    users: any;
}


const User  = ({users, name, city, company, clickMoreInfo}: UserParams) => {
    const clickMore = () => {
        clickMoreInfo(users);
    }
    return (
        <li className="user-card">
            <div>
                <p className='user-card__title'>ФИО:</p>
                <p className='user-card__title'>город:</p>
                <p className='user-card__title'>компания:</p>
            </div>
            <div>
                <p className='user-card__title user-card__title_name'>{name}</p>
                <p className='user-card__title user-card__title_name'>{city}</p>
                <p className='user-card__title user-card__title_name'>{company}</p>
            </div>
            <button className='user-card__button' onClick={clickMore}> Подробнее </button>
        </li>
    );
};

export default User
