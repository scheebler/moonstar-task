import React from 'react';
import CommentsList from './CommentsList';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';

describe('Jest CommentsList components', () => {
	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('Test CommentsList with no comments', async () => {
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve([]),
			})
		);
		await act (async () => 
			render(<CommentsList />)
		);
		expect(screen.getByText('No comments are available for this post!')).toBeInTheDocument();
	});

	it('Test CommentsList with posts', async () => {
		const mockedComments = [
			{
				id: 'id1',
				name: 'name1',
				email: 'email1',
				body: 'body1',
			},
			{
				id: 'id2',
				name: 'name2',
				email: 'email2',
				body: 'body2',
			},
			{
				id: 'id3',
				name: 'name3',
				email: 'email3',
				body: 'body3',
			},
		];
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(mockedComments),
			})
		);
		await act (async () => 
			render(<CommentsList />)
		);
		expect(screen.getByText('name1')).toBeInTheDocument();
		expect(screen.getByText('email1')).toBeInTheDocument();
		expect(screen.getByText('body1')).toBeInTheDocument();
		expect(screen.getByText('name2')).toBeInTheDocument();
		expect(screen.getByText('email2')).toBeInTheDocument();
		expect(screen.getByText('body2')).toBeInTheDocument();
		expect(screen.getByText('name3')).toBeInTheDocument();
		expect(screen.getByText('email3')).toBeInTheDocument();
		expect(screen.getByText('body3')).toBeInTheDocument();
    
	});
});