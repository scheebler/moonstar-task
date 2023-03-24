import React from 'react';
import PostsList from './PostsList';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';

describe('Jest PostsList components', () => {
	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('Test PostsList with no posts', async () => {
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve([]),
			})
		);
		await act (async () => 
			render(<PostsList />)
		);
		expect(screen.getByText('No posts are available based on your search!')).toBeInTheDocument();
	});

	it('Test PostsList with posts', async () => {
		const mockedPosts = [
			{
				id: 'id1',
				userId: 'userId1',
				title: 'title1',
				body: 'body1',
			},
			{
				id: 'id2',
				userId: 'userId2',
				title: 'title2',
				body: 'body2',
			},
			{
				id: 'id3',
				userId: 'userId3',
				title: 'title3',
				body: 'body3',
			},
		];
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(mockedPosts),
			})
		);
		await act (async () => 
			render(<PostsList />)
		);
		expect(screen.getByText('title1')).toBeInTheDocument();
		expect(screen.getByText('body1')).toBeInTheDocument();
		expect(screen.getByText('title2')).toBeInTheDocument();
		expect(screen.getByText('body2')).toBeInTheDocument();
		expect(screen.getByText('title3')).toBeInTheDocument();
		expect(screen.getByText('body3')).toBeInTheDocument();
	});
});