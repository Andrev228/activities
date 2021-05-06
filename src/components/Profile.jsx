import React, { useCallback } from 'react';
import styled from 'styled-components';

const UserName = styled.div`
    text-align: center;
    padding: 1.5rem 0;
`;

export default function Profile({ userData: { firstName, lastName } }) {
    const getUserName = useCallback(() => {
        if (!firstName && !lastName) {
            return 'Please set your name on settings page';
        }
        return `${firstName} ${lastName}`;
    }, [firstName, lastName]);

    return <UserName>{getUserName()}</UserName>;
}
