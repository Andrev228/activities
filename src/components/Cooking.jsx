import React, { useEffect, useState } from 'react';
import Preloader from '../UI/Preloader.jsx';
import ActivityItem from '../UI/ActivityItem.jsx';

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

    return isFetching ? <Preloader /> : <ActivityItem { ...activities } />;
}
