import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/join"); // Redirect to Join page
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Hire the Best iOS Developers</h1>
          <p>
            Connect with top pre-vetted iOS developers from around the world.
            Hire remote engineers with exceptional technical and communication skills.
          </p>

          <form onSubmit={handleSubmit} className="email-form">
            <input type="email" placeholder="Enter your work email" required />
            <button type="submit">Hire iOS Dev</button>
          </form>

          <span className="apply-link">
            Looking for remote iOS jobs?{" "}
            <Link to="/join">Apply here</Link>
          </span>
        </div>
      </section>

      {/* Developer Cards Section */}
      <section className="developers">
        <div className="dev-card">
          <img src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=" alt="Garg R" />
          <h3>Garg R</h3>
          <p className="role">Senior iOS Developer</p>
          <p className="company">Worked at PayTM</p>
        </div>
        <div className="dev-card">
          <img src="https://thumbs.dreamstime.com/b/focused-man-beard-sitting-desk-looking-directly-camera-office-well-groomed-sits-possibly-business-meeting-378192109.jpg" alt="Pradhan R" />
          <h3>Pradhan R</h3>
          <p className="role">Lead iOS Developer</p>
          <p className="company">Worked at Standard Chartered</p>
        </div>
        <div className="dev-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_vrwwAJQ8PlPcroJ0aFPEJu3L_jsnOgmx3pCtRL4d3CnrhcZkMOSNm18y2E5t0DnJbs&usqp=CAU" alt="Diouf O" />
          <h3>Diouf O</h3>
          <p className="role">Senior iOS Developer</p>
          <p className="company">Worked at Apple</p>
        </div>
        <div className="dev-card">
          <img src="https://thumbs.dreamstime.com/b/smiling-young-professional-modern-desk-giving-thumbs-up-to-camera-confident-satisfied-working-his-laptop-406724433.jpg" alt="Fawaz A" />
          <h3>Fawaz A</h3>
          <p className="role">Software Engineer</p>
          <p className="company">Worked at Shopify</p>
        </div>
      </section>

      {/* Augment Section */}
      <section className="augment">
        <h2>Augment your team with highly-skilled iOS Developers</h2>
        <button className="btn-light">View Profiles</button>
      </section>

      {/* Industry Section */}
      <section className="industry">
        <div className="industry-text">
          <h2>Scale your team with Talrn's immediately available resources</h2>
          <p>
            Find pre-vetted iOS developers that have previously worked in the
            same industry instantly.
          </p>
          <p className="industry-question">What is your industry?</p>
          <div className="tags">
            <span>Healthcare</span>
            <span>Automotive</span>
            <span>Banking</span>
            <span>Capital Markets</span>
            <span>Travel</span>
            <span>Digital Commerce</span>
          </div>
        </div>
        <div className="industry-images">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="dev1" />
          <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="dev2" />
          <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="dev3" />
          <img src="https://randomuser.me/api/portraits/men/70.jpg" alt="dev4" />
          <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="dev5" />
          <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="dev6" />
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="dev7" />
          <img src="https://randomuser.me/api/portraits/women/19.jpg" alt="dev8" />
          <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="dev9" />
        </div>
      </section>
    </div>
  );
}
