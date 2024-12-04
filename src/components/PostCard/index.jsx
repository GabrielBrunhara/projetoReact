import './styles.css';

export const PostCard = ({title, body, cover, id}) => (

    <div className="post-card">
        <img src={cover} alt={title} />
        <div className='post-card-content'>
            <h2> {title} </h2>
            <br />
            <h3>Id: {id} </h3>
            <br />
            <p> {body} </p>
        </div>
    </div>
);


/**
export const PostCard = ({post} ou props) => { - passando o props inteiro
    //const post = props.post;
    //ou
    //const {post} = props;
    
    //return útil apenas se tiver alguma lógica/função aqui.

    return (
        <div className="post">
            <img src={post.cover} alt={post.title} />
            <div key={post.id} className='post-content'>
                <h1> {post.title} </h1>
                <p> {post.body} </p>
            </div>
        </div>
    );
}*/