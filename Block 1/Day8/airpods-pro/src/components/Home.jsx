import "./Home.css";
export const Home = () => {
  return (
    <div className="container">
      <div className="banner">
        <div className="header">
          <div className="logo">team</div>
          <div className="blue-dot"></div>
          <div className="link">Products</div>
          <div className="links">Services</div>
          <div className="links">Contact</div>
          <div className="links">Log in</div>
          <div className="get-access">Get Access</div>
        </div>
        <div className="actuolone">
          <div className="addone">Instant collabrations for remote teams</div>
          <div className="addtwo">
            All in one for your remote team chats, collabrations and track
            projects
          </div>
          <div className="addthree">
            <input className="email" placeholder="Email" type="text" />
            <button type="button" className="getStarted">
              Get early access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
