// import React, { useState } from 'react';
import logo from '../../assets/images/logoNCC 1.jpg';
import Card from '../Card/Card';
import cssImg from '../../assets/images/css-icon 1.jpg';
import htmlImg from '../../assets/images/html-icon 1.jpg';
import urlImg from '../../assets/images/url-icon 1.jpg';
import Footer from '../Footer/Footer';

const Main = ({ setNavMobile, navMobile }) => {
  return (
    <main className="main">
      <div className="main_content">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 menu-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setNavMobile(!navMobile)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div className="logo-img">
            <img src={logo} alt="logo NCC" />
          </div>

          <div
            className={navMobile ? 'overlay active' : 'overlay'}
            onClick={() => setNavMobile(!navMobile)}
          ></div>
        </div>

        <div className="main_content_text-container">
          <div className="main_content_text">
            <p className="main_content_text-title">
              Lorem ipsum dolor sit asmet?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique consequat placerat. Vestibulum auctor pellentesque sem,
              eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
              facilisis, ligula in mattis sodales, augue justo tristique nulla,
              sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
              mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
              convallis. Quisque suscipit maximus vestibulum. Phasellus congue
              mollis orci, sit amet luctus augue tristique eu. Donec vulputate
              odio neque, sed semper turpis pellentesque a.
            </p>
          </div>
        </div>

        <div className="main_content_categories">
          <Card img={cssImg} />
          <Card img={htmlImg} />
          <Card img={urlImg} />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Main;
