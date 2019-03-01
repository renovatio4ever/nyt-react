import React from "react";

const Main = props => (
  <div>
    <div className="site-feature"><img src="/images/banner-img.jpg" alt="NYTReact" className="media-fluid" /></div>
    <div className="container articles-container" {...props} />
  </div>
)

export default Main;