import React, { useState } from 'react';
import { GrTechnology } from 'react-icons/gr';
import { BtnIcon, NavbarResp1 } from 'morphine-ui/dist/index';
import { Link } from 'react-router-dom';

export const QuizBuzzNav = () => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  return (
    <NavbarResp1
      style={{
        boxShadow: '0 2px 5px 1px rgb(64 60 67 / 16%)',
        padding: '0 var(--space-sm)',
      }}
      showMobileMenu={showMobileNav}
      handleShowMobileMenu={() => setShowMobileNav(!showMobileNav)}
      desktopMenuStyle={{
        backgroundColor: '',
        height: '4rem',
      }}
      mobileMenuStyle={{
        borderBottomRightRadius: 'var(--space-md)',
        borderBottomLeftRadius: 'var(--space-md)',
        position: 'absolute',
        left: 0,
        right: 0,
        backgroundColor: 'orange',
        height: '85vh',
        width: '95vw',
        margin: '0 auto',
        zIndex: 1000,
      }}
      navbarLogo={
        <Link
          to="/"
          className="flex align-items--c new-nav__link text-decoration--none gap--xs"
          style={{
            marginRight: 'var(--space-md)',
          }}>
          <div className="flex flex--column align-items--fe justify-content--c gap--xxxxs">
            <span className="font-weight--800">QUIZ</span>
            <span className="font-weight--800">BUZZ</span>
          </div>
          <BtnIcon size="lg" style={{ height: '50px', width: '50px' }}>
            <GrTechnology className="text--xxxl" />
          </BtnIcon>
        </Link>
      }
      navbarSearchIcon={<></>}>
      <>
        <Link
          to="/quiz-categories"
          className="new-nav__link text-decoration--none my--sm text-align--c">
          Quiz-Categories
        </Link>
        <Link
          to="*"
          className="new-nav__link text-decoration--none my--sm text-align--c">
          Reset
        </Link>
      </>
    </NavbarResp1>
  );
};
