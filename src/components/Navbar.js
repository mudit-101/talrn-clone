// // import React from "react";
// // import { Link } from "react-router-dom";

// // export default function Navbar() {
// //   return (
// //     <nav className="navbar">
// //       <h2 className="logo">Talrn Clone</h2>
// //       <div>
// //         <Link to="/" className="nav-link">Home</Link>
// //         <Link to="/join" className="nav-link">Join</Link>
// //       </div>
// //     </nav>
// //   );
// // }

// import React from "react";
// import { Link } from "react-router-dom"; // ✅ Import Link
// import "./Navbar.css";

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">Talrn</div>
//       <ul className="nav-links">
//         <li>Why</li>
//         <li>Industries ▾</li>
//         <li>Find iOS Dev</li>
//         <li>Apply as Vendor</li>
//         <li>
//           <button className="btn">Hire iOS Dev</button>
//         </li>
//         <li>
//           {/* ✅ Wrap Login in a Link */}
//           <Link to="/login" className="login-link">
//             Login
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">Talrn</Link>
        </div>

        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/">Why</Link></li>
          <li><Link to="/">Industries ▾</Link></li>
          <li><Link to="/">Find iOS Dev</Link></li>
          <li><Link to="/">Apply as Vendor</Link></li>
          <li>
            <Link to="/join">
              <button className="btn">Hire iOS Dev</button>
            </Link>
          </li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

