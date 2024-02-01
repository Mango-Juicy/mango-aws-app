import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonC = ({ 
  label = 'Label', 
  variant = 'c-primary', 
  className = 'd-inline-flex justify-content-center', 
  margin = 'my-2',
  rounded = 'rounded',
  size = 'sm',  
  isDisabled = false,
  onClick
}) => {
  const classNameList = [margin,rounded,className];
  const defClassName = classNameList.join(" ");
  return (
    <Button 
      variant={variant}
      className={defClassName} 
      size={size}
      onClick={onClick}
      disabled={isDisabled}
    >{label}
    </Button>
  );
};

export default ButtonC
