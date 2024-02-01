import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ButtonC from './ButtonC'
import SectionC from './SectionC';


function SectionTabs({
  tabsLabel,
  tabsContent
}) {
  const [tab, setTab] = useState(0);
  const variantTab = (index) => {
    if (tab === index) {
      return 'c-tab-selected';
    } else {
      return 'c-tab';
    }
  };

  const paddingTab = (index) => {
    const len = tabsLabel.length;
    switch (index) {
      case 0:
        return 'pe-0';
      case len - 1:
        return 'ps-0';
      default:
        return 'px-0';
    }
  };

  return (
    <div className='m-2 c-accent-d rounded'>
      <Row>
        {
          tabsLabel.map((label, index) => (
            <Col key={index} className={paddingTab(index)}>
              <ButtonC
                size={'lg'}
                margin=''
                label={label}
                variant={variantTab(index)}
                className={'w-100'}
                rounded={'rounded-top'}
                onClick={(e) => (setTab(index))}
              ></ButtonC>
            </Col>
          ))
        }
      </Row>
      {
        <SectionC
          margin={''}
          rounded={'rounded-bottom'}
          content={tabsContent[tab]}
        ></SectionC>
      }
    </div>
  );
}

export default SectionTabs;