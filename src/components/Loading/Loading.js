import React from 'react';

import { MDBSpinner } from 'mdb-react-ui-kit';

class Loading extends React.Component
{

    render()
    {
        return(
            <div className="d-flex align-items-center justify-content-center" style={{height: '30rem'}}>
                <MDBSpinner grow style={{ width: '15rem', height: '15rem' }} />
            </div>
        )
    }

}

export default Loading;