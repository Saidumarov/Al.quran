import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./nav.scss";

const Nav = () => {
  const [right, setRight] = useState();

  const toggleTheme = () => {
    const elRoot = document.documentElement;
    let dataTheme = elRoot.getAttribute("data-theme");
    let newTheme = dataTheme === "light" ? "light" : "light";
    elRoot.setAttribute("data-theme", newTheme);
    setRight(1);
  };

  const toggleTheme1 = () => {
    const elRoot = document.documentElement;
    let dataTheme = elRoot.getAttribute("data-theme");
    let newTheme = dataTheme === "light" ? "dark" : "dark";
    elRoot.setAttribute("data-theme", newTheme);
    setRight(45);
  };
  return (
    <>
      <section>
        <nav>
          <div className="nav">
            <h1>Logo</h1>
            <div className="ul">
              <p>О компании</p>
              <p>Портфолио</p>
              <p>Услуги</p>
              <p>Контакты</p>
            </div>
            <div className="modul2">
              <div className="modul">
                <div className="modul-dak" onClick={toggleTheme}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_20_3541)">
                      <path
                        d="M15 20C17.7614 20 20 17.7614 20 15C20 12.2386 17.7614 10 15 10C12.2386 10 10 12.2386 10 15C10 17.7614 12.2386 20 15 20Z"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.75 15H5M15 3.75V5M25 15H26.25M15 25V26.25M7 7L7.875 7.875M23 7L22.125 7.875M22.125 22.125L23 23M7.875 22.125L7 23"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_20_3541">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="modul-light" onClick={toggleTheme1}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_20_3536)">
                      <path
                        d="M15 3.74999C15.165 3.74999 15.3287 3.74999 15.4912 3.74999C13.8854 5.24212 12.8532 7.2498 12.5741 9.42402C12.295 11.5982 12.7865 13.8015 13.9634 15.6509C15.1402 17.5003 16.9279 18.8788 19.0157 19.5468C21.1035 20.2149 23.3594 20.1302 25.3912 19.3075C24.6096 21.1881 23.3322 22.8213 21.6952 24.0328C20.0582 25.2443 18.123 25.9888 16.0961 26.1867C14.0692 26.3847 12.0265 26.0287 10.1861 25.1567C8.34562 24.2848 6.77636 22.9296 5.64571 21.2357C4.51505 19.5419 3.86541 17.5728 3.76608 15.5387C3.66675 13.5046 4.12145 11.4816 5.08169 9.68563C6.04192 7.88965 7.47167 6.38802 9.21843 5.34091C10.9652 4.29379 12.9634 3.74048 15 3.73999V3.74999Z"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_20_3536">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="yum" style={{ left: right }}></div>
              </div>
              <div className="tel">
                <p className="tt">+998 90 777-77-77</p>
                <p>chotatam@gmail.com</p>
              </div>
              <button className="zvanok">Заказать звонок</button>
            </div>
          </div>
        </nav>
      </section>
      {/* <Link to="/min-page">df</Link>
      <br /> */}
      {/* <Link to="/portfolio">df</Link>
      <br />
      <Link to="/yangliklar">df</Link> */}
     <Outlet />
    </>
  );
};

export default Nav;
