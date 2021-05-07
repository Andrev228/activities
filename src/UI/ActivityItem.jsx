import React from 'react';
import styled from 'styled-components';

const ActivityList = styled.ul`
    list-style-type: none;
`;


export default function ActivityItem({ activity = '', type = '', participants = 0 }) {
    return (
        <ActivityList data-testid="activity-list">
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
