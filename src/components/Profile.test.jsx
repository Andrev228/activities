import React from 'react';
import { render } from '@testing-library/react';
import Profile, { NO_USERNAME_MESSAGE } from './Profile.jsx';

/*
    Enzyme isn't used here because of hooks support issue:
    https://enzymejs.github.io/enzyme/#react-hooks-support
*/

describe('Profile component', () => {
    it('displays user firstname and lastname if probided', () => {
        const mockUserData = {
            firstName: '_firstName_',
            lastName: '_lastName_'
        };
        const { getByText } = render(<Profile userData={ mockUserData } />);
        const expectedName = `${mockUserData.firstName} ${mockUserData.lastName}`;
        expect(getByText(expectedName)).toBeInTheDocument();
    });

    it(`displays "${NO_USERNAME_MESSAGE}" if no user data is provided`, () => {
        const mockUserData = {};
        const { getByText } = render(<Profile userData={ mockUserData } />);
        expect(getByText(NO_USERNAME_MESSAGE)).toBeInTheDocument();
    });
});