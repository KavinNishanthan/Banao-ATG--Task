// Importing packges
import React from 'react';

const ArticleCard = ({
  imageUrl,
  cardTitle1,
  cardTitle2,
  cardText,
  authorImage,
  authorName,
  viewCount,
  date,
  location,
  business
}) => {
  return (
    <div className="container mt-3 mb-3">
      <div className="card" style={{ maxWidth: 700 }}>
        {imageUrl && <img src={imageUrl} className="card-img-top" alt="Card Image" />}
        <div className="card-body">
          <div style={{ textAlign: 'left' }}>
            <h5 className="card-title">{cardTitle1}</h5>
            <div className="d-flex flex-row ">
              <div>
                <h5 className="card-title" dangerouslySetInnerHTML={{ __html: cardTitle2 }}></h5>
              </div>
              <div className="ml-auto" style={{ fontSize: 30, marginLeft: 'auto', marginTop: '-15px' }}>
                ...
              </div>
            </div>
            {cardText && <p className="card-text">{cardText}</p>}
            {(date || business) && (
              <div className="d-flex flex-row">
                {date && (
                  <div style={{ marginRight: '25px' }}>
                    <i className="bi bi-calendar-day"></i> {date}
                  </div>
                )}
                {business && (
                  <div style={{ marginRight: '25px' }}>
                    <i class="bi bi-briefcase"></i>
                    {business}
                  </div>
                )}
                <div>
                  <i className="bi bi-geo-alt"></i> {location}
                </div>
              </div>
            )}
          </div>
          <div className="d-flex align-items-center mt-3">
            <div>
              <img className="avatar avatar-sm" src={authorImage} alt="User Avatar" />
            </div>
            <div style={{ marginLeft: '8px' }}>{authorName}</div>
            <div className="d-flex ml-auto align-items-center" style={{ marginLeft: 'auto' }}>
              <div className="px-2">{viewCount} views</div>
              <div>
                <button type="button" className="btn btn-sm" style={{ marginRight: '8px', backgroundColor: '#EDEEF0' }}>
                  <span className="bi bi-share-fill"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
