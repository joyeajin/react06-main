import React from 'react';
import DaumStyle from '../style/daum.module.css';
import { useEffect ,useState } from 'react';
import DaumItem from './DaumItem';
import {MdExpandMore} from 'react-icons/md';
import {MdExpandLess} from 'react-icons/md';



const Daum = () => {
    const listPlusNum=10;
    const [dataList,setDataList] = useState([]);
    const [moreNum,setMoreNum] =useState(listPlusNum)
    const dataUrl = './data/daum.json';
    useEffect(()=>{
        (async () => {
            await fetch(dataUrl)
            .then(res=>res.json())
            .then(res=>setDataList(res))
        })()
    },[])
    
    const fncMore= () => {
        setMoreNum(moreNum===listPlusNum ? moreNum+listPlusNum : moreNum-listPlusNum)
    }
    const viewData = dataList.filter((data,index)=>index<moreNum)

    return (
        <div className={DaumStyle.event}>
            <h2>Daum</h2>
            <ul>
                {
                    viewData.map((data,index)=>{
                        return(
                            <DaumItem key={data.id} data={data} index={index} />
                        )
                    })
                }
            </ul>
            <div className={DaumStyle.moreBtn}>
                {/* <button type='button' onClick={fncMore}>
                    <span>인기영상</span> 펼쳐보기<MdExpandMore />
                </button>
                <button type='button' onClick={fncLess}>
                    <span>인기영상</span> 접어두기<MdExpandLess />
                </button> */}
                <button type='button' onClick={fncMore}>
                    <span>인기영상 <b> {moreNum===listPlusNum ? '펼쳐보기' : '접어두기'}</b></span>
                    {moreNum===listPlusNum ? <MdExpandMore /> : <MdExpandLess />}
                </button>
            </div>
        </div>
    );
};

export default Daum;