import React from 'react';
import Comment from './Comment';
import renderer from 'react-test-renderer';

describe('Jest Comment component', () => {
	it('Test Comment', () => {
		const mockedComment = {
			name: 'Mocked Name',
			email: 'mocked@email.com',
			body: 'This is a mocked body',
		};
		const tree = renderer.create(<Comment comment={mockedComment} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});