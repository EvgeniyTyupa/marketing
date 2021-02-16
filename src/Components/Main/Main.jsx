import React, { useEffect, useState } from 'react';
import classes from './Main.module.css';
import { NavLink, Redirect } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';
import { useTranslation } from "react-i18next";
import { connect } from 'react-redux';
import { setCurrentLanguage } from '../../Redux/commonReducer';


import krosi from '../../Assets/krosi.png';
import sweater from '../../Assets/sweater.png';
import menu from '../../Assets/menu.jpg';
import keksiki from '../../Assets/cakes.png';
import Trener from '../Common/Trener/Trener';
import kameneva from '../../Assets/kameneva.jpg';
import uliana from '../../Assets/uliana.jpg';
import bronya from '../../Assets/bronya.jpg';
import katerina from '../../Assets/katerina.jpg';

import insta from '../../Assets/insta.svg';
import fb from '../../Assets/fb.svg';
import linkedin from '../../Assets/linkedin.svg';
import youtube from '../../Assets/youtube.png';
import tg from '../../Assets/tg.png';
import Register from '../Common/Register/Register';
import Preloader from '../Common/Preloader/Preloader';

const Main = (props) => {
    const { t, i18n } = useTranslation();
    const [currentTrener, setCurrentTrener] = useState(0);
    const [isOpenRegister, setIsOpenRegister] = useState(false);
    const [url, setUrl] = useState("");
    const [isRedirect, setIsRedirect] = useState(false);

    

    useEffect(()=>{
        if(window.location.pathname === "/register_done" && !props.isSuccess){
            setIsRedirect(true);
        }
    },[]);

    useEffect(()=>{
        setUrl(window.location.href);
    },[]);

    const handleLanguage = (language) => {
        props.setCurrentLanguage(language);
        i18n.changeLanguage(language);
    }

    const treners = [
        {
            title: t("treners.trener_one.title"),
            img: kameneva,
            text: [
                t("treners.trener_one.one"),
                t("treners.trener_one.two"),
                t("treners.trener_one.three"),
                t("treners.trener_one.four"),
                t("treners.trener_one.six"),
                t("treners.trener_one.seven"),
                t("treners.trener_one.eight"),
                t("treners.trener_one.nine"),
                t("treners.trener_one.ten"),
                t("treners.trener_one.eleven"),
            ],
            list: true
        },
        {
            title: t("treners.trener_two.title"),
            img: uliana,
            text: [
                t("treners.trener_two.one"),
                t("treners.trener_two.two"),
                t("treners.trener_two.three"),
                t("treners.trener_two.four"),
                t("treners.trener_two.six"),
                t("treners.trener_two.seven"),
            ],
            list: false
        },
        {
            title: t("treners.trener_three.title"),
            img: katerina,
            text: [
                t("treners.trener_three.one"),
                t("treners.trener_three.two"),
                t("treners.trener_three.three"),
                t("treners.trener_three.four"),
                t("treners.trener_three.six"),
                t("treners.trener_three.seven"),
                t("treners.trener_three.eight"),
                t("treners.trener_three.nine"),
                t("treners.trener_three.ten"),
            ],
            list: false
        },
        {
            title: t("treners.trener_four.title"),
            img: bronya,
            text: [
                t("treners.trener_four.one"),
                t("treners.trener_four.two"),
                t("treners.trener_four.three"),
                t("treners.trener_four.four"),
                t("treners.trener_four.six"),
                t("treners.trener_four.seven"),
                t("treners.trener_four.eight"),
                t("treners.trener_four.nine"),
            ],
            list: false
        }
    ]



    return(
        <div className={classes.main}>
            {isRedirect && <Redirect to="/"/>}
            {props.isFetching && <Preloader/>}
            {isOpenRegister && <Register url={url} setIsOpenRegister={setIsOpenRegister}/>}
            <div className={classes.blackBox}></div>
            {/* HOME */}
            <div className={classes.home}>
                <div className={classes.language}>
                    <Button onClick={()=>{handleLanguage("ua")}} style={{opacity: props.currentLanguage === "ua" ? 1 : 0.5}}>UA</Button>
                    <Button onClick={()=>{handleLanguage("ru")}} style={{opacity: props.currentLanguage === "ru" ? 1 : 0.5}}>RU</Button>
                </div>
                <div className={classes.homeHeader} data-aos="fade-right">
                    <h2>MARKETING</h2>
                    <h1>PRO:</h1>
                </div>
                <div className={classes.subHeader} data-aos="fade-down">
                    <p>{t("home.sub")}</p>
                </div>
                <div className={classes.date} data-aos="fade-down">
                    <p>{t("home.month")}</p>
                    <span>{t("home.module")}</span>
                </div>
                <div className={classes.time} data-aos="fade-left">
                    <p>{t("home.start")}</p>
                    <p>{t("home.end")}</p>
                </div>
            </div>
            <div className={classes.newReality}>
                <p data-aos="fade-down">{t("newReality")}</p>
            </div>
            <div className={classes.info}>
                <Button className={classes.registerBut} onClick={()=>{setIsOpenRegister(true)}} data-aos="zoom-in">
                    <NavLink to="/register">{t("register")}</NavLink>
                </Button>
                <div className={classes.infoText} data-aos="fade-down">
                    <p>{t("info.one")}</p>
                    <p>{t("info.two")}</p>
                    <p>{t("info.three")}</p>
                    <p>{t("info.four")}</p>
                </div>
            </div>
            <div className={classes.who}>
                <h2>{t("who.title")}</h2>
                <div className={classes.whoSides}>
                    <div className={classes.quadro}>
                        <div className={classes.lineVertical}></div>
                        <div className={classes.whoContent}>
                            <div className={classes.line}></div>
                            <div className={classes.whoText}>
                                <p>{t("who.one")}</p>
                                <p>{t("who.two")}</p>
                                <p>{t("who.three")}</p>
                                <p>{t("who.four")}</p>
                                <p>{t("who.all")}</p>
                            </div>
                            <div className={classes.line}></div>
                        </div>
                    </div>
                    <div className={classes.krosi}>
                        <img src={krosi} data-aos="fade-left"/>
                    </div>
                </div>
            </div>
            <div className={classes.themes}>
                <h2>{t("themes.title")}</h2>
                <div className={classes.themesText} data-aos="fade-right">
                    <p>{t("themes.one")}</p>
                    <p>{t("themes.two")}</p>
                    <p>{t("themes.three")}</p>
                    <p>{t("themes.four")}</p>
                    <p>{t("themes.five")}</p>
                    <p>{t("themes.six")}</p>
                    <p>{t("themes.seven")}</p>
                </div>
                <Button onClick={()=>{setIsOpenRegister(true)}} className={classes.registerBut} data-aos="fade-top">
                    <NavLink to="/register">{t("register")}</NavLink>
                </Button>
                <img src={sweater}/>
            </div>
            <div className={classes.menu}>
                <h2>{t("menu.title")}</h2>
                <img src={menu} data-aos="fade-top"/>
                <div className={classes.modules}>
                    <div className={classes.module} data-aos="fade-left">
                        <h3>{t("menu.module_one")}</h3>
                        <p className={classes.moduleSub}>{t("menu.one_title")}</p>
                        <div className={classes.points}>
                            <h5>{t("menu.speaker")}</h5>
                            <p>{t("menu.lesson_one")}</p>
                            <p>{t("menu.lesson_two")}</p>
                            <p>{t("menu.lesson_three")}</p>
                            <p>{t("menu.lesson_four")}</p>
                            <p>{t("menu.homework")}</p>
                        </div>
                    </div>
                    <div className={classes.module + " " + classes.rev} data-aos="fade-right"> 
                        <h3>{t("menu.module_two")}</h3>
                        <p className={classes.moduleSub}>{t("menu.two_title")}</p>
                        <div className={classes.points}>
                            <h5>{t("menu.speaker")}</h5>
                            <p>{t("menu.lesson2_one")}</p>
                            <p>{t("menu.lesson2_two")}</p>
                            <p>{t("menu.homework")}</p>
                        </div>
                        <div className={classes.points}>
                            <h5>{t("menu.bronya")}</h5>
                            <p>{t("menu.lesson2_three")}</p>
                            <p>{t("menu.lesson2_four")}</p>
                            <p>{t("menu.homework")}</p>
                        </div>
                    </div>
                    <div className={classes.module + " " + classes.rev} data-aos="fade-left">
                        <h3>{t("menu.module_three")}</h3>
                        <p className={classes.moduleSub}>{t("menu.three_title")}</p>
                        <div className={classes.points}>
                            <h5>{t("menu.speaker_three")}</h5>
                            <p>{t("menu.lesson3_one")}</p>
                            <p>{t("menu.lesson3_two")}</p>
                            <p>{t("menu.lesson3_three")}</p>
                            <p>{t("menu.lesson3_four")}</p>
                            <p>{t("menu.homework")}</p>
                        </div>
                    </div>
                    <div className={classes.module} data-aos="fade-right">
                        <h3>{t("menu.module_four")}</h3>
                        <p className={classes.moduleSub}>{t("menu.four_title")}</p>
                        <div className={classes.points}>
                            <h5>{t("menu.speaker")}</h5>
                            <p>{t("menu.lesson4_one")}</p>
                                <p>- horror marketing</p>
                                <p>- emotional marketing</p>
                                <p>- punk-marketing</p>
                                <p>- experience marketing / tryvertising</p>
                                <p>- human marketing {t("menu.lesson4_two")}</p>
                            <p>{t("menu.homework")}</p>
                        </div>
                    </div>
                    <div className={classes.module + " " + classes.rev} data-aos="fade-left">
                        <h3>{t("menu.module_five")}</h3>
                        <p className={classes.moduleSub}>{t("menu.five_title")}</p>
                        <div className={classes.points}>
                            <h5>{t("menu.speaker")}</h5>
                            <p>{t("menu.lesson5_one")}</p>
                            <p>{t("menu.lesson5_two")}</p>
                            <p>{t("menu.homework")}</p>
                        </div>
                        <div className={classes.points}>
                            <h5>{t("menu.speaker_five")}</h5>
                            <p>{t("menu.lesson5_three")}</p>
                            <p>{t("menu.lesson5_four")}</p>
                            <p>{t("menu.homework")}</p>
                        </div>
                    </div>
                    <div className={classes.module} data-aos="fade-right">
                        <h3>{t("menu.module_six")}</h3>
                        <p className={classes.moduleSub}>{t("menu.six_title")}</p>
                        <div className={classes.points}>
                            <h5>{t("menu.speaker_three")}</h5>
                            <p>{t("menu.lesson6_one")}</p>
                            <p>{t("menu.lesson6_two")}</p>
                            <p>{t("menu.homework")}</p>
                        </div>
                        <div className={classes.points}>
                            <p>{t("menu.lesson6_three")}</p>
                            <p>{t("menu.lesson6_four")}</p>
                            <p>{t("menu.homework")}</p>
                        </div>
                        <div className={classes.points}>
                            <p>{t("menu.lesson6_six")}</p>
                            <p>{t("menu.lesson6_seven")}</p>
                            <p>{t("menu.lesson6_eight")}</p>
                            <p>{t("menu.homework")}</p>
                        </div>
                    </div>
                    <div className={classes.module + " " + classes.rev} data-aos="fade-left">
                        <h3>{t("menu.module_seven")}</h3>
                        <p className={classes.moduleSub}>{t("menu.seven_title")}</p>
                        <div className={classes.points}>
                            <h5>{t("menu.speaker")}</h5>
                            <p>{t("menu.lesson7_one")}</p>
                            <p>{t("menu.lesson7_two")}</p>
                            <p>{t("menu.lesson7_three")}</p>
                            <p>{t("menu.homework")}</p>
                        </div>
                    </div>
                    <div className={classes.module} data-aos="fade-right">
                        <h3>{t("menu.module8")}</h3>
                        <div className={classes.points}>
                            <h5>{t("menu.speakers")}</h5>
                            <p>{t("menu.lesson8_one")}</p>
                            <p>{t("menu.lesson8_two")}</p>
                            <p>{t("menu.lesson8_three")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.bonus}>
                <div className={classes.bonusText}>
                    <p data-aos="fade-right">{t("bonus.one")}</p>
                    <p data-aos="fade-right">{t("bonus.two")}</p>
                    <Button onClick={()=>{setIsOpenRegister(true)}} className={classes.registerBut}>
                        <NavLink to="/register">{t("register")}</NavLink>
                    </Button>
                    <img src={keksiki} data-aos="fade-down"/>
                </div>
            </div>
            <div className={classes.treners}>
                <h2>{t("treners.title")}</h2>
                <Trener trener={treners[currentTrener]} setCurrentTrener={setCurrentTrener} currentTrener={currentTrener}/>
            </div>
            <div className={classes.payment}>
                <h2>{t("payment.title")}</h2>
                <div className={classes.payContainer}>
                    <div className={classes.pay} data-aos="zoom-in">
                        <h3>{t("payment.one.title")}</h3>
                        <div className={classes.paymentText}>
                            <p>{t("payment.one.one")}</p>
                            <p>{t("payment.one.two")}</p>
                            <p>{t("payment.one.three")}</p>
                        </div>
                        
                        <span><strong>2000</strong> грн / <strong>70</strong> $</span>
                        <Button>
                            <a href="https://secure.wayforpay.com/page?vkh=60291641-5544-4ea2-87a2-234f22d1dba8">{t("payment.pay")}</a>
                        </Button>
                    </div>
                    <div className={classes.pay} data-aos="zoom-in">
                        <h3>{t("payment.two.title")}</h3>
                        <div className={classes.paymentText}>
                            <p>{t("payment.two.one")}</p>
                            <p>{t("payment.two.two")}</p>
                            <p>{t("payment.two.three")}</p>
                            <p>{t("payment.two.four")}</p>
                            <p>{t("payment.two.five")}</p>
                            <p>{t("payment.two.six")}</p>
                        </div>
                        <span><strong>2500</strong> грн / <strong>89</strong> $</span>
                        <Button>
                            <a href="https://secure.wayforpay.com/page?vkh=60291647-9d54-4ec8-89d7-20b122d1dba8">{t("payment.pay")}</a>
                        </Button>
                    </div>
                </div>
                <Button onClick={()=>{setIsOpenRegister(true)}} className={classes.registerBut}>
                    <NavLink to="/register">{t("register")}</NavLink>
                </Button>
            </div>
            <div className={classes.footer} data-aos="fade-top">
                <h2>{t("footer.title")}</h2>
                <a href="mailto:yuliya.kameneva@gmail.com">yuliya.kameneva@gmail.com</a>
                <div className={classes.footerBlock}>
                    <p><strong>{t("footer.main")}</strong> - {t("footer.one")} <a href="tel:+380675552457">(067) 555 24 57</a></p>
                    <p><strong>{t("footer.assistance")}</strong> - {t("footer.two")} <a href="tel:+380639772135">(063) 977 21 35</a></p>
                </div>
                <div className={classes.socialLinks}>
                    <a href="https://facebook.com/profispaceschool" target="_blank">
                        <img src={fb}/>
                    </a>
                    <a href="https://www.instagram.com/profi_business_school" target="_blank">
                        <img src={insta}/>
                    </a>
                    <a href="https://www.linkedin.com/company/profi-space-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D1%88%D0%BA%D0%BE%D0%BB%D0%B0" target="_blank">
                        <img src={linkedin}/>
                    </a>
                    <a href="https://t.me/profi_space" target="_blank">
                        <img src={tg}/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCROJTexAOgLdWGPjPLjEHYg" target="_blank">
                        <img src={youtube}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

let mapStateToProps = (state) => ({
    isFetching: state.common.isFetching,
    currentLanguage: state.common.currentLanguage,
    isSuccess: state.common.isSuccess
});

export default connect(mapStateToProps, {
    setCurrentLanguage
})(Main);
