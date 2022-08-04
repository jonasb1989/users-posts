import { useState, useEffect } from "react";
import { getUsers, getPosts } from "../../services";
import UsersDropdowns from "./components/users-dropdowns";

import * as Styles from "./styles";

const App = () => {
  const [usersPost, setUsersPosts] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleGetPostsData = async () => {
      try {
        const [usersData, postsData] = await Promise.all([
          getUsers(),
          getPosts(),
        ]);
        const usersPostsGrouped = usersData.map(
          ({
            id,
            name,
            username,
            email,
            phone,
            website,
            company: { name: companyName },
            address: { street, suite, zipcode, city },
          }) => ({
            id,
            name,
            username,
            email,
            phone,
            website,
            company: companyName,
            address: `${street}, ${suite} - ${zipcode} ${city}`,
            posts: postsData.filter(({ userId }) => userId === id),
          })
        );
        setUsersPosts(usersPostsGrouped);
      } catch (error) {
        setHasError(true);
      }
    };

    handleGetPostsData();
  });

  return (
    <Styles.HomeWrapper>
      {!!usersPost.length &&
        usersPost.map((user) => <UsersDropdowns key={user.id} user={user} />)}
      {hasError && <h3>Something went wrong fetching the posts.</h3>}
    </Styles.HomeWrapper>
  );
};

export default App;
