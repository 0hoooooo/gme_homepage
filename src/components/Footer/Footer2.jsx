import "../../css/Footer/Footer2.css";

const Footer2 = () => {
  return (
    <>
      <div id="footer_outer">
        <div className="footer_outer_row" id="copyright" data-layout="default">
          <div className="container_footer2">
            <div className="column1">
              <p>
                © 2023 GME Remittance. |{" "}
                <a href="/company/terms-conditions" target="_blank">
                  Terms &amp; Conditions
                </a>
                | <a href="#">Privacy Policy</a>
              </p>
            </div>

            <div className="column2">
              <ul className="social"></ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer2;
