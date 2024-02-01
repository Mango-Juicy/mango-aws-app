import { useState } from "react";

import GridC from "./library/GridC";
import ButtonC from "./library/ButtonC";
import SecCreateItem from "./SecCreateItem";

import { findBy } from "../tools/utility";
import { TXT_COD_ACTION_CREATE, TXT_COD_ACTION_DETAIL, TXT_COD_ACTION_EDIT } from "../tools/constants";



// {key: 'label'}
const structCol_ListItem = {
  name: 'Name',
  description: 'Description',
  tag: 'Tag',
  category: 'Category',
  value: 'Price',
  owner: 'User'
};

const SecListItem = ({
  project = {},
  items = [{}],
  getListItem = (id) => {}
}) => {
  const [selItem, setSelItem] = useState({});

  const [showModal, setShowModal] = useState(false);
  const [codAction, setCodAction] = useState('');

  const handleNewItem = () => {
    setCodAction(TXT_COD_ACTION_CREATE);
    setShowModal(true);
  };
  const handleDetail = (id) => {
    const selItem = findBy(items, "id", id);
    setCodAction(TXT_COD_ACTION_DETAIL);
    setSelItem(selItem);
    setShowModal(true);
  };
  const handleEdit = (id) => {
    const selItem = findBy(items, "id", id);
    setCodAction(TXT_COD_ACTION_EDIT);
    setSelItem(selItem);
    setShowModal(true);
  };
  const handleRemove = (id) => {
    console.log("Remove: confirmation message");
  };

  const handleClose = () => {
    getListItem(project.id);
    setShowModal(false);   
    setSelItem({})
    setCodAction('');
  };

  return (
    <div>
      <SecCreateItem        
        item={selItem}
        codAction={codAction}
        project={project}
        showModal={showModal}
        handleModalClose={handleClose}
      ></SecCreateItem>

      <ButtonC
        label={"New Item"}
        onClick={handleNewItem}
      ></ButtonC>

      <GridC
        data={items}
        structCol={structCol_ListItem}
        colorHeader={"c-accent-l"}
        isAction={true}
        handleDetail={handleDetail}
        handleEdit={handleEdit}
        handleRemove={handleRemove}
      ></GridC>
    </div>
  );
};

export default SecListItem;
