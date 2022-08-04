import Dropdown from "../../../../components/dropdown";

import * as Styles from "./styles";

const UsersDropdowns = ({ user }) => {
  const { name, username, company, email, phone, website, address, posts } =
    user;

  return (
    <Dropdown header={name}>
      <Styles.DropdownContent>
        <Styles.ContentCol>
          <p>Username: {username}</p>
          <p>Company: {company}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
        </Styles.ContentCol>
        <Styles.ContentCol>
          <p>Website: {website}</p>
          <p>Adress: {address}</p>
        </Styles.ContentCol>
      </Styles.DropdownContent>
      <Styles.PostsContainer>
        <h3>Posts:</h3>
        {posts.map(({ id, title, body }) => (
          <Dropdown key={id} header={title}>
            <Styles.Post>{body}</Styles.Post>
          </Dropdown>
        ))}
      </Styles.PostsContainer>
    </Dropdown>
  );
};

export default UsersDropdowns;
