import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Navigation = styled.div`
  background-color: #004695;
  .topHeader {
    display: flex;
    justify-content: space-between;
    padding: 0 10%;
    height: 7rem;
    align-items: center;
  }
  nav {
    display: flex;
    align-items: center;
    ul {
      li {
        color: #e9edf2;
        list-style: none;
      }
    }
    .cartWrapper {
      padding-left: 3rem;
    }
  }
`;

const MainNavigation = () => {
  return (
    <Navigation>
      <div className="topHeader">
        <div className="imageWrapper">
          <Link href="/">
            <a>
              <Image src="/svg.svg" height={78} width={232} alt="logo" />
            </a>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="#">login</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/contact">contact</Link>
            </li>
          </ul>
          <div className="cartWrapper">
            <Link href="/cart">
              <a>
                <Image
                  src="/cartIcon.svg"
                  height={24}
                  width={24}
                  alt="cartIcon"
                />
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </Navigation>
  );
};

export default MainNavigation;
