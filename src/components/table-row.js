import React from 'react';

class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.repo = props.repo;
    }
    render() {
        return(
            <tr>
                <td>{this.repo.owner.login}</td>
                <td>{this.repo.name}</td>
                <td>{this.repo.description}</td>
                <td><a href={this.repo.html_url} target="_blank">{this.repo.html_url}</a></td>
                <td>{this.repo.language}</td>
            </tr>
        );
    }
}

export default TableRow;