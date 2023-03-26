import React from 'react';
import { Chart } from '../../components/Chart/Chart';
import { FeaturedInfo } from '../../components/FeaturedInfo/FeaturedInfo';
import './Home.css';
import { WidgetSm } from '../../components/WidgetSm/WidgetSm';
import { WidgetLg } from '../../components/WidgetLg/WidgetLg';
import { useState, useEffect, useMemo } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import axios from 'axios';

export const Home = () => {
  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get('/users/stats', {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWJiZjkyNDE5OWFjMzQ1Mzg2OWUxNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzY4NTE1MSwiZXhwIjoxNjc4MTE3MTUxfQ.RclY0EF5kxzOhEtxCaK95rART-u6_q7IpEvsxNOIRoc",
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], 'New User': item.total },
          ])
        );
      } catch (err) {
        console.error(err);
      }
    };
    getStats();
  }, [MONTHS]);
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="home">
          <FeaturedInfo />
          <Chart
            data={userStats}
            title="User Analytics"
            grid
            dataKey="New User"
          /> 
          <div className="homeWidgets">
            <WidgetSm /> 
            <WidgetLg />
          </div>
        </div>
      </div>
    </>
  );
};
