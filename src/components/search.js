import React from 'react';
import { connect } from 'react-redux';
import { Form, FormControl } from 'react-bootstrap';
import { repoSearch } from './../store/actionCreators/repo-search';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    changeQuery(value) {
        this.query = value;
    }

    onSubmitHandler(evt) {
        evt.preventDefault();
        this.props.repoSearch(this.query)
    }

    render() {
        return(
            <Form onSubmit={(evt) => this.onSubmitHandler(evt) } inline>
                <FormControl onChange={(evt) => {this.changeQuery(evt.target.value)}} type="text" placeholder="Repo search" className="mr-sm-2"/>
                <button className="btn btn-dark" disabled={this.props.isDisabled}  type="submit">Search</button>
            </Form>
        );
    }
}

const mapStateToProps = (state) => {
    return {isDisabled: state.button.isDisabled};
};

const mapDispatchToProps = (dispatch) => {
    return {
        repoSearch: (repo) => {
            dispatch(repoSearch(repo));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);