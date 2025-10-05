import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#2c7a7b",
        color: "black",
        padding: "10px",
        marginTop: "40px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <h4>Explore</h4>
          <p>Home</p>
          <p>Questions</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>

        <div>
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Help</p>
          <p>Contact Us</p>
        </div>

        <div>
          <h4>Stay connected</h4>

          <span style={{ marginRight: "10px", cursor: "pointer" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              width="24"
              height="24"
            />
          </span>

          <span style={{ marginRight: "10px", cursor: "pointer" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
              width="24"
              height="24"
            />
          </span>

          <span style={{ marginRight: "10px", cursor: "pointer" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
              width="24"
              height="24"
            />
          </span>
        </div>
      </div>

      {/* Bottom section */}
      <div
        style={{ textAlign: "center", marginTop: "20px", paddingTop: "10px" }}
      >
        <h4>DEV@Deakin 2022</h4>

        <div>
          <span style={{ margin: "0 15px", cursor: "pointer" }}>
            Privacy Policy
          </span>
          <span style={{ margin: "0 15px", cursor: "pointer" }}>Terms</span>
          <span style={{ margin: "0 15px", cursor: "pointer" }}>
            Code of Conduct
          </span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;