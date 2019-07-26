import './SeasonDisplay.css';
import React from 'react';

// this is a config file/object
const seasonConfig = {
    summer: {
        text: "Let's hit the beach, dude!",
        iconName: 'sun'
    },
    winter: {
        text: "Its Coooooooold",
        iconName: 'snowflake'
    }
}

// helper function
const getSeason = (lat, month) => {
    if(month > 0 && month < 9) {
       return lat > 0 ? 'summer' : 'winter';
    } else {
       return lat < 0 ? 'winter' : 'summer';
    }
};

// This is the functional Component
const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName } = seasonConfig[season]

    return  <div className={`season-display ${season}`}>
                <i className={`icon-left massive ${iconName} icon`} />
                <h1>{text}</h1>
                <i className={`icon-right massive ${iconName} icon`} />
            </div>
}

export default SeasonDisplay;