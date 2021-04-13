import React from 'react';
import arrow from "./assets/icon-arrow-up.svg";

function MoreInfo(props) {
    
    return (
        <div className="expand-control">
            <div className="more">
                <h6>more</h6>
                <button onClick={() => props.setExpanded(expanded => !expanded)}>
                    <img src={arrow} alt="more button" />
                </button>
            </div>
        </div>
    )
}

export default MoreInfo;