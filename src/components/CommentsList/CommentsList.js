import React, { useState, useEffect } from 'react';
import { getComments } from '../../api/getComments';
import CommentsListContainer from './styled/CommentsListContainer';
import Comment from '../Comment/Comment';

const CommentsList = ({postId}) => {
	const [comments, setComments] = useState([]);
	useEffect(() => {
		getComments(setComments, postId);
	}, []);
	return (
		<CommentsListContainer>
			{
				comments && comments.length > 0 
					? comments.map(comment => (<Comment comment={comment} key={comment.id} />))
					: (<>No comments are available for this post!</>)
			}
		</CommentsListContainer>
	);
};

export default CommentsList;