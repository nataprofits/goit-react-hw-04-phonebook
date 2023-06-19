import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onRemove }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }, idx) => (
        <Item key={id}>
          <div>{idx + 1}.</div>
          {name}: {number}
          <Button onClick={() => onRemove(id)}>Delete</Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onRemove: PropTypes.func.isRequired,
};