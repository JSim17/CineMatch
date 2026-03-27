const movie = {
  title: "Inception",
  image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg"
}

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px"}}>
      <div style={{
        border: "1px solid #ccc",
        borderRadius: "10px", 
        padding: "20px",
        width: "320px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}>
        <h2>{movie.title}</h2>

        <img
          src={movie.image}
          alt={movie.title}
          style={{ width: "100%", borderRadius: "10ox"}}
        />

        <div style={{ marginTop: "15px" }}>
          <button style={{ marginRight: "10px" }}>Dislike 👎</button>
          <button>Like 👍</button>
        </div>
      </div>
    </div>
  );
}

export default App;
