// Importing Style
import './style.css';

// Importing Components
import NavBar from '../../components/Navbarcomponent';
import ArticleCard from '../../components/CardComponent';

// Importing Assets
import Mount from '../../assets/png/mountain.png';
import Avathar from '../../assets/png/aavathar.png';
import Wall from '../../assets/png/wall.png';
import Car from '../../assets/png/car.png';

export default function Home() {
  return (
    <div>
      <div style={{ position: 'sticky' }}>
        <NavBar />
      </div>
      <div>
        <div style={{ height: 340, width: '100%' }} className="big-img position-relative">
          <div className="position-absolute bottom-0 sart-0 p-5 text-white d-flex flex-column align-items-start">
            <h2>Computer Engineering</h2>
            <p>142,765 Computer Engineers follow this</p>
          </div>
        </div>
        <div
          className=""
          style={{ paddingLeft: '10%', paddingRight: '10%', textDecorationColor: '#8A8A8A', marginTop: '1%' }}
        >
          <div className="d-flex flex-row">
            <div className="">All Posts(32)</div>
            <div className="px-2">Article</div>
            <div className="px-2">Event</div>
            <div className="px-2">Education</div>
            <div className="px-2">Job</div>
            <div className="" style={{ marginLeft: 'auto' }}>
              <button type="button" className="btn btn-sm" style={{ marginRight: '8px', backgroundColor: '#EDEEF0' }}>
                Write a Post&nbsp;&nbsp;<span className="bi bi-caret-down-fill"></span>
              </button>
              <button type="button" className="btn btn-sm btn-primary">
                <span>
                  <i class="bi bi-people-fill"></i>
                </span>
                &nbsp;&nbsp; Join Group
              </button>
            </div>
          </div>
          <div className="horizontal-line"></div>
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: 15 }}>
              <ArticleCard
                imageUrl={Mount}
                cardTitle1="✍️ Article"
                cardTitle2="What if famous brands had regular fonts?<br/> Meet RegulaBrands!"
                cardText="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                authorImage={Avathar}
                authorName="Sarthak Kamra"
                viewCount="1.4k"
              />
              <ArticleCard
                imageUrl={Wall}
                cardTitle1="🔬️ Education"
                cardTitle2="Tax Benefits for Investment under National Pension<br/> Scheme launched by Government"
                cardText="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                authorImage={Avathar}
                authorName="Sarah West"
                viewCount="1.4k"
              />
              <ArticleCard
                imageUrl={Car}
                cardTitle1="🗓️ Meetup"
                cardTitle2="Finance & Investment Elite Social Mixer @Lujiazui"
                cardText="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                authorImage={Avathar}
                authorName="Sarthak Kamra"
                viewCount="1.4k"
                date="Fri, 12 Oct, 2018"
                location="Ahmedabad, India"
              />
              <ArticleCard
                cardTitle1="💼️ Job"
                cardTitle2="Software Developer"
                cardText="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                authorImage={Avathar}
                authorName="Sarthak Kamra"
                viewCount="1.4k"
                business=" Innovaccer Analytics Private Ltd."
                location="Noida, India"
              />
            </div>
            <div className="mt-5" style={{ width: 300, marginLeft: 30 }}>
              <>
                <div className="">
                  <div className="d-flex align-items-center border-bottom border-2 rounded-0">
                    <i className="bi bi-geo-alt-fill"></i>
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Enter your Location"
                      style={{ fontSize: 15, marginTop: 0 }}
                    />
                    <i className="bi bi-x" style={{ fontSize: 25 }}></i>
                  </div>
                  <div className="d-flex mt-4 text-muted">
                    <i className="bi bi-exclamation-circle px-2 h5"></i>
                    <p className="w-75" style={{ fontSize: 10 }}>
                      Your location will help us serve better and extend a personalised experience.
                    </p>
                  </div>
                  <div className="d-flex mt-4 mb-3">
                    <i className="bi bi-hand-thumbs-up-fill px-1 fs-5 "></i>
                    <h1 className="h6 px-1 mt-2" style={{ letterSpacing: '2px', fontSize: 15 }}>
                      RECOMMENDED GROUPS
                    </h1>
                  </div>
                  <div className="d-flex mt-2 flex-column ">
                    <div className="d-flex">
                      <img src={Avathar} alt="User Avatar" className="avatar avatar-sm" />
                      <div className="" style={{ marginLeft: 15, marginTop: 12 }}>
                        Lesiure
                      </div>
                      <button
                        className="btn btn-sm rounded-5"
                        style={{ marginLeft: 'auto', backgroundColor: '#EDEEF0', width: 100 }}
                      >
                        follow
                      </button>
                    </div>
                    <div className="d-flex mt-2">
                      <img src={Avathar} alt="User Avatar" className="avatar avatar-sm" />
                      <div className="" style={{ marginLeft: 15, marginTop: 12 }}>
                        Lesiure
                      </div>
                      <button
                        className="btn btn-sm rounded-5"
                        style={{ marginLeft: 'auto', backgroundColor: '#EDEEF0', width: 100 }}
                      >
                        follow
                      </button>
                    </div>
                    <div className="d-flex mt-2">
                      <img src={Avathar} alt="User Avatar" className="avatar avatar-sm" />
                      <div className="" style={{ marginLeft: 15, marginTop: 12 }}>
                        Lesiure
                      </div>
                      <button
                        className="btn btn-sm rounded-5"
                        style={{ marginLeft: 'auto', backgroundColor: '#EDEEF0', width: 100 }}
                      >
                        follow
                      </button>
                    </div>

                    <button
                      className="btn btn-link rounded-5 mt-2"
                      style={{ textDecoration: 'none', marginLeft: 'auto', fontSize: 12 }}
                    >
                      See more...
                    </button>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
