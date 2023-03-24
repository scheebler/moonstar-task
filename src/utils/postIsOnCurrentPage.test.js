import { postIsOnCurrentPage } from './postIsOnCurrentPage';

describe('Jest postIsOnCurrentPage function', () => {
	it('Test post is on the current page', () => {
		expect(postIsOnCurrentPage(2, 15)).toEqual(true);
	});

	it('Test post is not on the current page', () => {
		expect(postIsOnCurrentPage(3, 15)).toEqual(false);
	});
});