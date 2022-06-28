import React from 'react';
import './../style/main.css';
import { useState } from 'react';

const Main = () => {
    const listData=['content01','content02','content03','content04']; 
    const [num,setNum] = useState(0);  
    //listData.unshift('more1')
    listData.unshift(listData[listData.length-1])
    const fncClassAdd = (i) =>{
        const on=(i===num)?' on':' on' ; 
        const view='view_';
        const textNum="00000"+(i+1);
        const viewText=view+textNum.slice(-2); 
        console.log(viewText)
        return viewText+on
    }
    const setStyle = {
        position:'relative',
        left:'-100%',
        marginLeft:`${num * -100}%`,
        transition:(num!==0) ? 'margin 500ms ease':'none',
        animation:(num===0)?'firstSlide 500ms ease 1' : 'none'
    }

    return (
        <div className='mainContainer'>
            <h2>메인페이지</h2>
            <div className="viewBox">
                <div className='slideBtn'>
                    <button type="button" onClick={()=>{setNum(num<=0?3:num-1)}}>이전</button>
                    <button type="button" onClick={()=>{setNum(num>=3?0:num+1)}}>이후</button>
                </div>
            </div>
            <div className='viewContents'>
                <ul style={setStyle}>
                    {
                        listData.map((list,index)=>{
                            return(
                                <li className={fncClassAdd(index)}>{list}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Main;