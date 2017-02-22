import React, {Component} from 'react';
import {getPortfolio} from '../api/portfolio';
import classNames from 'classnames';

class Portfolio extends Component {

    render() {

        const portfolio = getPortfolio();
        const RoleRows = (roles) => {
            return roles.map((role) => {
                return (
                    <div>
                        <div key={role.title} className="role_wrapper clearfix">
                            <div className="test">
                                <span className="role ">Role</span>
                                <span className="role_title ">{role.title}</span><br></br></div>
                            <p className="role_skills">{role.skills}</p>
                        </div>
                    </div>
                )
            });
        }

        const PortfolioRows = portfolio.map((row) => {
            const classname = classNames('portfolio_item', 'clearfix', row.classname);
                    return (
                        <div key={row.title} className={classname}>
                            <h2><a href={row.link}
                                   target="_blank">visit
                                site </a>&nbsp;{row.title} </h2>
                            {RoleRows(row.roles)}
                        </div>

                    )


        });

        return (
            <div className="posts">
                {PortfolioRows}
            </div>
        );

    }
}

export default Portfolio;