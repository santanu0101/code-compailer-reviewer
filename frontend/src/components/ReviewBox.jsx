const ReviewBox = ({ review, loading }) => (
    <div>
      <h3>AI Review</h3>
      {loading ? <p>🔄 Reviewing code... please wait.</p> : <pre>{review}</pre>}
    </div>
  );
  
  export default ReviewBox;
  