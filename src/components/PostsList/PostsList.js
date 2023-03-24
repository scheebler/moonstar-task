import React, { useEffect, useState, useMemo } from 'react';
import { getPosts } from '../../api/getPosts';
import PageIndex from '../PageIndex/PageIndex';
import Post from '../Post/Post';
import PagesContainer from './styled/PagesContainer';
import PostsListContainer from './styled/PostsListContainer';
import LeftArrow from '../assets/icons/LeftArrow';
import RightArrow from '../assets/icons/RightArrow';
import PageIndexContainer from './styled/PageIndexContainer';
import { createPages } from '../../utils/createPages';
import SearchBar from './styled/SearchBar';
import PagesNumbers from './styled/PagesNumbers';
import { postIsOnCurrentPage } from '../../utils/postIsOnCurrentPage';

const PostsList = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchValue, setSearchValue] = useState('');
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		getPosts(setPosts);
	}, []);

	const filteredPosts = useMemo(() => searchValue !== '' ? posts.filter(post => post.title.includes(searchValue)) : posts, [posts, searchValue]);

	const pages = createPages(filteredPosts.length);

	const handlePrevPage = () => {
		if (currentPage !== 1) setCurrentPage(currentPage - 1);
	};

	const handleNextPage = () => {
		if (currentPage !== pages.length && pages.length > 0) setCurrentPage(currentPage + 1);
	};

	const handleSearch = (e) => {
		setSearchValue(e.currentTarget.value);
        setCurrentPage(1);
	};
	return (
		<PostsListContainer>
			<SearchBar type="search" placeholder='Search post by title...' onChange={handleSearch} />
			{filteredPosts.length > 0 ? (
				<>
					<PagesContainer>
						<PageIndexContainer onClick={handlePrevPage} active={false}>
							<LeftArrow /> Prev
						</PageIndexContainer>
						<PagesNumbers currentPage={currentPage}>
							{
								pages.map(page => <PageIndex index={page} currentPage={currentPage} setCurrentPage={setCurrentPage} key={page} />)
							}
						</PagesNumbers>
						<PageIndexContainer onClick={handleNextPage} active={false}>
                            Next <RightArrow />
						</PageIndexContainer>         
					</PagesContainer>
					{filteredPosts.map((post, index) => 
						(<Post 
							post={post} 
							isVisible={postIsOnCurrentPage(currentPage, index)}
							key={post.id}
						/>
						))}
				</>
			) : (
				<>
                    No posts are available based on your search!
				</>
			)}
		</PostsListContainer>
	);
};

export default PostsList;