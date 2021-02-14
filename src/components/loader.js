import React from 'react';

export class Loader extends React.Component {
    render() {
        return(
            <div class="spinner-border text-dark" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        );
    }   
}


