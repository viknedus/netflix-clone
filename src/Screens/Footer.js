import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="img">
        <img
          src="https://play-lh.googleusercontent.com/IO3niAyss5tFXAQP176P0Jk5rg_A_hfKPNqzC4gb15WjLPjo5I-f7oIZ9Dqxw2wPBAg"
          alt=""
        />
      </div>

      <div className="txt">
        <p>
          <a href="https://viknedus.com">@VikNedus </a> |{" "}
          <a href="https://github.com/viknedus"> GitHub</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
