export const postIsOnCurrentPage = (currentPage, index) => {
	return index >= (currentPage - 1) * 10  && index < (currentPage - 1) * 10 + 10;
};