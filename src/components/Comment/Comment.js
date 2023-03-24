import React from 'react';
import CommentContainer from './styled/CommentContainer';
import EmailContainer from './styled/EmailContainer';
import NameContainer from './styled/NameContainer';

const Comment = ({ comment }) => {
	const { name, email, body } = comment;
	return (
		<CommentContainer>
			<NameContainer>{name}</NameContainer>
			<EmailContainer>{email}</EmailContainer>
			<div>{body}</div>
		</CommentContainer>
	);
};

export default Comment;