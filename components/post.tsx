import styles from "../styles/Topics.module.css"

export default function Post(props) {
    return (
        <div className={styles.postcard}>
            <h3 className="post-title">{props.title}</h3>
            <p className="post-body">{props.body}</p>
            <button 
                className="btn-delete" 
                onClick={() => props.deletePost(props.id)}
            >Delete</button>
        </div>
    )   
}