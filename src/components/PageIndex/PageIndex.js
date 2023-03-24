import React from 'react';
import PageIndexContainer from '../PostsList/styled/PageIndexContainer';

const PageIndex = ({index, currentPage, setCurrentPage }) => {
	return (
		<PageIndexContainer onClick={() => setCurrentPage(index)} active={index === currentPage}>
			{index}
		</PageIndexContainer>
	);
};

export default PageIndex;