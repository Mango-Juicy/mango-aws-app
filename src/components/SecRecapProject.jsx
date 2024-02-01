import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import SectionC from './library/SectionC';

import { calcBalanceTransactions, calcTotalValue, distinct, filterBy } from '../tools/utility';

const SecRecapProject = ({
  items = [],
  project = {},
}) => {
  const [totalValue, setTotalValue] = useState(0);
  const [feeEach, setFeeEach] = useState(0);
  const [repayTransactions, setRepayTransactions] = useState([]);

  useEffect(() => {
    calcRecap();
  }, [items]);

  // TODO: refactor -> utility ?
  const calcRecap = () => {
    const totalValueByOwner = [];
    const repayTransactions = [];
    const totalTransactions = [];
    const teamMembers = project.teamMembers;

    if (items.length > 0 && teamMembers.length > 0) {
      // totalValue
      const totalValue = calcTotalValue(items);
      setTotalValue(totalValue);

      const feeEach = totalValue / teamMembers.length;
      setFeeEach(feeEach)

      // setTotalValueByOwner
      teamMembers.forEach(item => {
        const itemsByOwner = filterBy(items, "owner", item);
        totalValueByOwner.push(calcTotalValue(itemsByOwner));
        totalTransactions.push({
          owner: item,
          value: calcTotalValue(itemsByOwner)
        })
      });

      // setRepayTransactions
      const balanceTransactions = calcBalanceTransactions(totalTransactions);
      teamMembers.forEach((owner, index) => {
        const repayTo = filterBy(balanceTransactions, "from", owner);
        const repayFrom = filterBy(balanceTransactions, "to", owner);
        repayTransactions.push({
          owner,
          value: totalValueByOwner[index],
          repayTo: repayTo,
          repayFrom: repayFrom
        })
      });
      setRepayTransactions(repayTransactions);      
    } else {
      setRepayTransactions([]);
      setFeeEach(0);
      setTotalValue(0);
    }
  };

  return (
    <div>
      <SectionC
        color={'c-accent-l'}
        content={
          <div className='mt-3'>
            <Row className='mb-2'>
              <Col>
                <h6>Total Project Cost: {totalValue}€ </h6>
              </Col>
              <Col>
                <h6>Individual Cost: {feeEach}€</h6>
              </Col>
              <Col>
                <h6 className='c-accent-d rounded p-1 m-0 text-center'>{project.category || 'N/A'}</h6>
              </Col>
              <Col>
                <h6 className='c-accent-d rounded p-1 m-0 text-center'>{project.date || 'N/A'}</h6>
              </Col>
            </Row>
            <Row className='mt-3'>
              <Col>
                <p> {project.note}</p>
              </Col>
            </Row>
          </div>
        }
      ></SectionC>
      <Row>
        {
          repayTransactions.map((item, index) => (
            <Col key={index}  >
              <SectionC
                padding='p-0'
                color={'c-accent-l'}
                className={''}
                content={
                  <div>
                    <h6>{item.owner}</h6>
                    <p>Invested: {item.value}€ | {(item.value - feeEach) > 0 ? 'Credit' : 'Debt'}: {Math.abs(item.value - feeEach)}€</p>
                    {
                      item.repayTo?.map((item, index) => (
                        <p key={index}>Debt: {item.amount}€ to {item.to} </p>
                      ))
                    }
                    {
                      item.repayFrom?.map((item, index) => (
                        <p key={index}>Credit: {item.amount}€ from {item.from} </p>
                      ))
                    }
                  </div>
                }
              ></SectionC>
            </Col>
          ))
        }
      </Row>
    </div>
  );
};

export default SecRecapProject;
