import React from "react";
import "./action.scss";

import mjos from "../../../assets/img/mjos.png"
const Action = () => {
  const galch = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="19" height="19" rx="3.5" stroke="#AAAAAA" />
    </svg>
  );

  return (
    <>
      <section>
        <div className="action-wrap">
          <div className="action-itme">
            <div className="action-itme-cart">
              <h2>
                Sizni bir finjon qahva ustida loyihangizni batafsil muhokama
                qilishga mamnuniyat ila taklif qilamiz.
              </h2>
              <form>
                <input type="name" id="name" placeholder="Ismingiz" required />
                <input
                  type="tel"
                  id="tel"
                  placeholder="Telefon raqamingiz"
                  required
                />
                <input
                  type="text"
                  placeholder="G'oyangiz xaqida qisqacha (Muhim emas)"
                  required
                />
                <button type="submit" hidden>
                  scsa
                </button>
              </form>
              <p className="p">Qanday xizmatlardan foydalanishni xoxlaysiz?</p>
              <div className="yarn-cart">
                <div className="tant">
                  <p className="tan">
                    {galch}
                    <span className="pa">Backend</span>
                  </p>
                  <p className="tan">
                    {galch}
                    <span className="pa">CRM ishlab chiqish</span>
                  </p>
                  <p className="tan">
                    {galch}
                    <span className="pa">
                      Internet magazin <br /> ishlab chiqish
                    </span>
                  </p>
                  <p className="tan">
                    {galch}
                    <span className="pa">Logotip va Brandbook</span>
                  </p>
                  <p className="tan">
                    {galch}
                    <span className="pa">Portal ishlab chiqish</span>
                  </p>
                  <p className="tan">
                    {galch}
                    <span className="pa">Veb dizayn</span>
                  </p>
                  <p className="tan">
                    {galch}
                    <span className="pa">Mobilograf</span>
                  </p>
                </div>
                <div className="tant1">
                  <p className="box">
                    {galch}
                    <span className="pa">Backend</span>
                  </p>
                  <p className="box">
                    {galch}
                    <span className="pa">Grafik dizayn</span>
                  </p>
                  <p className="box">
                    {galch}
                    <span className="pa">Motion dizayn</span>
                  </p>
                  <p className="box">
                    {galch}
                    <span className="pa">
                      Mobil ilova <br /> ishlab chiqish
                    </span>
                  </p>
                  <p className="box">
                    {galch}
                    <span className="pa">Veb sayt ishlab chiqish</span>
                  </p>
                  <p className="box">
                    {galch}
                    <span className="pa">SMM dizayn</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="action-itme-cart1">
              <div className="action-box">
                <h2 className="box-name">NIMANI MA'QUL KO'RASIZ?</h2>

                <div className="box-wrap">
                  <div className="box-madel">
                    <div className="box-img"></div>
                    <p>Achchiq kofe</p>
                  </div>
                  <div className="box-madel">
                    <div className="box-img1"></div>
                    <p>Sutli kofe</p>
                  </div>
                  <div className="box-madel">
                    <div className="box-img2"></div>
                    <p>Suv</p>
                  </div>
                  <div className="box-madel">
                    <div className="box-img3"></div>
                    <p>Choy</p>
                  </div>
                </div>
                <div className="mjos">
                  <img src={mjos} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="action-bg-img">
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Action;
