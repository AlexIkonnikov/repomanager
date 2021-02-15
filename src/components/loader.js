import React from 'react';

export class Loader extends React.Component {
    render() {
        return(
            <div className="spinner-border text-dark" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        );
    }   
}


