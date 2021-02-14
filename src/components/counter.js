import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {

    render() {
        const total = this.props.repo.total_count;
        return(
            <div>
                <p>Количество результатов: {total ? total : 0}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        repo: state.search.repo
    }
}

export default connect(mapStateToProps, null)(Counter)