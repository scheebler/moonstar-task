import React, { useState } from 'react';
import PostContainer from './styled/PostContainer';
import PostContent from './styled/PostContent';
import Title from './styled/Title';
import DownArrow from '../assets/icons/DownArrow';
import DownArrowContainer from './styled/DownArrowContainer';
import CommentsList from '../CommentsList/CommentsList';

const Post = ({ post, isVisible }) => {
	const {id, title, body} = post;
	const [isExpanded, setIsExpanded] = useState(false);
	const [shouldRotate, setShouldRotate] = useState(false);
	const handleOnClick = () => {
		setIsExpanded(!isExpanded);
		setShouldRotate(!shouldRotate);
	};
	return (
		<PostContainer key={id} isVisible={isVisible}>
			<PostContent>
				<Title>{title}</Title>
				<div>{body}</div>
				{isExpanded && <CommentsList postId={id} />}
			</PostContent>
			<DownArrowContainer onClick={handleOnClick} shouldRotate={shouldRotate}>
				<DownArrow />
			</DownArrowContainer>    
		</PostContainer>
	);
};

export default Post;