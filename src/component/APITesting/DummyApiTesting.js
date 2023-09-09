import React, { useState, useEffect } from "react";

const DummyApiTesting = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const responseObj = await fetch("http://localhost:3004/posts", {
        method: "GET",
      });
      const data = await responseObj.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = {
      title: title,
      author: author,
    };
    console.log(newData);
    try {
      const resp = await fetch("http://localhost:3004/posts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newData),
      });
      if (resp.status === 201) {
        window.location.reload();
      }
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    const resp = await fetch(`http://localhost:3004/posts/${id}`, {
      method: "DELETE",
    });
    console.log(resp);
    if (resp.ok) {
      window.location.reload();
    }
  };

  const handleUpdate = async (id) => {
    console.log(id);
    const authorName = prompt("Enter Author Name");
    const articleTitle = prompt("Enter Article Title");

    console.log(authorName, articleTitle);
    const updatedData = {
      author: authorName,
      title: articleTitle,
    };
    const resp = await fetch(`http://localhost:3004/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedData),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(resp);
    if (resp.ok) {
      window.location.reload();
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      <h1>DummyApiTesting</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Add Post</button>
        </div>
      </form>
      <hr />
      <table style={{ textAlign: "center", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Author Name</th>
            <th>Article Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>{item?.id}</td>
                <td>{item?.author}</td>
                <td>{item?.title}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(item.id)}
                    style={{
                      background: "#3944f7",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    style={{
                      background: "red",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DummyApiTesting;
