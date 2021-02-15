import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
<<<<<<< HEAD
    render() {
        console.log(this.props)
        return(
            <div>
                <p>Количество результатов: {this.props.repo.length}</p>
=======

    render() {
        const total = this.props.repo.total_count;
        return(
            <div>
                <p>РЕЗУЛЬТАТ: {total ? total : 0}</p>
>>>>>>> ee20d556fec47173bf49c4db43a59492dc8897f4
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