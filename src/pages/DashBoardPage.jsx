import React from 'react'
import FirstCard from '../components/DashBoard/FirstCard'
import SecondCard from '../components/DashBoard/SecondCard';
import ThirdCard from '../components/DashBoard/ThirdCard';
import "./dashboard.css";
import FourthCard from './../components/DashBoard/FourthCard';
import FifthCard from '../components/DashBoard/FifthCard';
import SixthCard from '../components/DashBoard/SixthCard';
import SeventhCard from '../components/DashBoard/SeventhCard';

const DashBoardPage = () => {
  return (
    <div>
        <div className="containerFirst">
            <div className='first'>
            <FirstCard/>
            </div>
            <div className="second">
            <SecondCard/>
            </div>
        </div>

        <div className="containerFirst">
        <div className='first'>
            <ThirdCard/>
          </div>
          <div className="second2">
            <FourthCard/>
          </div>
        </div>

        <div className="containerFirst">
          <div className="first">
          <FifthCard/>
          </div>
          <div className='second'>
            <SixthCard/>
          </div>
        </div>

        <div className="containerLast">
          <SeventhCard/>
        </div>
    </div>
  )
}

export default DashBoardPage