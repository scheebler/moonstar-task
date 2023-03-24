import React from 'react';
import PageIndex from './PageIndex';
import renderer from 'react-test-renderer';

describe('Jest PageIndex component', () => {
	it('Test active PageIndex', () => {
		const tree = renderer.create(<PageIndex index={1} currentPage={1} setCurrentPage={jest.fn()} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Test inactive PageIndex', () => {
		const tree = renderer.create(<PageIndex index={1} currentPage={2} setCurrentPage={jest.fn()} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});