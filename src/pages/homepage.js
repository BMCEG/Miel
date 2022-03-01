import React, { useEffect } from 'react';
import { Typography, Button } from '@mui/material';
import { PageFlip } from 'page-flip';
import { menuPages, menuHeaders } from '../assets/content.js';
import logo from '../assets/Miel-Logo.png';
import title from '../assets/Title-w.png';
import btnElement from '../assets/bg_e2.png';
import '../styles/homepage.css';

export default function Homepage() {
  useEffect(() => {
    const pageFlip = new PageFlip(document.getElementById('demoBookExample'), {
      width: 800, // base page width
      height: 473, // base page height
      size: 'fixed',
      maxShadowOpacity: 0.5, // Half shadow intensity
      showCover: true,
      flippingTime: 800,
      mobileScrollSupport: true, // disable content scrolling on mobile devices
    });

    // load pages
    pageFlip.loadFromHTML(document.querySelectorAll('.page'));

    document.querySelector('.btn0').addEventListener('click', () => {
      pageFlip.turnToPage(2);
    });
    document.querySelector('.btn1').addEventListener('click', () => {
      pageFlip.turnToPage(4);
    });
    document.querySelector('.btn2').addEventListener('click', () => {
      pageFlip.turnToPage(6);
    });
    document.querySelector('.btn3').addEventListener('click', () => {
      pageFlip.turnToPage(8);
    });
    document.querySelector('.btn4').addEventListener('click', () => {
      pageFlip.turnToPage(10);
    });
    document.querySelector('.btn5').addEventListener('click', () => {
      pageFlip.turnToPage(12);
    });
    document.querySelector('.btn6').addEventListener('click', () => {
      pageFlip.turnToPage(14);
    });
    document.querySelector('.btn7').addEventListener('click', () => {
      pageFlip.turnToPage(16);
    });

    document.querySelector('.btn8').addEventListener('click', () => {
      pageFlip.turnToPage(18);
    });
    document.querySelector('.btn9').addEventListener('click', () => {
      pageFlip.turnToPage(20);
    });
  }, []);

  return (
    <div className="root">
      <div className="home_container">
        <div className="nav_root">
          <img alt="Miel French Bakery" src={logo} className="nav_logo" />
        </div>
      </div>
      <div className="menu_title">
        <img alt="Miel French Bakery Menu" src={title} className="nav_title" />
      </div>
      <div className="home_container">
        <br></br>
        <br></br>
        <div className="menu_headers">
          {menuHeaders.map((header, idx) => (
            <Button className={`menu_header_btn btn${idx}`}>
              <img
                alt="Miel French Bakery"
                src={btnElement}
                className="btn_img btn_img_left"
              />
              {header}
              <img
                alt="Miel French Bakery"
                src={btnElement}
                className="btn_img btn_img_right"
              />
            </Button>
          ))}
        </div>
        <div className="menu_book">
          <div className="flip-book" id="demoBookExample">
            {menuPages.map((page, index) => (
              <div className="page" key={index}>
                <Typography variant="h3" component="h3" className="page_no">
                  {index}
                </Typography>
                <img alt="pageAlt" src={page} className="page_img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
