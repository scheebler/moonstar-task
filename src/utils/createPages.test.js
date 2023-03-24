import { createPages } from './createPages';

describe('Jest createPages function', () => {
	it('Test create 10 pages', () => {
		expect(createPages(100)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	});

	it('Test create 4 pages', () => {
		expect(createPages(34)).toEqual([1, 2, 3, 4]);
	});

	it('Test create 0 pages', () => {
		expect(createPages(0)).toEqual([]);
	});

	it('Test create one page', () => {
		expect(createPages(8)).toEqual([1]);
	});
});