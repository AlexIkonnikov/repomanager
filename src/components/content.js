import React from 'react';
import { connect } from 'react-redux';
import TableHead from './table-head';
import TableBody from './table-body';
import { Loader } from './loader';

class Content extends React.Component {
    
    render() {
        if(this.props.isDisabled) {
            return(
                <Loader/>
            );
        } else {
            return(
                <div className="table-responsive">
<<<<<<< HEAD
                    <table className="table table-bordered table-dark">
=======
                    <table className="table table-sm table-bordered table-dark">
>>>>>>> ee20d556fec47173bf49c4db43a59492dc8897f4
                        <TableHead/>
                        <TableBody/>
                    </table>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {isDisabled: state.button.isDisabled};
};

export default connect(mapStateToProps, null)(Content);