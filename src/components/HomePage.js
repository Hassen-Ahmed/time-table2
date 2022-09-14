//
import "./HomePage.css";
function HomePage(props) {
  return (
    <div className="homepage-contianer">
      <h1>Kids Time-Table</h1>
      <button className="homepage-btn" onClick={props.changeDispaly}>
        Start &rarr;
      </button>
      <h6>Copyright© {new Date().getFullYear()}</h6>
    </div>
  );
}

export default HomePage;
