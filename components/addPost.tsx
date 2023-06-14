import {useState} from 'react'

export default function AddPost(props) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addPost(title, body);
        setTitle('');
        setBody('');
    };    
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <input 
                    name="title" 
                    placeholder="What is the heading of your article?" 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="input-container">
                <textarea 
                    placeholder="Type your article" 
                    name="body" 
                    value={body} 
                    onChange={(e) => setBody(e.target.value)}>
                </textarea>
            </div>
            <button type="submit" className="btn-submit">Add Post</button>
        </form>
    )
}