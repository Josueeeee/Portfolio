import React from 'react';
import { boostrap, css, git, html, js, node, react } from '../imgs'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const SkillsInfo = () => {
    return (
        <>
            <div data-aos="fade-up">
                <h3>Sobre a mi</h3>

                <p>Soy un buen analista, tengo la habilidad de diseñar creativamente, conocimientos técnicos en desarrollo
                    informático. Me mantengo en control ante cualquier situación.</p>
                <p>Con experiencia en tecnologías como HTML,
                    CSS, JavaScript y React, Nodejs. me considero
                    una persona resolutiva y proactiva, con entusiasmo por aprender más.</p>
                <br />

            </div>
            <div >
                <h3 data-aos="zoom-in">
                    Tecnologias
                </h3>
                <div className='skillContainer'>
                    <img data-aos="zoom-in" data-aos-delay="100" src={html} alt="" />
                    <img data-aos="zoom-in" data-aos-delay="200" src={css} alt="" />
                    <img data-aos="zoom-in" data-aos-delay="300" src={js} alt="" />
                    <img data-aos="zoom-in" data-aos-delay="400" src={react} alt="" />
                    <img data-aos="zoom-in" data-aos-delay="500" src={node} alt="" />
                    <img data-aos="zoom-in" data-aos-delay="600" src={boostrap} alt="" />
                    <img data-aos="zoom-in" data-aos-delay="700" src={git} alt="" />
                </div>
            </div>
        </>
    );
};

export default SkillsInfo;