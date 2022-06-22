import React from 'react'
import Head from 'next/head'

const Home1 = (props) => {
  return (
    <>
      <div className="home1-container">
        <Head>
          <title>Home1 - Copy of Copy of Landing Page1</title>
          <meta
            property="og:title"
            content="Home1 - Copy of Copy of Landing Page1"
          />
        </Head>
        <div data-role="Header" className="home1-navbar-container">
          <div className="home1-navbar">
            <div className="home1-left-side">
              <img
                alt="image"
                src="/playground_assets/22978-200h.png"
                className="home1-image"
              />
              <div data-type="BurgerMenu" className="home1-burger-menu">
                <svg viewBox="0 0 1024 1024" className="home1-icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
              <div className="home1-links-container">
                <a href="#angebote" className="home1-link anchor">
                  Angebote
                </a>
                <a href="#kosten" className="home1-link1 anchor">
                  Kosten
                </a>
                <a href="#team" className="home1-link2 anchor">
                  Team
                </a>
                <a href="#kontakt" className="home1-link3 anchor">
                  Kontakt
                </a>
              </div>
            </div>
            <div className="home1-right-side">
              <a href="#kontakt" className="home1-cta-btn anchor button">
                Kontakt aufnehmen
              </a>
            </div>
            <div data-type="MobileMenu" className="home1-mobile-menu">
              <div className="home1-container1">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="home1-image1"
                />
                <div data-type="CloseMobileMenu" className="home1-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home1-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home1-links-container1">
                <a href="#resources" className="home1-link4 anchor">
                  Resources
                </a>
                <span className="home1-link5 anchor">Inspiration</span>
                <span className="home1-link6 anchor">Process</span>
                <span className="home1-link7 anchor">Our story</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home1-features">
          <div className="home1-hero-text">
            <h1 className="home1-text">
              <span>IT-Reparatur Kormann</span>
              <span className="home1-text02"></span>
            </h1>
          </div>
          <div className="home1-hero-text1">
            <span className="home1-text03">
              Du suchst ein kompetenten und Ausgebildenden Fachmann in Thema
              Hard und Software?
            </span>
          </div>
          <div className="home1-hero-text2">
            <span className="home1-text04">
              Dann bist du hier genau richtig
            </span>
          </div>
        </div>
        <div className="home1-features1">
          <div className="home1-hero-text3">
            <h1>
              <span>IT-Reparatur Kormann</span>
              <span className="home1-text07"></span>
            </h1>
          </div>
          <div id="angebote" className="home1-features2">
            <div className="home1-features-card">
              <div className="home1-icon-container">
                <svg viewBox="0 0 1024 1024" className="home1-icon04">
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className="home1-text-container">
                <span className="home1-heading card-Heading">
                  Handy Reperatur
                </span>
                <span className="home1-text08">
                  Reparatur von kaputten Samsung und Apple Handy Bildschirmen
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="home1-container2">
              <div className="home1-features-card1">
                <div className="home1-icon-container1">
                  <svg viewBox="0 0 1024 1024" className="home1-icon07">
                    <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                    <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                  </svg>
                </div>
                <div className="home1-text-container1">
                  <span className="home1-heading1 card-Heading">
                    PC-Reperatur
                  </span>
                  <span className="home1-text09">
                    <span className="home1-text10">
                      Beheben von Hard- und Softwareproblemen.
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="home1-features-card2">
              <div className="home1-icon-container2">
                <svg viewBox="0 0 1024 1024" className="home1-icon10">
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className="home1-text-container2">
                <span className="home1-heading2 card-Heading">Beratung</span>
                <span className="home1-text11">
                  Kompetente Beratung zum Thema Hardware und Software, sowie die
                  perfekte Zusammenstellung eines Gaming- oder auch Arbeits-
                  PC&apos;s.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home1-features3">
          <h1 className="home1-text12">Was würde dich das kosten?</h1>
        </div>
        <div className="home1-features4">
          <h1 id="team">Unser Team</h1>
          <div className="home1-team">
            <div className="home1-heading-container">
              <span>
                Ausgebildender Fachinformatiker mit viel Erfahrungen in Thema
                Computer und Handy&apos;s
              </span>
              <span className="home1-text15 section-Text">
                <span className="home1-text16">&amp;#8203;</span>
              </span>
            </div>
            <div className="home1-cards-container">
              <div className="home1-team-card">
                <div className="home1-avatar-container">
                  <svg viewBox="0 0 1024 1024" className="home1-icon13">
                    <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                  </svg>
                </div>
                <span className="home1-name card-Heading">
                  <span>Christoph</span>
                </span>
                <span className="home1-position card-Text">
                  Fachinformatiker
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home1-features5">
          <div id="kontakt" className="home1-get-in-touch">
            <h1>Kontaktier uns!</h1>
            <div className="home1-content-container">
              <div className="home1-form-container">
                <span className="home1-heading3 bigCard-Heading">
                  Schickt uns eine Nachricht
                </span>
                <input
                  type="text"
                  id="name"
                  required="true"
                  placeholder="Name"
                  className="home1-name1 input"
                />
                <input
                  type="text"
                  id="mail"
                  required="true"
                  placeholder="E-mail"
                  className="home1-email input"
                />
                <textarea
                  id="message"
                  placeholder="Deine Nachricht"
                  className="home1-message textarea"
                ></textarea>
                <a
                  href="mailto:christophkormann@web.de?subject=test"
                  className="home1-cta-btn1 anchor button"
                >
                  Senden
                </a>
              </div>
              <div className="home1-container3"></div>
            </div>
          </div>
          <div className="home1-location-1">
            <span className="home1-heading4">Wiesenttal, Bayern</span>
            <div className="home1-adress">
              <svg viewBox="0 0 1024 1024" className="home1-icon15">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <span className="section-Text">Neudorf</span>
            </div>
            <div className="home1-email1">
              <svg viewBox="0 0 1024 1024" className="home1-icon17">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <span className="section-Text">christophkormann@web.de</span>
            </div>
            <div className="home1-phone">
              <svg
                viewBox="0 0 804.5714285714286 1024"
                className="home1-icon19"
              >
                <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
              </svg>
              <span className="section-Text">01607815800</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home1-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #a9bee6;
          }
          .home1-navbar-container {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 100;
            position: sticky;
            box-shadow: 5px 5px 10px 0px #b9b9b9;
            align-items: center;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .home1-navbar {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: 12px;
            justify-content: space-between;
          }
          .home1-left-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home1-image {
            width: 50px;
            align-self: center;
            object-fit: cover;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home1-burger-menu {
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }
          .home1-icon {
            width: 36px;
            height: 36px;
          }
          .home1-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home1-link {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home1-link1 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home1-link2 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home1-link3 {
            text-decoration: none;
          }
          .home1-right-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home1-cta-btn {
            color: var(--dl-color-gray-white);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: var(--dl-radius-radius-radius24);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home1-mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-doubleunit);
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: #fff;
          }
          .home1-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home1-image1 {
            width: 50px;
            align-self: center;
            object-fit: cover;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home1-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home1-icon02 {
            width: 24px;
            height: 24px;
          }
          .home1-links-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home1-link4 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home1-link5 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home1-link6 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home1-link7 {
            text-decoration: none;
          }
          .home1-features {
            width: 100%;
            height: 646px;
            display: flex;
            align-self: center;
            align-items: center;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            background-image: linear-gradient(
              to bottom,
              #ffffff 20%,
              #c8e9f9 100%
            );
          }
          .home1-hero-text {
            width: 100%;
            height: 145px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home1-text02 {
            color: transparent;
          }
          .home1-hero-text1 {
            width: 100%;
            height: 119px;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home1-hero-text2 {
            width: 100%;
            height: 158px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home1-features1 {
            width: 100%;
            height: 1444px;
            display: flex;
            align-self: center;
            align-items: center;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            background-image: linear-gradient(to top, #89d4ef 0%, #c8e9f9 100%);
          }
          .home1-hero-text3 {
            width: 100%;
            height: 257px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home1-text07 {
            color: transparent;
          }
          .home1-features2 {
            width: 100%;
            height: 1321px;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-self: center;
            align-items: center;
            padding-top: 43px;
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home1-features-card {
            width: 365px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home1-icon-container {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
          }
          .home1-icon04 {
            width: 36px;
            height: 36px;
            min-width: 36px;
            min-height: 36px;
          }
          .home1-text-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home1-heading {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home1-text08 {
            color: #000000;
            font-size: 20px;
            font-style: normal;
            text-align: left;
            font-family: Raleway;
            font-weight: 400;
            line-height: 1.55;
            text-transform: none;
            text-decoration: none;
          }
          .home1-container2 {
            flex: 0 0 auto;
            width: auto;
            height: 264px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home1-features-card1 {
            width: 402px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home1-icon-container1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
          }
          .home1-icon07 {
            width: 36px;
            height: 36px;
            min-width: 36px;
            min-height: 36px;
          }
          .home1-text-container1 {
            width: 382px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home1-heading1 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home1-text09 {
            color: #ffffff;
            font-size: 20px;
            font-style: normal;
            text-align: left;
            font-family: Raleway;
            font-weight: 400;
            line-height: 1.55;
            text-transform: none;
            text-decoration: none;
          }
          .home1-text10 {
            color: #000000;
          }
          .home1-features-card2 {
            width: 30%;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-doubleunit);
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home1-icon-container2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
          }
          .home1-icon10 {
            width: 36px;
            height: 36px;
            min-width: 36px;
            min-height: 36px;
          }
          .home1-text-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home1-heading2 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home1-text11 {
            color: #000000;
            font-size: 20px;
            font-style: normal;
            text-align: left;
            font-family: Raleway;
            font-weight: 400;
            line-height: 1.55;
            text-transform: none;
            text-decoration: none;
          }
          .home1-features3 {
            width: 100%;
            height: 1098px;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: 116px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-image: linear-gradient(
              to bottom,
              #89d4ef 0%,
              #a9bee6 70%
            );
          }
          .home1-features4 {
            width: 100%;
            height: 650px;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: 37px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: 1px;
          }
          .home1-team {
            width: 100%;
            height: 678px;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: 44px;
          }
          .home1-heading-container {
            width: 45%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home1-text15 {
            color: var(--dl-color-gray-700);
            text-align: center;
          }
          .home1-text16 {
            color: #464545;
          }
          .home1-cards-container {
            width: 100%;
            height: 100px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home1-team-card {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            flex-direction: column;
            padding-bottom: 32px;
          }
          .home1-avatar-container {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home1-icon13 {
            width: 48px;
            height: 48px;
          }
          .home1-name {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home1-position {
            color: var(--dl-color-gray-700);
          }
          .home1-features5 {
            width: 100%;
            height: 1332px;
            display: flex;
            align-self: center;
            align-items: center;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home1-get-in-touch {
            width: 100%;
            height: 1044px;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: 91px;
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
          }
          .home1-content-container {
            width: 100%;
            height: 619px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: #a9bee6;
          }
          .home1-form-container {
            width: 703px;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            background-color: var(--dl-color-gray-900);
          }
          .home1-heading3 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home1-name1 {
            width: 100%;
            border: none;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home1-email {
            width: 100%;
            border: none;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home1-message {
            width: 100%;
            border: none;
            height: 140px;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home1-cta-btn1 {
            color: var(--dl-color-gray-white);
            text-align: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius24);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home1-container3 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home1-location-1 {
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
            justify-content: center;
          }
          .home1-heading4 {
            font-size: 24px;
            font-style: normal;
            font-family: Roboto;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home1-adress {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home1-icon15 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home1-email1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home1-icon17 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home1-phone {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home1-icon19 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          @media (max-width: 991px) {
            .home1-hero-text {
              width: 80%;
            }
            .home1-hero-text1 {
              width: 80%;
            }
            .home1-hero-text2 {
              width: 80%;
            }
            .home1-hero-text3 {
              width: 80%;
            }
            .home1-cards-container {
              justify-content: center;
            }
            .home1-form-container {
              width: 60%;
            }
            .home1-location-1 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 767px) {
            .home1-burger-menu {
              display: flex;
              padding: var(--dl-space-space-halfunit);
              border-radius: var(--dl-radius-radius-radius4);
              background-color: var(--dl-color-gray-black);
            }
            .home1-icon {
              fill: var(--dl-color-gray-white);
            }
            .home1-links-container {
              display: none;
            }
            .home1-features {
              width: 100%;
            }
            .home1-features-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home1-features-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home1-features-card2 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home1-heading-container {
              width: 100%;
            }
            .home1-content-container {
              width: 100%;
              flex-direction: column;
            }
            .home1-form-container {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 480px) {
            .home1-cta-btn {
              font-size: 16px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home1-features {
              height: 100%;
              align-self: center;
              align-items: center;
              padding-top: 0px;
              padding-bottom: 0px;
              justify-content: center;
            }
            .home1-hero-text {
              width: 100%;
              height: 30%;
              position: relative;
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home1-text {
              width: 90%;
              height: 100%;
              align-self: center;
            }
            .home1-hero-text1 {
              width: 100%;
              height: 40%;
              position: relative;
              align-items: center;
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .home1-text03 {
              width: 80%;
              height: 100%;
              align-self: center;
            }
            .home1-hero-text2 {
              width: 100%;
              height: 30%;
              position: relative;
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home1-text04 {
              height: 100%;
            }
            .home1-features1 {
              height: 929px;
              padding-top: 0px;
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home1-hero-text3 {
              width: 100%;
              position: relative;
            }
            .home1-features2 {
              height: 724px;
              padding-top: 98px;
              padding-bottom: 13px;
            }
            .home1-features-card {
              width: 100%;
              padding-left: 0px;
            }
            .home1-container2 {
              height: 159px;
            }
            .home1-features-card1 {
              width: 464px;
              padding-left: 0px;
            }
            .home1-icon07 {
              align-self: flex-start;
            }
            .home1-features-card2 {
              width: 100%;
              padding-left: 0px;
            }
            .home1-icon-container2 {
              align-self: flex-start;
              align-items: flex-start;
            }
            .home1-features3 {
              padding-top: var(--dl-space-space-fiveunits);
              padding-left: 0px;
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home1-text12 {
              width: 351px;
            }
            .home1-features4 {
              padding-top: var(--dl-space-space-fiveunits);
              padding-left: 0px;
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home1-team {
              padding-top: var(--dl-space-space-fiveunits);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home1-heading-container {
              width: 435px;
            }
            .home1-team-card {
              align-items: center;
              justify-content: flex-start;
            }
            .home1-icon13 {
              align-self: center;
            }
            .home1-features5 {
              padding-top: var(--dl-space-space-fiveunits);
              padding-left: 0px;
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home1-get-in-touch {
              width: 478px;
              height: 690px;
              padding-top: 75px;
              padding-left: 0px;
              margin-bottom: 0px;
              padding-right: 0px;
            }
            .home1-content-container {
              width: 100%;
              height: 448px;
              padding-left: 0px;
            }
            .home1-form-container {
              width: 395px;
              height: 572px;
              padding: var(--dl-space-space-tripleunit);
              margin-right: 0px;
              padding-bottom: 56px;
            }
            .home1-heading3 {
              text-align: center;
            }
            .home1-location-1 {
              margin-right: 0px;
              margin-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home1
