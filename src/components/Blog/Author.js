import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import getAuthorData from '../../../blog/authors';
import Avatar from './Avatar';

const Container = styled.div`
  float: left;
`;

export default function (props) {
  const authorData = getAuthorData(props.author);
  let nameContainer = <p>{authorData.name}</p>;
  if (authorData.forum)
    nameContainer = (
      <Link to={`https://forum.gdevelop-app.com/u/${authorData.forum}/summary`}>
        {nameContainer}
        <Container>@{authorData.forum}</Container>
      </Link>
    );
  return (
    <Container>
      <Avatar picture={authorData.picture} />
      <Container>{nameContainer}</Container>
    </Container>
  );
}
