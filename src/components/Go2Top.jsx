import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaChevronUp } from 'react-icons/fa';

const StyledGo2Top = styled.a`
  transition: all 1s;
  line-height: 2.6rem;
  display: block;
  opacity: 0;
  visibility: hidden;
  position: fixed;
  bottom: 16px;
  right: 16px;
  cursor: pointer;
  padding: 12px 8px 8px 8px;
  width: 60px;
  height: 60px;
  text-align: center;
  font-size: 16px;
  z-index: 1100;
  border-radius: 50%;
  background-color: black;
  color: white;
`;

const breakpoint = 800;

const fn = () => {
  const el = document.querySelector('.go2top');
  if (el.style.visibility === 'visible') {
    if (window.scrollY < breakpoint) {
      el.style.visibility = 'hidden';
      el.style.opacity = 0;
    }
  } else {
    if (window.scrollY > breakpoint) {
      el.style.visibility = 'visible';
      el.style.opacity = 1;
    }
  }
};

const Go2Top = () => {
  useEffect(() => {
    window.addEventListener('scroll', fn);
    fn();
    return () => {
      window.removeEventListener('scroll', fn);
    };
  }, []);
  const go2top = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <StyledGo2Top tabIndex={0} onClick={() => go2top()} className={'go2top'}>
      <FaChevronUp size={'25px'} />
    </StyledGo2Top>
  );
};

export default Go2Top;
