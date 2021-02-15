import React from 'react';
import { connect } from 'react-redux';
import TableRow from './table-row';

class TableBody extends React.Component {
    getUsers() {
        if(this.props.repo) {
<<<<<<< HEAD
            return this.props.repo.map((repo) => {
                return <TableRow repo={repo} key={repo.id}/>
=======
            return this.props.repo.map((repo, index) => {
                return <TableRow repo={repo} number={index+1} key={repo.id}/>
>>>>>>> ee20d556fec47173bf49c4db43a59492dc8897f4
            });
        }
    }

    render() {
        return(
            <tbody>
                {this.getUsers()}
            </tbody>
        );
    }
}

const mapStateToProps = (state) => {
    return {
<<<<<<< HEAD
        repo: state.search.repo,
=======
        repo: state.search.repo.items,
>>>>>>> ee20d556fec47173bf49c4db43a59492dc8897f4
    }
};

export default connect(mapStateToProps, null)(TableBody);