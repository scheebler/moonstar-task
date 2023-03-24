import * as React from 'react';

const SvgComponent = (props) => (
	<svg
		viewBox="0 0 1024 1024"
		xmlns="http://www.w3.org/2000/svg"
		fill="#00F"
		stroke="#00F"
		height={20}
		width={20}
		{...props}
	>
		<path d="M768 903.232 717.568 960 256 512 717.568 64 768 120.768 364.928 512z" />
	</svg>
);

export default SvgComponent;
