import React from 'react';
import {IntroContainer, IntroText, IntroTitle} from "../style/IntroductionStyles";
import Typewriter from "./Typewriter";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Introduction() {
    return (
        <IntroContainer>
            <IntroTitle>홍우성</IntroTitle>
            <h2>
                <Typewriter staticText="저는 " dynamicPhrases={['서버 개발자','','2년차 개발자']}/>
            </h2>
            {/*<IntroText>저는</IntroText><Typewriter>asdf</Typewriter>*/}
        </IntroContainer>
    );

    // return (
    //     <section className="hero-wrap js-fullheight" style={{ backgroundImage: 'url(images/bg_1.jpg)' }}>
    //         <div className="overlay"></div>
    //         <div className="container">
    //             <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
    //                 <div className="col-lg-8 col-md-6 ftco-animate d-flex align-items-center">
    //                     <div className="text text-center">
    //                         <span className="subheading">Hey! I am</span>
    //                         <h1>구민정</h1>
    //                         <h2>I'm a
    //                             <span className="txt-rotate" data-period="2000" data-rotate='[ "풀스택 개발자", "스타트업 개발자", "6년차" ]'></span>
    //                         </h2>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="mouse">
    //             <a href="#" className="mouse-icon">
    //                 <div className="mouse-wheel"><span className="ion-ios-arrow-round-down"></span></div>
    //             </a>
    //         </div>
    //     </section>
    // );
}

export default Introduction;