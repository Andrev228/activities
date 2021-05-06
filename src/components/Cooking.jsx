import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Preloader from '../UI/Preloader.jsx';

const CookingList = styled.ul`
    list-style-type: none;
`;

export default function Cooking() {
    const [ activities, setActivity ] = useState({});
    const [ isFetching, setIsFetching ] = useState(true);

    useEffect(() => {
        fetch('https://www.boredapi.com/api/activity?type=cooking')
            .then(response => response.json())
            .then(activity => {
                setActivity(activity);
                setIsFetching(false);
            })
            .catch((err) => {
                console.error(err);  // some state also may be added here to display an error message on UI
                setIsFetching(false);
            })
    }, []);

    return isFetching ? <Preloader /> : (
        <CookingList>
            <li>
                Activity: {activities.activity}
            </li>
            <li>
                Type: {activities.type}
            </li>
            <li>
                Participants: {activities.participants}
            </li>
        </CookingList>);
}
