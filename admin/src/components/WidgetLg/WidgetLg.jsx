import React from 'react';
import './WidgetLg.css';
import avatar from '../../images/avatar.png';

export const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest Transactions</h3>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh'>Customer</th>
          <th className='widgetLgTh'>Date</th>
          <th className='widgetLgTh'>Amount</th>
          <th className='widgetLgTh'>Status</th>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src={avatar} alt="avatar" className="widgetLgImg" />
            <span className='widgetLgName'>Maria</span>
          </td>
          <td className='widgetLgDate'>20 Feb 2023</td>
          <td className='widgetLgAmout'>$255.2</td>
          <td className='widgetLgStatus'>
            <Button type="Approved" />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src={avatar} alt="avatar" className="widgetLgImg" />
            <span className='widgetLgName'>Maria</span>
          </td>
          <td className='widgetLgDate'>20 Feb 2023</td>
          <td className='widgetLgAmout'>$255.2</td>
          <td className='widgetLgStatus'>
            <Button type="Declined" />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src={avatar} alt="avatar" className="widgetLgImg" />
            <span className='widgetLgName'>Maria</span>
          </td>
          <td className='widgetLgDate'>20 Feb 2023</td>
          <td className='widgetLgAmout'>$255.2</td>
          <td className='widgetLgStatus'>
            <Button type="Pending" />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src={avatar} alt="avatar" className="widgetLgImg" />
            <span className='widgetLgName'>Maria</span>
          </td>
          <td className='widgetLgDate'>20 Feb 2023</td>
          <td className='widgetLgAmout'>$255.2</td>
          <td className='widgetLgStatus'>
            <Button type="Approved" />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src={avatar} alt="avatar" className="widgetLgImg" />
            <span className='widgetLgName'>Maria</span>
          </td>
          <td className='widgetLgDate'>20 Feb 2023</td>
          <td className='widgetLgAmout'>$255.2</td>
          <td className='widgetLgStatus'>
            <Button type="Approved" />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src={avatar} alt="avatar" className="widgetLgImg" />
            <span className='widgetLgName'>Maria</span>
          </td>
          <td className='widgetLgDate'>20 Feb 2023</td>
          <td className='widgetLgAmout'>$255.2</td>
          <td className='widgetLgStatus'>
            <Button type="Approved" />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src={avatar} alt="avatar" className="widgetLgImg" />
            <span className='widgetLgName'>Maria</span>
          </td>
          <td className='widgetLgDate'>20 Feb 2023</td>
          <td className='widgetLgAmout'>$255.2</td>
          <td className='widgetLgStatus'>
            <Button type="Approved" />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src={avatar} alt="avatar" className="widgetLgImg" />
            <span className='widgetLgName'>Maria</span>
          </td>
          <td className='widgetLgDate'>20 Feb 2023</td>
          <td className='widgetLgAmout'>$255.2</td>
          <td className='widgetLgStatus'>
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  )
}
