import React from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'react-bootstrap';
import { PER_PAGE } from './../api/api';
import { getPage } from './../store/actionCreators/repo-search';


class Paginations extends React.Component {

    generateItems(count) {
        if(count === 1) {
            return;
        }
        let items =[];
        for(let i = 1; i <= count; i++) {
            items.push(<Pagination.Item key = {i} onClick = {() => this.props.getPage(i)}>{i}</Pagination.Item>);
        }
        return items.map((item) => {return item});
    }

    render() {
        const total = this.props.repo.total_count;
        const itemsCount = Math.ceil(total/PER_PAGE);
        return(
            <Pagination>
                {this.generateItems(itemsCount)}
            </Pagination>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        repo: state.search.repo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPage: (repo) => {
            dispatch(getPage(repo));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Paginations);