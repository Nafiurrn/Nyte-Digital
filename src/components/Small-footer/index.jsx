import React from "react";

const SmallFooter = () => {
  return (
    <footer className="footer-half sub-bg">
      <div className="container">
        <div className="copyrights text-center mt-0">
          <p>
            © {new Date().getFullYear()}, Developed and Designed by
            <a>&nbsp;NyteDigital</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SmallFooter;
