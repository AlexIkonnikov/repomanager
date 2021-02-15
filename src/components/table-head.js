import React from 'react';

class TableHead extends React.Component {
    render() {
        return(
            <thead>
                <tr>
                    <th>Repo name</th>
                    <th>Description</th>
                    <th>Adress</th>
                    <th>Languages</th>
                </tr>
            </thead>
        );
    }
}

export default TableHead;