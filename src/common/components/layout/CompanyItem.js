/**
 * Created by siddharth on 20/2/17.
 */
import React, { Component } from 'react';

class CompanyItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(e) {
        e.preventDefault();
        window.open(this.props.company.url, '_blank')
    }

    render() {

        return (
            <li style = {{cursor: 'pointer'}} className={this.props.company.className} onClick={this.handleClick}>{this.props.company.companyName}</li>

        );

    };
}
export default CompanyItem;

