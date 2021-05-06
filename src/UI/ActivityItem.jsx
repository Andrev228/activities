import React from 'react';
import styled from 'styled-components';

const ActivityList = styled.ul`
    list-style-type: none;
`;


export default function ActivityItem({ activity, type, participants }) {
    return (
        <ActivityList>
            <li>
                Activity: {activity}
            </li>
            <li>
                Type: {type}
            </li>
            <li>
                Participants: {participants}
            </li>
        </ActivityList>)
}
