import React from 'react'
import { trendData } from '../../../data/trendData'
import './trendCard.css'
function Trend() {
  return (
    <div className='TrendCard'>
      <h3>Trends for you</h3>
      {trendData.map((trend,id)=>{
        return(
            <div className='trend' key={id}>
                <span>#{trend.name}</span>
                <span>{trend.shares}k</span>
            </div>
        )
      })}
    </div>
  )
}

export default Trend
