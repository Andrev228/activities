import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
    text-align: center;
    padding: 1.5rem 0;
`;

export default function Welcome() {
    return <PageContainer data-testid="welcome-view">Welcome to the web-site!</PageContainer>;
}
