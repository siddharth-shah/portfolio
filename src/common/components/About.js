import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Repos from './about/Repos';

import Loader from './layout/Loader';
import Banner from './layout/Banner';

class About extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchReposIfNeeded();
    }

    render() {
        return (
            <div>

                <Banner />

                <div className="about">

                    <h3>About Me</h3>

                    {/*<p>After working with a few organizations as a full time developer, I decided to move and start*/}
                    {/*working independently to be able to solve more problems for businesses in*/}
                    {/*different domains.</p>*/}

                    <p>I am an independent <em style={{fontStyle: 'normal', fontSize: '1.1em'}}>Android Consultant </em>
                        with 3 years of experience in developing
                        applications for
                        mobile and tablets.</p>
                    <p>My experience in the community has been around working with products in the following
                        domains:</p>
                    <ul>
                        <li>Business and Productivity</li>
                        <li>Fashion</li>
                        <li> Mobile Advertisements</li>
                        <li>Social Networking</li>
                        <li> Service providers</li>
                    </ul>
                    <p>These days I am solving two interesting problems, one is in the field of Logistics
                        and another is a platform for people in creative fields like photography, arts, music
                        etc.</p>

                    <h4>Skills</h4>
                    <h6>Android</h6>
                    <p>Android app development is what I count as my expertise. <span>Couple of things that I'd like to add regarding the same are:</span>
                    </p>
                    <ul>
                        <li>Basic components of Android Application : Activities, Services, Broadcast Receivers and
                            Content Providers
                        </li>
                        <li>Android platform tools from 16(ice cream sandwich) to 25(Android N)</li>
                        <li>User Interface Design
                            <ul>
                                <li>Support different screens size(Mobiles and Tablets)</li>
                                <li>Material Design</li>
                            </ul>
                        </li>
                        <li>Managing Network calls(REST APIs) and architecture</li>
                        <li>Google Play Store and Android developer console insights
                            <ul>
                                <li>Content (PlayStore Description and Screenshots )</li>
                                <li>Installs & downloads</li>
                                <li>User acquisition & channels</li>
                                <li>Ratings & reviews analysis</li>
                                <li>Support</li>
                            </ul>
                        </li>
                    </ul>

                    <h6>Other Skills</h6>
                    <p>I also hack-around python and its frameworks(Django and flask); Java EE; html,css;
                        javascript and frameworks(node.js, react.js); SQL frameworks(MySQL and posgreSQL) and a bit of
                        NOSQL DB (MongoDb and redis)</p>
                    <p>These days I am learning full stack javascript(this website is my first work) and Architecture
                        for Cloud Applications</p>

                    <h4>Project Interests</h4>
                    <p>Here's a list of stuff I am looking forward to work on(in no particular order)</p>
                    <div className="clearfix">
                        <div className="clearfix" style={{float: 'left', width: '40%'}}>
                            <h6>Technologies</h6>
                            <ul>
                                <li>Virtual Reality</li>
                                <li>Wearables</li>
                                <li>Android Things</li>
                                <li>Content Recommendation systems</li>
                                <li>Blockchain</li>
                            </ul>
                        </div>
                        <div className="clearfix" style={{float: 'left', width: '40%'}}>
                            <h6>Business Domains</h6>
                            <ul>
                                <li>Education</li>
                                <li>Finance</li>
                                <li>Hotels and Hospitality</li>
                                <li>Lifestyle</li>
                            </ul>
                        </div>
                    </div>


                    {/*<p>Also, a software engineer is not just a programmer so when I say solving problems, it doesn't restrict me to coding :). I collaborate with other people, manage teams, prioritise things etc. <h4>I GET SHIT DONE!</h4></p>*/}


                    <h3>About Site</h3>

                    <p style={{marginBottom: '4rem'}}>This site is a single page web app built with React and Redux. It
                        is Isomorphic (all the code
                        renders on the server and well as the browser) which has the advantage of initially rendering
                        quicker and being indexed by search engines.</p>
                </div>

            </div>
        );
        const {results, isFetching, lastUpdated, error} = this.props;
    }
}

About.propTypes = {
    results: PropTypes.array.isRequired,
    error: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired
};

export default About;