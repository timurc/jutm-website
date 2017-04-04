import React from 'react';

function setInner ({ body }) {
    return (
        <div dangerouslySetInnerHTML={{ __html: body }} />
    )

}

export default setInner;

