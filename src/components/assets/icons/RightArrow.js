import * as React from 'react';

const SvgComponent = (props) => (
	<svg
		viewBox="0 0 1024 1024"
		className="icon"
		xmlns="http://www.w3.org/2000/svg"
		fill="#00F"
		stroke="#00F"
		height={20}
		width={20}
		{...props}
	>
		<path d="M256 120.768 306.432 64 768 512 306.432 960 256 903.232 659.072 512z" />
	</svg>
);

export default SvgComponent;
