import React, {Component} from 'react';
import Banner from './layout/Banner';
import CompanyItem from './layout/CompanyItem';

class Home extends Component {

    constructor(props) {
        super(props);
        this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
    }

    eventToggleSidebar(e) {
        e.preventDefault();
        this.props.toggleSidebar(!this.props.layout.sidebarOpen);
    }


    render() {
        return (
            <div className="posts">

                <div className="post banner">
                    <h1 className="post-title">Let's take your <em>Idea</em> to <em>Production</em>.
                    </h1>
                </div>

                <div className="post clearfix">
                    <p>I build high quality mobile apps for <em>agencies</em>, <em>bluechips</em>, <em>start-ups</em> and sometimes, <em>myself</em>. <a href="#" onClick={this.eventToggleSidebar}>
                        Find out More</a></p>

                    {/*<div className="exclaimation">*/}
                        {/*<em><b>*</b> This site is built with these technologies. View the <a*/}
                            {/*href="https://github.com/caljrimmer/portfolio-redux-app">github repo here</a>.</em><br/>*/}
                        {/*<em><b>**</b> Yep, I know React can be used on the server side too. This site is Isomorphical*/}
                            {/*rendered.</em>*/}
                    {/*</div>*/}

                </div>

                <div className="post clearfix">

                    <h2>Companies I have worked with:</h2>
                    <ul className="clients">
                        <CompanyItem company = {{url: 'https://www.facebook.com/steeroapp/', companyName: 'Steero',className:'steero-logo'}}/>
                        <CompanyItem company = {{url: 'http://www.inmobi.com', companyName: 'InMobi',className:'inmobi-logo'}}/>
                        <CompanyItem company = {{url: 'http://www.styledotme.com', companyName: 'StyleDotMe',className:'styledotme-logo'}}/>
                        <CompanyItem company = {{url: 'http://getsigneasy.com', companyName: 'SignEasy',className:'signeasy-logo'}}/>
                    </ul>

                </div>

                <Banner />

            </div>

        );
    }
}

export default Home;
