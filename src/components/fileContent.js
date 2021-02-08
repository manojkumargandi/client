import React from 'react';

import './fileContent.css'

class FileContent extends React.Component {

    render() {
        return (
            <div className="contentView">
                THIS IS FILE : {this.props.filename}
            </div>
        )
    }
}

export default FileContent;