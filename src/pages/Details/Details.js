import React from 'react';
import {useParams} from 'react-router-dom'

const Details = () => {
    const {titleName} = useParams()
    return (
        <div>
            this is details{titleName}
        </div>
    );
};

export default Details;