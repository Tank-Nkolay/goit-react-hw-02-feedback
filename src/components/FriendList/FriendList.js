import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { Markup, Card } from './FriendList.styled';

function FriendList({ friendsData }) {
  return (
    <Markup>
      {friendsData.map(friend => (
        <Card key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </Card>
      ))}
    </Markup>
  );
}

FriendList.propTypes = {
  friendsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
