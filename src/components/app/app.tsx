import React, {useState, useEffect} from 'react';
import {Route, Routes, useNavigate} from 'react-router';

import {CurrentUserContext} from '@src/contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';

import {body} from './app.scss';

import UsersList from '@components/UsersList/UsersList';
import Company from '@components/Company/Company';
import ProtectedRoute from '@components/ProtectedRoute/ProtectedRoute';

export const App = (): JSX.Element => {
    const [currentUsers, setCurrentUsers] = useState([] as any);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [thisUser, setThisUser] = useState([] as any);

    useEffect(() => {
        setIsLoading(true);
        Promise.all([mainApi.getUsers()])
            .then(r => setCurrentUsers(r[0]))
            .then()
            .catch((err) => console.log(err))
            .finally(() => {
                setTimeout(() => setIsLoading(false), 1000);
            });

    }, []);
    useEffect(()=> {
        console.log(currentUsers);
    },[currentUsers])
    const [sortFromId, setSortFromId] = React.useState(true);

    const sortByName = () => {
        sortFromId
            ? currentUsers.sort((a: any, b: any) => (a.name < b.name) ? 1 : -1)
            : currentUsers.sort((a: any, b: any) => (a.name > b.name) ? 1 : -1);
        setSortFromId(!sortFromId);
    };
    const sortByCity = () => {
        sortFromId
            ? currentUsers.sort((a: any, b: any) => (a.address.city < b.address.city) ? 1 : -1)
            : currentUsers.sort((a: any, b: any) => (a.address.city > b.address.city) ? 1 : -1);
        setSortFromId(!sortFromId);
    };
    const clickMoreInfo = (users: any) => {
        setThisUser(users);
        navigate(`company`);
    };
    return (

        <CurrentUserContext.Provider value={currentUsers}>
            <div className={body}>
                <Routes>
                    <Route path='/'>
                        <Route path='/' element={<UsersList clickMoreInfo={clickMoreInfo} sortByName={sortByName}
                                                            sortByCity={sortByCity} isLoading={isLoading} />} />
                    </Route>
                    <Route path='/company' element={<ProtectedRoute user={thisUser} />}>
                        <Route path='/company' element={<Company user={thisUser} />} />
                    </Route>
                </Routes>
            </div>
        </CurrentUserContext.Provider>

    );
};
