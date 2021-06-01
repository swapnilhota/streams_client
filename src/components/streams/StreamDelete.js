import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { deleteStream, fetchStream } from '../../actions';

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    renderActions() {
        return (
            <div>
                <button className="ui button negative">Delete</button>
                <button className="ui button">Cancel</button>
            </div>
        );
    }

    render() {
        return (
            <div>
                StreamDelete
                < Modal
                    title="Delete Stream"
                    content="Are you sure you want to delete this stream"
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </div >
        );
    }
}

const mapStateToProps = (state) => {

}

export default connect(null, { fetchStream })(StreamDelete);