import React from 'react';

import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa';

import ButtonC from './ButtonC';

const ButtonActions = ({
  className = '',
  margin = 'mx-1',
  align = 'd-flex justify-content-end',
  rounded = 'rounded',
  size = 'sm',
  isDetail = true,
  handleDetail = () => { },
  isEdit = true,
  handleEdit = () => { },
  isRemove = true,
  handleRemove = () => { },
}) => {
  const classNameList = [align, className];
  const defClassName = classNameList.join(" ");

  return (
    <div className={defClassName}>
      {isDetail &&
        <ButtonC
          label={<FaSearch />}
          margin={margin}
          rounded={rounded}
          onClick={handleDetail}
          size={size}
        ></ButtonC>
      }
      {isEdit &&
        <ButtonC
          label={<FaEdit />}
          margin={margin}
          rounded={rounded}
          onClick={handleEdit}
          size={size}
        ></ButtonC>
      }
      {isRemove &&
        <ButtonC
          label={<FaTrash />}
          margin={margin}
          rounded={rounded}
          onClick={handleRemove}
          size={size}
        ></ButtonC>
      }
    </div>
  );

};

export default ButtonActions;
