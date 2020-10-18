// Home page.
import React from "react";
import { Link, withRouter } from "react-router-dom";

const LandingPage = () => (
  <div>
    <h1>Landing Page</h1>

    <p>This page is public, accessible by everyone</p>

    <p>
      Est cillum sunt qui nulla esse mollit quis magna enim non non laborum
      culpa nisi. Amet do nisi minim amet dolor quis veniam fugiat exercitation
      duis anim occaecat. Mollit pariatur minim aute eiusmod est ad dolore
      labore fugiat deserunt quis. Aliquip dolor ex irure sunt voluptate
      exercitation voluptate incididunt.
    </p>
    <p>
        <Link to="/shownotes">See notes</Link>
    </p>
  </div>
);
export default LandingPage;