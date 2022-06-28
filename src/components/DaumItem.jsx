import React from 'react';
import DaumStyle from './../style/daum.module.css';
import {Link} from 'react-router-dom';
import {MdPlayArrow} from 'react-icons/md';


const DaumItem = ({data,index}) => {
    return (
        <div className={DaumStyle.wrap}>
            <li>
            <div className={DaumStyle.imgBox}>
                <img src={data.image} alt={data.title} />
            </div>  
            <dl className={DaumStyle.des}>
                <dt><img src={data.profile} alt={data.title} /></dt>
                <dt className={DaumStyle.title}>{data.title}</dt>
                <dd className={DaumStyle.content}>{data.content}</dd>
                <span className={DaumStyle.playIcon}><MdPlayArrow/></span>
                <dd className={DaumStyle.play}>{data.play}</dd>
                <span> · </span>
                <dd className={DaumStyle.time}>{data.time}</dd>
            </dl>
        </li>
        </div>
    );
};

export default DaumItem;