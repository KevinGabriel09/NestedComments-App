
import { useState } from 'react';
import Comments from './components/comments/comments'
import { commentData } from './data/commentData';

function App() {
  const [comments, setComments]= useState(commentData)
  return (
    <div className="App">
      <Comments key={comments.id} comments={comments}/>
    </div>
  );
}

export default App;
