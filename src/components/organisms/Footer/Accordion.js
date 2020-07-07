import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import plusIcon from 'assets/icons/plus.svg';
import minusIcon from 'assets/icons/minus.svg';
import PropTypes from 'prop-types';

const Header = styled.div`
  position: relative;
  display: block;
  padding: 20px 0;
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.white200};
  font-size: ${({ theme }) => theme.fontSize.sm};
  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  &:after {
    content: url(${plusIcon});
    position: absolute;
    width: 20px;
    height: 20px;
    right: 0;
    ${({ theme }) => theme.mq.md} {
      display: none;
    }
  }
`;

const List = styled.ul`
  overflow: hidden;
  max-height: 0px;
  opacity: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  transition: opacity 0.3s, max-height 0.5s;
`;

const ListItem = styled.li`
  padding: 10px 0;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.gray100};
  transition: 0.15s;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.white};
  }
`;

const Wrapper = styled.div`
  cursor: pointer;
  ${({ theme }) => theme.mq.md} {
    cursor: auto;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      & > ${List} {
        max-height: 400px;
        opacity: 1;
      }
      & > ${Header}:after {
        content: url(${minusIcon});
      }
    `};
`;

const Accordion = ({ active, title, links }) => {
  const [isVisible, setVisibility] = useState(false);

  const toggle = () => {
    if (!active) setVisibility(!isVisible);
  };

  return (
    <Wrapper onClick={toggle} isActive={isVisible || active}>
      <Header>{title}</Header>
      <List>
        {links.map(({ name, path }) => (
          <ListItem key={name}>
            <StyledLink to={path}>{name}</StyledLink>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  links: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

Accordion.defaultProps = {
  active: false,
};

export default Accordion;
