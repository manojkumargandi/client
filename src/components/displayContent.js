import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dir from '../assets/dir.png';
import file from '../assets/file.png';
import './displayContent.css';

class DisplayContent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
       const path =  window.location.pathname === '/' ? '/'+this.props.value : window.location.pathname+'/'+this.props.value
        return (
            <div className="childcontent">
                <Link to={path}>
                    {
                        this.props.type === 'dir' &&
                        <img className="displayImg" src={dir} alt="directory"/> 
                    }
                    {
                        this.props.type === 'file' &&
                        <img className="displayImg" src={file} alt="file"/> 

                    }
                    <div>{this.props.value}</div>
                </Link>
            </div>
        )
    }
}

DisplayContent.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default DisplayContent;