import React from 'react';
import Post from './Post';
import renderer from 'react-test-renderer';

describe('Jest Post component', () => {
	const mockedPost = {
		id: 'mockedId',
		userId: 'mockedUserId',
		title: 'This is a mocked title',
		body: 'This is a mocked body',
	};

	it('Test visible Post', () => {
		const tree = renderer.create(<Post post={mockedPost} isVisible={true} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Test invisible Post', () => {
		const tree = renderer.create(<Post post={mockedPost} isVisible={false} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});