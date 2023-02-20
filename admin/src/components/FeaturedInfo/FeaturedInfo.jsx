import React from 'react';
import './FeaturedInfo.css';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

export const FeaturedInfo = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <span className='featuredTitle'>Revenue</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$24, 754</span>
                <span className='featuredMoneyRate'>-11.5 <ArrowDownward className='featuredIcon negative' /></span>
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>
        <div className='featuredItem'>
            <span className='featuredTitle'>Sales</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$94, 754</span>
                <span className='featuredMoneyRate'>-10.5 <ArrowDownward className='featuredIcon negative' /></span>
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>
        <div className='featuredItem'>
            <span className='featuredTitle'>Cost</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$24, 754</span>
                <span className='featuredMoneyRate'>2.5 <ArrowUpward className='featuredIcon' /></span>
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>
    </div>
  )
}
