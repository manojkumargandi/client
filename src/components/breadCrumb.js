import React from 'react';
import { Link } from 'react-router-dom';
import './breadCrumb.css';

class BreadCrumbs extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const path = window.location.pathname;

        let crumbs = path.split('/');

        let link = '';
        let breadCrumbs = [];

        crumbs.shift();

        crumbs.map((value) => {
            link = link+'/'+value;
            breadCrumbs.push({
                link: link,
                value: value
            })
        })

        const renderBreadCrumbs = () => {
            let length = breadCrumbs.length;
            return breadCrumbs.map((item, index) => {
                if(length === index+1) {
                    return <Link className="breadCrumb" to={item.link} key={item.value}>{item.value}</Link>
                } else {
                    return <span key={item.value}><Link className="breadCrumb" to={item.link}>{item.value}</Link>&nbsp;&gt;&nbsp;</span>
                }
            
            })
        }
        return (
            <div>
                {renderBreadCrumbs()}
            </div>
        )
    }
}

export default BreadCrumbs;