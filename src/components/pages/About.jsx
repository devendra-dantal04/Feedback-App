import React from "react";
import Card from "../shared/Card";
import { Link } from "react-router-dom";

const About = () => {
  return <Card>
    <div className="about">
        <h2>Our Services</h2>
        <p><ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Comtact</li>
        </ul></p>


        <Link to="/" >Back to Home</Link>
    </div>
  </Card>;
};

export default About;
