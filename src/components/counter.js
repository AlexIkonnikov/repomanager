import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    render() {
        console.log(this.props)
        return(
            <div>
                <p>Количество результатов: {this.props.repo.length}</p>
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