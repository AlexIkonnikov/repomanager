import React from 'react';
import { connect } from 'react-redux';
import TableRow from './table-row';

class TableBody extends React.Component {
    getUsers() {
        if(this.props.repo) {
            return this.props.repo.map((repo) => {
                return <TableRow repo={repo} key={repo.id}/>
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
        repo: state.search.repo.items,
    }
};

export default connect(mapStateToProps, null)(TableBody);