import React, { useState } from 'react'
import { Card, Collapse } from 'react-bootstrap';


function SectionC({
  title,
  content,
  color = 'c-accent-d',
  margin = 'm-2',
  padding = 'p-2',
  textColor = 'text-white',
  border = 'border-0',
  rounded = 'rounded',
  className = '',
  classNameBody = '',
  isCollapse = false,
  isInitCollapsed = false
}) {
  const classNameList = [color,margin,padding,textColor,border,rounded,className];
  const defClassName = classNameList.join(" ");

  const cursorStyle = isCollapse ? 'pointer' : 'default';

  const [isCollapsed, setIsCollapsed] = useState(isInitCollapsed);

  const handleToggleCollapse = () => {
    if (isCollapse) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <Card className={defClassName}>
      <Card.Body className={classNameBody}>

        <div onClick={handleToggleCollapse} style={{ cursor: cursorStyle }}>
          <Card.Title as={'h4'} className=''>
            {title}
          </Card.Title>
        </div>

        <Collapse in={!isCollapsed}>
          <div>
            {content}
          </div>
        </Collapse>

      </Card.Body>
    </Card>
  );
}

export default SectionC;