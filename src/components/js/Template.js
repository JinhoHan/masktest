import React from 'react';
import '../css/Template.css';

const Template = ({ children }) => {
    return (
        <main className="main">
            <div className="header">
                <section className="header__title">
                    <span>내 주변 마스크는 어디에?</span>
                </section>
                {/* <div className="header__title">
                    <Nav defaultActiveKey="/home" as="ul">
                        <Nav.Item as="li">
                            <Nav.Link href="/home">리스트</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-1">지도보기</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-2">안내</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link className="nav-link-button">재고있음</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div> */}
            </div>
            <section className="mask-list">
                {children}
            </section>
        </main>
    );
};

export default Template;


