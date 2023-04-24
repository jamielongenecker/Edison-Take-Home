import React from "react";

/**
 * Component for Pokemon Description
 * @param {Object} props React props 
 * @returns Content for the description of a Pokemon
 */
const Description = (props) => {
return (
	<div className="desc">
		<p>
			<b>Height</b> is <b>{props.height * 10} cm.</b>
		</p>

		<p>
			<b>Weight</b> is <b>{props.weight * 0.1} kg</b>
		</p>
	</div>
	);
};

export default Description;
