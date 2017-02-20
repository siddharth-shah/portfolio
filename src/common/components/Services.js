import React, { Component, PropTypes } from 'react';
import Banner from './layout/Banner';


class Services extends Component {

  render () {
    return (
      <div>

	      	<Banner />

      	  <div className="services">

			  <h3>MVPs</h3>

      	  	<p>I can build you a minimal viable product (MVP)for your idea. An MVP can validate your idea in the market.
      	  	</p> 


	      	<h3>Quick feature releases</h3>

			  <p>Sometimes, bandwidth of your internal team might not be sufficient and you have an important feature/hotfix to go in production.</p>
				<p>I can help you fill that gap and we can make that release happen on time.</p>

	      </div>

	      <div className="services">

      	  	<h3>Enterprise Mobile Apps</h3>

      	  	<p>Whether you are a Start-up or a corporate company, I can help you build you a production ready mobile application.
      	  	</p> 

      	  	<p>The application will be built with the best technologies and will be scalable, secure and maintainable.</p>

      	  	<h3>3rd Party Integrations</h3>

      	  	<p>Analytics, customer support and App health. I can help you choose right tools and setup your app with ready to go configuration.</p>

	      </div>

      </div>
    );
  }
}

export default Services;