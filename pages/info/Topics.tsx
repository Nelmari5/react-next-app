import {useState, useEffect} from 'react';
import AddPost from '../../components/addPost';
import Post from '../../components/post';
import axios from 'axios';

function Topics() {
  const [posts, setPosts] = useState<any[]>([]);
  
  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => response.json())
      .then((data) => setPosts(data))
  }
  const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
  });
 
 useEffect(() => {
      fetchPosts()
   }, []);
   
const addPost = async(title, body) => {
    const response = await client.post('', {
      title,
      body
    });
    setPosts((prevPosts) => [response.data, ...prevPosts]);
  };
   
  const deletePost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE'
    })
    .then((response) => {
      if(response.status === 200) {
        setPosts(
          posts.filter((post) => {
            return post['id'] !== id;
          })
        )
      }
    })
  };
   
  return (
    <main>
    <h1>Consuming REST api tutorial</h1>
      <AddPost addPost={addPost}/>
      <section className="posts-container">
      <h2>Posts</h2>
        {posts.map((post) => 
          <Post 
            key={post.id} 
            id={post.id}
            title={post.title} 
            body={post.body} 
            deletePost={deletePost}
          />
        )}
      </section>
   </main>
  )
}
export default Topics;