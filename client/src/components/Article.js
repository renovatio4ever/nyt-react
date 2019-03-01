import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";



const Article = props => (
  <div id={props.articleId} className="article-item col s12 l6">
    <div className="card">
      <div className="card-content">
        <span className="card-title"><Link to={props.articleUrl} className="blue-text" target="_blank">{props.articleTitle}</Link></span>
        <div className="row">
          <div className="col s12 xl6">
            <Link to={props.articleUrl} className="black-text" target="_blank"><i className="material-icons tiny">call_made</i> View Article</Link>
          </div>
          <div className="col s12 xl6 text-right">
            <small>Published: {moment(props.articleDate).format('MMM, Do YYYY')}</small>
          </div>
        </div>
      </div>

      <div className="card-action">
      {props.saveArticle ?  <Link to="#" className="orange-text btn-unsave" onClick={() => props.saveArticle(props.articleTitle, props.articleDate, props.articleUrl )} > <i className="material-icons tiny">save</i>
         Save Article</Link> : null}

      {props.deleteArticle ?  <Link to="#" className="orange-text btn-unsave" onClick={() => props.deleteArticle(props.articleId)} > <i className="material-icons tiny">delete</i> Delete Article</Link> : null}
      </div>
    </div>
  </div>
);

export default Article;
