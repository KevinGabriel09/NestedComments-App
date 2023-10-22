import './comments.css'
const Comments = ({comments}) => {
    return (
      <div>
        <div className="comment-container">
          <h3>{comments.text}</h3>
          <h3>Hello! How are you?</h3>
          <div>
            <button>Reply</button>
            <button>Delete</button>
          </div>
        </div>
        <div>
          {comments?.replies?.map((arr)=>(
            <Comments key={arr.id} comments={arr}/>
          ))}
        </div>
      </div>
    );
  };
  
  export default Comments;