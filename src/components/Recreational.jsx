import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Preloader from '../UI/Preloader.jsx';

const RecreationalList = styled.ul`
    list-style-type: none;
`;

export default function Recreational() {
    const [ activities, setActivity ] = useState({});
    const [ isFetching, setIsFetching ] = useState(true);

    useEffect(() => {
        fetch('https://www.boredapi.com/api/activity?type=recreational')
            .then(response => response.json())
            .then(activity => {
                setActivity(activity);
                setIsFetching(false);
            })
            .catch((err) => {
                console.error(err.message); // some state also may be added here to display an error message on UI
                setIsFetching(false);
            })
    }, []);

    return isFetching ? <Preloader /> : (
        <RecreationalList>
            <li>
                Activity: {activities.activity}
            </li>
            <li>
                Type: {activities.type}
            </li>
            <li>
                Participants: {activities.participants}
            </li>
        </RecreationalList>);
}
