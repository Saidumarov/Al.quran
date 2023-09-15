import React from "react";
import "./phot.scss";
import radus from "../../../assets/img/radus.png";
import por from "../../../assets/img/por1.png"
const Photo = () => {
  return (
    <>
      <section>
        <div className="photo">
          <div className="photo-itme">
            <div className="photo-top">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="656"
                height="644"
                viewBox="0 0 656 644"
                fill="none"
              >
                <g opacity="0.5" filter="url(#filter0_f_0_47)">
                  <path
                    d="M223.474 -14.8568C342.888 -41.6645 363.155 -35.6794 618.773 -260.858C869.074 15.2512 560.786 96.2107 598.156 274.549C579.478 657.139 532.278 278.948 420.087 225.11C263.522 313.786 149.591 139.103 223.474 -14.8568Z"
                    fill="url(#paint0_linear_0_47)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_0_47"
                    x="0.42157"
                    y="-460.857"
                    width="917.249"
                    height="1104.62"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="100"
                      result="effect1_foregroundBlur_0_47"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_0_47"
                    x1="741.92"
                    y1="208.937"
                    x2="315.366"
                    y2="-118.715"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#267DFF" />
                    <stop offset="0.555364" stop-color="#ED0080" />
                    <stop offset="1" stop-color="#00FFE0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="photo-bottom">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1179"
                height="1016"
                viewBox="0 0 1179 1016"
                fill="none"
              >
                <g opacity="0.5" filter="url(#filter0_f_0_79)">
                  <path
                    d="M1022.24 860.352C789.435 811.719 743.126 792.301 353.039 865.989C-349.313 411.946 244.126 525.052 50.8051 311.976C-156.899 -81.3633 185.94 349.815 455.644 479.242C726.341 486.288 1077.65 744.882 1022.24 860.352Z"
                    fill="url(#paint0_linear_0_79)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_0_79"
                    x="-163.016"
                    y="0.181152"
                    width="1341.08"
                    height="1015.81"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="75"
                      result="effect1_foregroundBlur_0_79"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_0_79"
                    x1="-207.96"
                    y1="288.75"
                    x2="345.282"
                    y2="1233.93"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#267DFF" />
                    <stop offset="0.555364" stop-color="#ED0080" />
                    <stop offset="1" stop-color="#0075FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="photo-itme-min">
              <div className="pmin">
                <p className="p">
                  Biz veb-saytlar, ilovalarni <br /> ishlab chiqamiz
                </p>
                <p className="lorem">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do <br /> eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim <br /> ad minim veniam
                </p>
              </div>
              <div className="pmin1">
                <img src={radus} alt="" />
              </div>
            </div>
            <div className="photo-name">
<img src={por} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Photo;
