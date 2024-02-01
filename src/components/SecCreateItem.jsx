import { useEffect, useState } from "react";

import { FaRegCheckCircle } from 'react-icons/fa';

import ModalC from "./library/ModalC";
import FormC from "./library/FormC";

import { apiCreateItems, apiUpdateItem } from "../tools/api";
import { labelButtonSave, labelModal } from "../tools/utility";
import { TXT_COD_ACTION_CREATE, TXT_COD_ACTION_DETAIL, TXT_COD_ACTION_EDIT, TXT_TABLE_ITEM } from "../tools/constants";


// Matrix (Row,Col) {label,key,as,type} (type number non funziona valutare regex)
const structGrid_FormItem = [
  [
    {
      label: "Name",
      key: "name",
    },
    {
      label: "Tag",
      key: "tag",
    },
    {
      label: "Category",
      key: "category",
    },
  ],
  [
    {
      label: "Description",
      key: "description",
      // as: "textarea"
    },
  ],
  [
    {
      label: "Value",
      key: "value",
    },
    {
      label: "Date",
      key: "date",
    },
    {
      label: "Note",
      key: "note",
    },
  ],
];

const initialState = {
  name: "",
  description: "",
  tag: "",
  category: "",
  value: "",
  date: "",
  note: "",
};

const SecCreateItem = ({
  project = {},
  item = {},
  codAction = '',
  showModal = false,
  handleModalClose = () => { },
}) => {
  const [formState, setFormState] = useState(initialState);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    showModal && setSuccess('');
    setFormState({
      id: item.id,
      name: item.name,
      description: item.description,
      tag: item.tag,
      category: item.category,
      value: item.value,
      date: item.date,
      note: item.note,
    });
  }, [codAction]);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  };

  const actionCreate = async () => {
    if (!formState.name || projectItemsId === '') return;
    const item = { ...formState, projectItemsId, teamMembers };
    const response = await apiCreateItems(item);
    setSuccess(response.success);
  };
  const actionEdit = async () => {
    if (!formState.name) return;
    const projectItemsId = project.id;
    const teamMembers = project.teamMembers;

    const item = { ...formState, projectItemsId, teamMembers };
    const response = await apiUpdateItem(item);
    setSuccess(response.success);
  };

  const handleSave = () => {
    if (success) {
      handleModalClose();
      setFormState(initialState);
      return
    }

    switch (codAction) {
      case TXT_COD_ACTION_DETAIL:
        handleModalClose();
        setFormState(initialState);
        break;
      case TXT_COD_ACTION_CREATE:
        actionCreate();
        break;
      case TXT_COD_ACTION_EDIT:
        actionEdit()
        break;
      default:
        handleModalClose();
        setFormState(initialState);
        break;
    }
  };
  const handleClose = () => {
    handleModalClose();
  };


  const form = () => {
    const readOnly = codAction === TXT_COD_ACTION_DETAIL;
    return <FormC
      structGrid={structGrid_FormItem}
      formState={formState}
      setInput={setInput}
      readOnly={readOnly}
    ></FormC>;
  };

  // TODO
  const confirmMessage = () => {
    const message = {
      [TXT_COD_ACTION_CREATE]: "The item has been added correctly.",
      [TXT_COD_ACTION_EDIT]: "The item has been updated correctly."
    }

    return (
      <p>{message[codAction]}</p>
    );
  };
  // TODO: component?
  const secMessage = () => {
    const message = {
      [TXT_COD_ACTION_CREATE]: {
        text: "The item has been successfully added",
        icon: <FaRegCheckCircle
          className="m-3"
          size={50}
          color="green"
        ></FaRegCheckCircle>
      },
      [TXT_COD_ACTION_EDIT]: {
        text: "The item has been successfully updated",
        icon: <FaRegCheckCircle
          className="m-3"
          size={50}
          color="green"
        ></FaRegCheckCircle>
      },
    };

    return (
      <div className="text-center">
        {message[codAction]?.icon}
        <h6>{message[codAction]?.text}</h6>
      </div>
    );
  };
  //TODO: use constants modalState instead of success? 
  const content = () => {
    return (
      success === '' ? form() : secMessage()
    );
  };

  return (
    <ModalC
      title={labelModal(TXT_TABLE_ITEM,codAction,success)}
      content={content()}
      showModal={showModal}
      labelButtonSave={labelButtonSave(success,codAction)}
      isSecondaryButton={codAction!==TXT_COD_ACTION_DETAIL}
      handleModalClose={handleClose}
      handleModalSave={handleSave}
    ></ModalC>
  );
};

export default SecCreateItem;
