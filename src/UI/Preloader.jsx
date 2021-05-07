import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const PreloaderWrapper = styled.div`
    padding: 1.5rem;
    display: flex;
    justify-content: center;
`;

const Spinner = styled.div`
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border: .25em solid #292929;
    border-right-color: transparent;
    border-radius: 50%;
    animation: ${rotate} 1s linear infinite;
`;

export default function Preloader() {
    return (
        <PreloaderWrapper data-testid="preloader">
            <Spinner />
        </PreloaderWrapper>)
}