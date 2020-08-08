import React from 'react';
import { Link } from 'gatsby';
import Column from '../Grid/Column';
import Row from '../Grid/Row';
import BigButton from '../../components/BigButton';
import Paragraph from '../../components/Paragraph';

import Author from '../../components/blog/Author';
import FormatedDate from '../../components/blog/FormatedDate';
import BlogBigTitle from '../../components/blog/BlogBigTitle';

class BlogCard extends React.Component {
  render() {
    let card = (
      <div>
        <Column>
          <BlogBigTitle>{this.props.title}</BlogBigTitle>
            <Author author={this.props.author} />
            <FormatedDate>{this.props.date}</FormatedDate>
        </Column>
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
        <Paragraph>{this.props.content}</Paragraph>
      </div>
    );

    if (this.props.link) {
      card = <Link to={this.props.link}>{card}</Link>;
    }

    return <div>{card}</div>;
  }
}

export default BlogCard;
