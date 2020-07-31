import React from 'react';
import { Link } from 'gatsby';

class BlogCard extends React.Component {
  render() {
    let card = (
      <div class="card">
        {this.props.thumbnail && (
          <div className="card-image">
            <figure className="image">{this.props.thumbnail}</figure>
          </div>
        )}
        {this.props.title && (
          <header class="card-header">
            <p class="card-header-title">{this.props.title}</p>
          </header>
        )}
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

    return card;
  }
}

export default BlogCard;
