import React from 'react'
import { Table, Form } from 'react-bootstrap';
// import { handleErrorLoading } from '../../tools/utility';
import ButtonC from './ButtonC';
import ButtonActions from './ButtonActions';

function GridC({
  data = [],
  structCol = { key: 'Label' },
  colorHeader = 'c-accent-d',
  labelAction = '',
  labelSelect = '',
  isAction = false,
  isSelectable = false,
  selectedId = [],
  handleSelection = (id, value) => { },
  isDetail = true,
  isEdit = true,
  isRemove = true,
  handleDetail = (id) => { },
  handleEdit = (id) => { },
  handleRemove = (id) => { }
}) {

  const columnsName = Object.values(structCol);
  const columnsKey = Object.keys(structCol);

  const defColumnsName_1 = isAction ? [...columnsName, labelAction] : columnsName;
  const defColumnsName = isSelectable ? [labelSelect, ...defColumnsName_1] : defColumnsName_1;

  const content = () => {

    const secGrid = () => {
      return (
        <div className="table-responsive scrollbar-thin scrollbar-dark rounded">
          <Table className='text-white'>
            <thead className={colorHeader}>
              <tr>
                {
                  defColumnsName.map((col, index) =>
                    <th key={index}>{col}</th>
                  )
                }
              </tr>
            </thead>
            <tbody>
              {
                data.map((row, index) => (
                  <tr key={index} >
                    {
                      // SELECTION
                      isSelectable &&
                      <td>
                        <Form.Check
                          type="checkbox"
                          checked={selectedId.includes(row.id)}
                          onChange={(e) => handleSelection(row.id, e.target.checked)}
                        />
                      </td>
                    }
                    {
                      columnsKey.map((col, index) => (
                        <td
                          key={index}
                          className="text-truncate"
                          style={{
                            maxHeight: '5em',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            maxWidth: '200px'
                          }}>
                          {row[col]}
                        </td>
                      ))
                    }
                    {
                      // ACTIONS
                      isAction &&
                      <td>
                        <ButtonActions
                          isDetail={isDetail}
                          isEdit={isEdit}
                          isRemove={isRemove}
                          handleDetail={() => handleDetail(row.id)}
                          handleEdit={() => handleEdit(row.id)}
                          handleRemove={() => handleRemove(row.id)}
                        ></ButtonActions>
                      </td>
                    }
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </div>
      );
    };

    return (
      data.length > 0 ? secGrid() : <p className='text-center m-3 border rounded p-3'>No Data (todo)</p>
    );
  };

  return (
    // handleErrorLoading(
    //   error,
    //   loading,
    //   content()
    // )
    content()
  );
}

export default GridC;