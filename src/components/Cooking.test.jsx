import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Cooking from './Cooking.jsx';

/*
    Enzyme isn't used here because of hooks support issue:
    https://enzymejs.github.io/enzyme/#react-hooks-support
*/

describe('Cooking activities component', () => {
    it('renders preloader initialy', () => {
        const { getByTestId } = render(<Cooking />);
        expect(getByTestId('preloader')).toBeInTheDocument();
    });

    it('displays activity list on successful response', async () => {
        /*
            Usually I use nock library for requests mocking, but it isn't
            needed here due to simplicity of the requests themselves
        */
        window.fetch = jest.fn().mockResolvedValueOnce({
            json: async () => ({
                activity: '_activity_',
                participants: 1,
                type: '_type_'
            })
        });
        const { getByTestId } = render(<Cooking />);
        const listNode = await waitFor(() => getByTestId('activity-list'));
        expect(listNode).toBeInTheDocument();
    });

    it('hides preloader on error response', async () => {
        window.fetch = jest.fn().mockRejectedValueOnce({ 
            message: 'Something went wrong'
        });
        const { getByTestId } = render(<Cooking />);
        const preloader = await waitFor(() => getByTestId('preloader'));
        expect(preloader).not.toBeInTheDocument();
    });
});