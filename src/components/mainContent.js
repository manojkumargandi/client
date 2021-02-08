import React from 'react';

import FileContent from './fileContent';
import DisplayContent from './displayContent';
import BreadCrumbs from './breadCrumb';

import './mainContent.css'


class MainContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            content: []
        };
    }


    componentDidMount() {
        let path = window.location.pathname !== '/' ? window.location.pathname : '';
        
        let url = "http://localhost:8080/path" + path;

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        content: result
                    })
                },
                (error) => {
                    console.log(error);
                }
            )
    }

    componentDidUpdate() {
        let path = window.location.pathname !== '/' ? window.location.pathname : '';
        
        let url = "http://localhost:8080/path" + path;

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        content: result
                    })
                },
                (error) => {
                    console.log(error);
                }
            )
    }

    render() {
        
        const renderContent = () => {
            return this.state.content.map((item) => 
                (item.name ? <DisplayContent key={item.name} value={item.name} type={item.type} /> : <FileContent key={item.fileName} filename={item.fileName}/>)

            )
        }
        return (
            <div className="container">
                <BreadCrumbs />
                <div className="contentDiv">{renderContent()}</div>
            </div>
        )
    }
}

export default MainContent;