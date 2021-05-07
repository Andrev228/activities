import React, { useCallback } from 'react';
import styled from 'styled-components';

const UserName = styled.div`
    text-align: center;
    padding: 1.5rem 0;
`;

export const NO_USERNAME_MESSAGE = 'Please set your name on settings page';

export default function Profile({ userData: { firstName, lastName } }) {
    const getUserName = useCallback(() => {
        if (!firstName && !lastName) {
            return NO_USERNAME_MESSAGE;
        }
        return `${firstName} ${lastName}`;
    }, [firstName, lastName]);

    return <UserName>{getUserName()}</UserName>;
}
