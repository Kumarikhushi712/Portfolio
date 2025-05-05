import React from "react";

const CertificateCard = ({ img, title, platform, link }) => {
  return (
    <div className="certificate__card">
      <img src={img} alt={title} className="certificate__img" />
      <h3>{title}</h3>
      <p>{platform}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Certificate
      </a>
    </div>
  );
};

export default CertificateCard;
