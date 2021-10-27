import { faBell, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faChartPie, faCog, faHome, faPercentage, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import ContainerWrapper from './ContainerWrapper';
import Sales from '../../Pages/Sales/Sales';
import Chart from '../../Pages/Chart/Chart';
import Mail from '../../Pages/Mail/Mail';
import News from '../../Pages/News/News';
import Settings from '../../Pages/Settings/Settings';
import Profile from '../../Pages/Profile/Profile';

const links = [
    { to: "/", icon: faHome },
    { to: "/sales", icon: faPercentage },
    { to: "/chart", icon: faChartPie },
    { to: "/mail", icon: faEnvelope },
    { to: "/news", icon: faBell },
    { to: "/settings", icon: faCog },
    { to: "/profile", icon: faSignOutAlt },
]

const main = [
    { path: "/", com: <Home /> },
    { path: "/sales", com: <Sales /> },
    { path: "/chart", com: <Chart /> },
    { path: "/mail", com: <Mail /> },
    { path: "/news", com: <News /> },
    { path: "/settings", com: <Settings /> },
    { path: "/profile", com: <Profile /> },
]

const Container = () => {
    const [menu, setmenu] = useState(0);

    const chooseMenu = (i) => {
        setmenu(i);
    };

    return (
        <ContainerWrapper>
            <div className="sidebar">
                <img src="./Images/Logo.png" alt="?" className="logo mt-2 ms-1" />
                {
                    links.map((v, i) => {
                        return <Link to={v.to}
                            className={`btn fs-5 ms-3 mt-3 p-1 sbLink ${i == menu && 'sbLinkActive' || ''}`}
                            onClick={() => chooseMenu(i)} key={i}
                        >
                            <FontAwesomeIcon icon={v.icon} />
                        </Link>
                    })
                }
            </div>
            <div className="main">
                <Switch>
                    {
                        main.map((v, i) => {
                            if (i == 0) {
                                return <Route path={v.path} exact key={i}>
                                    {v.com}
                                </Route>
                            } else {
                                return <Route path={v.path} key={i}>
                                    {v.com}
                                </Route>
                            }
                        })
                    }
                </Switch>
            </div>
        </ContainerWrapper>
    );
}

export default Container