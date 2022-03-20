import React from 'react';
import {useContext} from 'react';
import {CurrentUserContext} from '@src/contexts/CurrentUserContext';

import User from '@components/User/User';
import Preloader from '@components/Preloader/Preloader';

import './UsersList.scss';

interface UserParams {
    clickMoreInfo: any;
    sortByName: any;
    sortByCity: any;
    isLoading: boolean;
}

const UsersList = ({clickMoreInfo, sortByName, sortByCity, isLoading}: UserParams) => {
    const currentUsers = useContext(CurrentUserContext);
    return (
        <section>
                {isLoading ? <Preloader />
                    :
                    <div className='user'>
                        <div className='button__field'>
                            <p className='button__title'>Сортировка</p>
                            <button className='button' onClick={sortByName}>по городу</button>
                            <button className='button' onClick={sortByCity}>по компании</button>
                        </div>
                        <ul className='user-list'>
                            <h1 className='user-list__title'>Список пользователей</h1>
                            {
                                currentUsers && currentUsers.map((users?: any) => {

                                    return <User key={users.id} name={users.name} city={users.address.city}
                                                 company={users.company.name} clickMoreInfo={clickMoreInfo} users={users} />;
                                })
                            }
                        </ul>
                    </div>
                }
        </section>
    );

};

export default UsersList;
