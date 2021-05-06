import React, { useCallback } from 'react';
import styled from 'styled-components';

const FormSection = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
`;

export default function Settings({ userData, setUserData }) {
    const updateUserData = useCallback((e) => {
        setUserData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }, []);

    return (
        <form>
            <FormSection>
                <label htmlFor="firstName">First name:</label>
                <input
                    type="text"
                    id="firstName"
                    value={userData.firstName}
                    onChange={updateUserData} 
                />
            </FormSection>
            <FormSection>
                <label htmlFor="lastname">Last name:</label>
                <input
                    type="text"
                    id="lastName"
                    value={userData.lastName}
                    onChange={updateUserData}
                />
            </FormSection>
            <FormSection>
                <label htmlFor="email">E-mail:</label>
                <input
                    type="text"
                    id="email"
                    value={userData.email}
                    onChange={updateUserData}
                />
            </FormSection>
        </form>
    );
}
