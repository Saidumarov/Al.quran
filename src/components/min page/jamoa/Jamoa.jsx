import React, { useEffect, useState } from "react";
import "./jamo.scss";
const Jamoa = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stopa, setStopa] = useState(false);
  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth || document.documentElement.clientWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth || document.documentElement.clientWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [imageList] = useState([
    {
      id: 1,
      name: `Saidalixon Sobirov`,
      description: ` Frontend dasturchi`,
      margn:14,


    },
    {
      id: 2,
      name: `Saidalixon Sobirov`,
      description: ` Frontend dasturchi`,
      margn:20,
    },
    {
      id: 3,
      name: `Saidalixon Sobirov`,
      description: ` Frontend dasturchi`,
      margn:20,

    },
    {
      id: 4,
      name: `Saidalixon Sobirov`,
      description: ` Frontend dasturchi`,
      margn:20,

    },
    {
      id: 5,
      name: `Saidalixon Sobirov`,
      description: ` Frontend dasturchi`,
      margn:20,

    },
    {
      id: 6,
      name: `Saidalixon Sobirov`,
      description: ` Frontend dasturchi`,
      margn:20,

    },
    {
      id: 7,
      name: `Saidalixon Sobirov`,
      description: ` Frontend dasturchi`,
      margn:20,

    },
    {
      id: 8,
      name: `Saidalixon Sobirov`,
      description: ` Frontend dasturchi`,
      margn:20,

    },
  ]);

  const changeImage = (step) => {
    let newIndex = currentIndex + step;

    if (newIndex > imageList.length - 4) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = imageList.length - 4;
    }

    setCurrentIndex(newIndex);
    setStopa(true);
  };

  useEffect(() => {
    let interval;

    return () => {
      clearInterval( interval);
    };
  }, [stopa]);

  const handlePrevClick = () => {
    changeImage(-1);
  };

  const handleNextClick = () => {
    changeImage(1);
  };

  let wiz = 0;

  if (screenWidth < 1290) {
    wiz = 100;
  } else if (screenWidth > 800) {
    wiz = 337;
  }

  return (
    <>
      <section>
        <div className="jamo-wrap">
          <h2>Bizning jamoa</h2>
          <div className="jamo-wrap-itme">
            <button className="nex1" onClick={handlePrevClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g clip-path="url(#clip0_0_448)">
                  <path
                    d="M25 10L15 20L25 30"
                    stroke="white"
                    stroke-width="3.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_448">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <div className="jamo-itme"  >
              {imageList.map((item, index) => (
                <div className="jamo-sledr"  style={{ transform: `translateX(${-currentIndex * wiz}px)` }}>
                <div className="jamo-cart"  key={index} style={{marginLeft:`${item.margn}px`}}>
                  <div className="jamo-img"></div>
                  <div className="jamo-cart-blog">
                    <p className="namej">{item.name}</p>
                    <div className="lin">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="102"
                        height="2"
                        viewBox="0 0 102 2"
                        fill="none"
                      >
                        <path
                          d="M1 1H101"
                          stroke="#2E2D2E"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                    <p className="des"> {item.description} </p>
                  </div>
                </div>
                </div>
              ))}
            </div>
            <button className="bac1" onClick={handleNextClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g clip-path="url(#clip0_0_453)">
                  <path
                    d="M15 30L25 20L15 10"
                    stroke="white"
                    stroke-width="3.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_453">
                    <rect
                      width="40"
                      height="40"
                      fill="white"
                      transform="translate(40 40) rotate(-180)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <div className="jamoa-left">
            
<svg width="1056" height="1514" viewBox="0 0 1056 1514" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_0_102)">
<rect x="-427" y="587.594" width="467" height="1233.79" rx="233.5" transform="rotate(-54.3739 -427 587.594)" fill="url(#paint0_linear_0_102)" fill-opacity="0.27"/>
</g>
<defs>
<filter id="filter0_f_0_102" x="-634.708" y="0.291504" width="1690.31" height="1513.69" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_0_102"/>
</filter>
<linearGradient id="paint0_linear_0_102" x1="-193.5" y1="587.594" x2="-193.5" y2="1821.39" gradientUnits="userSpaceOnUse">
<stop stop-color="#5454D4"/>
<stop offset="1" stop-color="#5454D4" stop-opacity="0.42"/>
</linearGradient>
</defs>
</svg>

          </div>
          <div className="jamoa-rig">
            
<svg width="1107" height="1451" viewBox="0 0 1107 1451" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_0_107)">
<rect x="448.5" y="1236.33" width="467" height="1233.79" rx="233.5" transform="rotate(-120 448.5 1236.33)" fill="url(#paint0_linear_0_107)" fill-opacity="0.27"/>
</g>
<defs>
<filter id="filter0_f_0_107" x="0.427979" y="0.428101" width="1731.14" height="1450.47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_0_107"/>
</filter>
<linearGradient id="paint0_linear_0_107" x1="682" y1="1236.33" x2="682" y2="2470.12" gradientUnits="userSpaceOnUse">
<stop stop-color="#C254D4"/>
<stop offset="1" stop-color="#C254D4" stop-opacity="0.42"/>
</linearGradient>
</defs>
</svg>

          </div>
        </div>
      </section>
    </>
  );
};

export default Jamoa;
