import {useState, useEffect} from 'react';
import styles from "../../styles/Topics.module.css"
import { motion } from "framer-motion";
import AddPost from '../../components/addPost';
import Post from '../../components/post';
import axios from 'axios';
import { useToasts } from "react-toast-notifications";

function Topics() {
  const [posts, setPosts] = useState<any[]>([]);
  const { addToast } = useToasts();
  
  const fetchPosts = () => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => response.json())
      .then((data) => setPosts(data))
    } catch(error){
      addToast("Error while fetching articles", { appearance: "error" }) 
      console.log('Error while fetching articles')
      throw(error);
    }
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
    <main className={styles.background}>
    <h1>Lets add a <span className={styles.color}>NEW</span>post</h1>
    
      <AddPost addPost={addPost}/>
      <section className='contain'>
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

      <h3>Some toast messages ;D</h3>
        <div>
          <button onClick={() => addToast("Success!", { appearance: "success" })}>
            Success!
          </button>
          <button onClick={() => addToast("Warn!", { appearance: "warning" })}>
            Warn
          </button>
          <button onClick={() => addToast("Info!", { appearance: "info" })}>
            Info
          </button>
          <button onClick={() => addToast("Error!", { appearance: "error" })}>
            Error!
          </button>
        </div>
   </main>
  )
}
export default Topics;