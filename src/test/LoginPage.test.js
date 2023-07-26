import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useGetUsersQuery, useCreateUserMutation } from '../rtkQuery';
import LoginPage from '../Components/LoginPage'


test('renders email and password input fields and login button', () => {
    // Provide a mock response for the useGetUsersQuery hook
    useGetUsersQuery.mockReturnValue({ data: [], isLoading: false, refetch: jest.fn() });

    render(
        <MemoryRouter>
            <LoginPage />
        </MemoryRouter>
    );

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();

});