import React from 'react';
import style from './nav.module.css';
import PopUp from "reactjs-popup";
import Content from '../popUp/Content';


const Nav = (props) => {
    return(
        <nav className={style.nav}>
           <div className={style.nav_wrapper}>
               <div className={style.logo_container}>
                 <img src={props.stateNav.logo} className={style.logo} alt="image" />
                 <h1 className={style.heading}>{props.stateNav.logoName}</h1>
               </div>
               <div className={style.link_navigation}>
                   {
                    props.stateNav.linkNav.map(link => (
                       <a href={link.href}>{link.name}</a>
                    ))
                   }
               </div>
               <div className={style.navLinkContainer}>
                   <i className={` ${props.stateNav.navNotice.icon} ${style.bell_icon}`}><span className={style.counter}>{props.stateNav.navNotice.counter}</span></i>
                   <img className={style.nav_img} src={props.stateNav.profileImg} alt="Profile Img"/>

                   <PopUp trigger={<button className={style.create_post}>Создать Пост</button>} modal closeOnDocumentClick contentStyle={{padding: 0, width: `70%`}} >
                        <Content popUp={props.stateNav.createPost.popUp} addPost={props.stateNav.addPost} taskFun={props.taskFun}/>
                   </PopUp>
               </div>
           </div>
        </nav>
    )
}

export default Nav;