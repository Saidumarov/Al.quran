import React, { useEffect, useState } from "react";
import "./blog.scss";
import blo from "../../../assets/img/s1.png";
import blo1 from "../../../assets/img/s2.png";
import blo2 from "../../../assets/img/s3.png";

const Blog = () => {
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
      title: `«QA» mutaxassisi qanday bo'lishi kerak?`,
      description: ` 🔥 Ma'lumki, «Najot Ta'lim»dagi kurslar qatoriga «QA», ya'ni «Dasturiy ta'minotni testlash» kursi ham qo'shilgan.`,
      imgblog: blo,
    },
    {
      id: 2,
      title: `«Najot Ta'lim» logosi haqida nimalarni bilasiz? `,
      description: ` «Najot Ta'lim» logosi Abstrac t logo mark turdagi logo hisoblanadi. Bu kabi logolarning ma'nosini bir martada ilg'ash qiyin bo'lishi mumkin.`,
      left: 27,
      imgblog: blo1,
    },
    {
      id: 3,
      title: ` 🙌 «TechJobs» kompaniyasi Java dasturchilarni maxsus «Deep interview»ga taklif qiladi!`,
      description: ` Intervyuda sizning oʻz sohangizdagi boʻshliqlaringiz, kamchiliklaringiz aniqlanib...`,
      left: 27,
      imgblog: blo2,
    },
    {
      id: 4,
      title: `«QA» mutaxassisi qanday bo'lishi kerak?`,
      description: ` 🔥 Ma'lumki, «Najot Ta'lim»dagi kurslar qatoriga «QA», ya'ni «Dasturiy ta'minotni testlash» kursi ham qo'shilgan.`,
      left: 27,
      imgblog: blo,
    },
    {
      id: 5,
      title: `«Najot Ta'lim» logosi haqida nimalarni bilasiz? `,
      description: ` «Najot Ta'lim» logosi Abstrac t logo mark turdagi logo hisoblanadi. Bu kabi logolarning ma'nosini bir martada ilg'ash qiyin bo'lishi mumkin.`,
      left: 27,
      imgblog: blo1,
    },
    {
      id: 6,
      title: ` 🙌 «TechJobs» kompaniyasi Java dasturchilarni maxsus «Deep interview»ga taklif qiladi!`,
      description: ` Intervyuda sizning oʻz sohangizdagi boʻshliqlaringiz, kamchiliklaringiz aniqlanib...`,
      left: 27,
      imgblog: blo2,
    },
  ]);

  const blogsvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clipPath="url(#clip0_0_403)">
        <path
          d="M15 4.16663H5.00004C4.07957 4.16663 3.33337 4.91282 3.33337 5.83329V15.8333C3.33337 16.7538 4.07957 17.5 5.00004 17.5H15C15.9205 17.5 16.6667 16.7538 16.6667 15.8333V5.83329C16.6667 4.91282 15.9205 4.16663 15 4.16663Z"
          stroke="#DEDEDE"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3334 2.5V5.83333"
          stroke="#DEDEDE"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.66663 2.5V5.83333"
          stroke="#DEDEDE"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.33337 9.16663H16.6667"
          stroke="#DEDEDE"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.33329 12.5H6.66663V14.1667H8.33329V12.5Z"
          stroke="#DEDEDE"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_403">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const changeImage = (step) => {
    let newIndex = currentIndex + step;

    if (newIndex > imageList.length - 3) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = imageList.length - 3;
    }

    setCurrentIndex(newIndex);
    setStopa(true);
  };

  useEffect(() => {
    let interval;

    return () => {
      clearInterval(interval);
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
    wiz = 458;
  }

  return (
    <>
      <section>
        <div className="blog-wrap">
          <h2>Blog yangiliklarimiz</h2>

          <div className="blog-wrap-itme">
            <button onClick={handlePrevClick} className="nex">
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
            <div className="blog-itme">
              <div
                className="blog-sledr"
                style={{ transform: `translateX(${-currentIndex * wiz}px)` }}
              >
                {imageList.map((item, index) => (
                  <div className="blog-sledr-cart"  key={index}
                    style={{ marginLeft:`${item.left}px` }}
                  >
                    <div
                      className="blog-cart-img"
                      style={{ backgroundImage: `url(${item.imgblog})` }}
                    ></div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <div className="sledr-bottom">
                      <p>#hi_tech</p>
                      <div className="itch">
                        {blogsvg}
                        <p>
                          14:45 <span className="yil"> 22/02/23</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={handleNextClick} className="bac">
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
        </div>
      </section>
    </>
  );
};

export default Blog;
