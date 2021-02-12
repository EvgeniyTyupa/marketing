import React from 'react';
import classes from './Main.module.css';
import { Button, Grid, Typography } from '@material-ui/core';
import { useTranslation } from "react-i18next";

const Main = (props) => {
    const { t, i18n } = useTranslation();
    return(
        <div className={classes.main}>
            <div className={classes.blackBox}></div>
            {/* HOME */}
            <div className={classes.home}>
                <div className={classes.language}>
                    <Button>UA</Button>
                    <Button>RU</Button>
                </div>
                <div className={classes.homeHeader}>
                    <h2>MARKETING</h2>
                    <h1>PRO:</h1>
                </div>
                <div className={classes.subHeader}>
                    <p>{t("home.sub")}</p>
                </div>
                <div className={classes.date}>
                    <p>{t("home.month")}</p>
                    <span>{t("home.module")}</span>
                </div>
                <div className={classes.time}>
                    <p>{t("home.start")}</p>
                    <p>{t("home.end")}</p>
                </div>
            </div>
            <div className={classes.newReality}>
                <p>{t("newReality")}</p>
            </div>
            <div className={classes.info}>
                <Button>{t("register")}</Button>
                <div className={classes.infoText}>
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

                    </div>
                </div>
            </div>
            <div className={classes.themes}>
                <h2>{t("themes.title")}</h2>
                <div className={classes.themesText}>
                    <p>{t("themes.one")}</p>
                    <p>{t("themes.two")}</p>
                    <p>{t("themes.three")}</p>
                    <p>{t("themes.four")}</p>
                    <p>{t("themes.five")}</p>
                    <p>{t("themes.six")}</p>
                    <p>{t("themes.seven")}</p>
                </div>
                <Button>{t("register")}</Button>
            </div>
            <div className={classes.menu}>
                <h2>{t("menu.title")}</h2>

                <div className={classes.modules}>
                    <div className={classes.module}>
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
                    <div className={classes.module}>
                        <h3>{t("menu.module_two")}</h3>
                        <p className={classes.moduleSub}>{t("menu.two_title")}</p>
                        <div className={classes.points}>
                            <h5>{t("menu.speaker")}</h5>
                            <p>{t("menu.lesson2_one")}</p>
                            <p>{t("menu.lesson2_two")}</p>
                            <p>{t("menu.homework")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.bonus}>
                <div className={classes.bonusText}>
                    <p>{t("bonus.one")}</p>
                    <p>{t("bonus.two")}</p>
                    <Button>{t("register")}</Button>
                </div>
            </div>
            
        </div>
    );
}

export default Main;
