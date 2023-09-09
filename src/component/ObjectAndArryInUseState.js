import React, { useState } from "react";

const ObjectAndArrayInUseState = () => {
  const [person, setPerson] = useState({
    fname: "John",
    lname: "Doe",
    age: 25,
    email: "johndoe@gmail.com",
    address: {
      country: "Canada",
      state: "Ontario",
    },
  });

  const [posts, setPosts] = useState([
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    },
  ]);

  return (
    <>
      {/* <div>
        <h1>ObjectAndArrayInUseState</h1>
        <h2>
          Name :- {person.fname} {person.lname}
        </h2>
        <h2>Age :- {person.age}</h2>
        <h2>Email :- {person.email}</h2>
        <h2>
          Country & State :- {person.address.country}, {person.address.state}
        </h2>
      </div> */}
      <div>
        {posts.map((post, idx) => {
          return (
            <div key={post.title}>
              <h1>
                {idx + 1}. {post.title}
              </h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ObjectAndArrayInUseState;
