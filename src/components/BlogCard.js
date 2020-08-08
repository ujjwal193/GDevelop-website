import React from 'react';
import { Link } from 'gatsby';
import Author from '../components/Author';

class BlogCard extends React.Component {
  render() {
    let card = (
      <div className="card">
        {this.props.title && (
          <header className="card-header">
            <p className="card-header-title">{this.props.title}</p>
            {this.props.date && (
              <p className="card-header-icon">{this.props.date}</p>
            )}
          </header>
        )}
        {this.props.thumbnail && (
          <div className="card-image">
            <figure className="image">
              <img
                style={{
                  objectFit: 'cover',
                  height: '200px',
                  objectPosition: '50% 50%',
                }}
                src={this.props.thumbnail}
              />
            </figure>
          </div>
        )}
        <Author 
          author={this.props.author}
        />
        <div className="card-content">
          <div className="content">
            <p
              dangerouslySetInnerHTML={{
                __html: this.props.content,
              }}
            />
          </div>
        </div>
      </div>
    );

    if (this.props.link) {
      card = (
        <Link style={{ boxShadow: `none` }} to={this.props.link}>
          {card}
        </Link>
      );
    }

    return (
      <div className="columns">
        <div className="column is-one-quarter" />
        <div className="column is-one-half">{card}</div>
        <div className="column is-one-quarter" />
      </div>
    );
  }
}

export default BlogCard;
