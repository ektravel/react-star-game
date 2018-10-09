import React from "react";
let _ = require('underscore');

const Stars = props => {
    return(
    <div className="col-5">
        {_.range(props.numberOfStars).map(i =>
        <i key = {i} className="faStar"></i>
        )}
    </div>
    );
}

export default Stars;