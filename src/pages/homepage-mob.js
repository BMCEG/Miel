import React, { useEffect } from 'react';
import { Typography, Button, Grid } from '@mui/material';
import { PageFlip } from 'page-flip';
import { menuPagesMob, menuHeaders } from '../assets/content.js';
import logo from '../assets/Miel-Logo.png';
import title from '../assets/Title-w.png';
import btnElement from '../assets/bg_e2.png';
import '../styles/homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faPinterest,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default function HomepageMob() {
  const menu = menuPagesMob;

  useEffect(() => {
    const pageFlip = new PageFlip(document.getElementById('demoBookExample'), {
      width: 335, // base page width
      height: 480, // base page height

      size: 'stretch',
      // set threshold values:
      minWidth: 315,
      maxWidth: 350,
      minHeight: 420,
      maxHeight: 480,

      usePortrait: true,
      maxShadowOpacity: 0.5, // Half shadow intensity
      autoSize: true,
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
      <div className="menu_container">
        <div className="menu_headers">
          {menuHeaders.map((header, idx) => (
            <Button key={idx} className={`menu_header_btn btn${idx}`}>
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
            {menu.map((page, index) => (
              <div className="page" key={index}>
                <img alt="pageAlt" src={page} className="page_img" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer">
        <Grid container spacing={3} className="footer_container">
          <Grid item md={8} xs={12} className="footer_side">
            <Typography
              variant="caption"
              component="h6"
              className="footer_text"
            >
              ALL RIGHTS RESERVED © 2022{' '}
              <a href="https://bmceg.com" target="_blank">
                BUSINESS MAP CONSULTANTS
              </a>
            </Typography>
          </Grid>
          <Grid item md={4} xs={12} className="footer_socials">
            <Button className="footer_social_btn">
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className="footer_social_btn_icon"
              />
            </Button>
            <Button className="footer_social_btn">
              {' '}
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="footer_social_btn_icon"
              />
            </Button>
            <Button className="footer_social_btn">
              {' '}
              <FontAwesomeIcon
                icon={faPinterest}
                size="2x"
                className="footer_social_btn_icon"
              />
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
