import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import App, { PROFILE_VIEW, SETTINGS_VIEW } from './App';

/*
    Enzyme isn't used here because of hooks support issue:
    https://enzymejs.github.io/enzyme/#react-hooks-support
*/

describe('App component', () => {
    describe('Accordion menu', () => {
        it('displays Settings, Account accordion menus once Account is clicked', async () => {
            const { getByTestId } = render(<App />);
            fireEvent.click(getByTestId('account-menu-item'));
    
            await waitFor(() => getByTestId('profile-menu-subitem'));
    
            expect(getByTestId('profile-menu-subitem')).toBeInTheDocument();
            expect(getByTestId('settings-menu-subitem')).toBeInTheDocument();
        });
    
        it('displays Recreational, Cooking accordion menus once Activities is clicked', async () => {
            const { getByTestId } = render(<App />);
            fireEvent.click(getByTestId('activities-menu-item'));
    
            await waitFor(() => getByTestId('recreational-menu-subitem'));
    
            expect(getByTestId('recreational-menu-subitem')).toBeInTheDocument();
            expect(getByTestId('cooking-menu-subitem')).toBeInTheDocument();
        });
    });

    describe('Page content section', () => {
        it('renders Welcome view initially', () => {
            const { getByTestId } = render(<App />);
            expect(getByTestId('welcome-view')).toBeInTheDocument();
        });

        it(`renders ${PROFILE_VIEW} view once profile menu item is clicked`, async () => {
            const { getByTestId } = render(<App />);

            fireEvent.click(getByTestId('account-menu-item'));
            await waitFor(() => getByTestId('profile-menu-subitem'));
            fireEvent.click(getByTestId('profile-menu-subitem'));
            const profileView = await waitFor(() => getByTestId('profile-view'));

            expect(profileView).toBeInTheDocument();
        });

        it(`renders ${SETTINGS_VIEW} form once settings menu item is clicked`, async () => {
            const { getByTestId } = render(<App />);

            fireEvent.click(getByTestId('account-menu-item'));
            await waitFor(() => getByTestId('settings-menu-subitem'));
            fireEvent.click(getByTestId('settings-menu-subitem'));
            const settingsForm = await waitFor(() => getByTestId('settings-form'));

            expect(settingsForm).toBeInTheDocument();
        });
    });
});