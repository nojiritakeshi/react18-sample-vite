import { VFC } from 'react';
import { Card, Image } from 'semantic-ui-react';

import { User } from 'domains/github';

const MemberList: VFC<{ users: User[] }> = ({ users = [] }) => (
  <>
    <Card.Group>
      {users.map((user) => (
        <Card
          key={user.id}
          href={`https://github.com/${user.login}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card.Content>
            <Image floated="right" size="mini" src={user.avatarUrl} />
            <Card.Header>{user.login}</Card.Header>
            <Card.Meta>GitHub ID: {user.id}</Card.Meta>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </>
);

export default MemberList;
