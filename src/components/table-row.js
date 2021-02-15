import React from 'react';

class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.repo = props.repo;
<<<<<<< HEAD
=======
        this.number = props.number;
>>>>>>> ee20d556fec47173bf49c4db43a59492dc8897f4
    }
    render() {
        return(
            <tr>
<<<<<<< HEAD
                <td>{this.repo.owner.login}</td>
=======
                <td>{this.number}</td>
>>>>>>> ee20d556fec47173bf49c4db43a59492dc8897f4
                <td>{this.repo.name}</td>
                <td>{this.repo.description}</td>
                <td><a href={this.repo.html_url} target="_blank">{this.repo.html_url}</a></td>
                <td>{this.repo.language}</td>
            </tr>
        );
    }
}

export default TableRow;