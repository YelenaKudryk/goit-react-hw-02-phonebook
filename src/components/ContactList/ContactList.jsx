import { List, Item, Button } from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => {
  const contact = contacts.map(({ id, name, number }) => (
    <Item key={id}>
      {name}: {number}
      <Button onClick={() => deleteContact(id)} type="button">
        Delete
      </Button>
    </Item>
  ));

  return <List>{contact}</List>;
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
