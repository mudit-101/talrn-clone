import React from "react";
import "./Developers.css";

const developers = [
  { name: "Garg R", role: "Senior iOS Developer", company: "PayTM", img: "" },
  { name: "Pradhan R", role: "Lead iOS Developer", company: "Standard Chartered", img: "" },
  { name: "Diouf O", role: "Senior iOS Developer", company: "Apple", img: "" },
  { name: "Fawaz A", role: "Senior Software Engineer", company: "Shopify", img: "" },
];

export default function Developers() {
  return (
    <section className="developers">
      {developers.map((dev, index) => (
        <div key={index} className="card">
          <img src={dev.img} alt={dev.name} />
          <h3>{dev.name}</h3>
          <p className="role">{dev.role}</p>
          <p className="company">Worked at <b>{dev.company}</b></p>
        </div>
      ))}
    </section>
  );
}
