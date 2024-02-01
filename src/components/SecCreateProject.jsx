import { useEffect, useState } from "react";

import { FaRegCheckCircle } from 'react-icons/fa';

import ModalC from "./library/ModalC";
import FormC from "./library/FormC";
import GridC from "./library/GridC";

import { apiCreateProject, apiListUser, apiUpdateProject, isAdmin } from "../tools/api";
import { labelButtonSave, labelModal } from "../tools/utility";
import { TXT_COD_ACTION_CREATE, TXT_COD_ACTION_DETAIL, TXT_COD_ACTION_EDIT, TXT_TABLE_PROJECT } from "../tools/constants";

// Matrix (Row,Col) {label,key}
const structGrid_FormProject = [
  [
    {
      label: "Name",
      key: "name",
    },
    {
      label: "category",
      key: "category",
    },
  ],
  [
    {
      label: "description",
      key: "description",
      as: "textarea"
    },
  ],
  [
    {
      label: "date",
      key: "date",
    },
    {
      label: "note",
      key: "note",
    },
  ],
];

const structCol_ListTeamMembers = {
  username: 'Username',
  email: 'Email'
};

const initialState = {
  name: "",
  description: "",
  category: "",
  date: "",
  note: "",
};

const SecCreateProject = ({
  project = {},
  codAction = '',
  showModal = false,
  handleModalClose = () => { },
}) => {
  const [formState, setFormState] = useState(initialState);
  const [success, setSuccess] = useState('');

  const [listUsers, setListUsers] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetchListUsers();
  }, []);
  useEffect(() => {
    showModal && setSuccess('');
    setFormState({
      id: project.id,
      name: project.name,
      description: project.description,
      category: project.category,
      date: project.date,
      note: project.note,
    });
    setTeamMembers(project.teamMembers);
  }, [codAction]);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchListUsers() {
    if (await isAdmin()) {
      const userData = await apiListUser();
      const listUsersData = userData.data;
      const listUsers = listUsersData.map(user => {
        const username = user.Username;
        const email = user.Attributes.find(item => item.Name === "email").Value;
        return ({
          id: username,
          username,
          email
        })
      });
      setListUsers(listUsers);
    }
  }

  const actionCreate = async () => {
    if (!formState.name) return;
    const project = { ...formState, teamMembers };
    await apiCreateProject(project);
    setSuccess(response.success);
  };
  const actionEdit = async () => {
    if (!formState.name) return;
    const project = { ...formState, teamMembers };
    const response = await apiUpdateProject(project);
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


  const secCreateProject = () => {
    const handleSelection = (id, value) => {
      if (value) {
        setTeamMembers([...teamMembers, id]);
      } else {
        setTeamMembers(teamMembers.filter(item => item !== id));
      }
    };

    const form = () => {
      return <FormC
        structGrid={structGrid_FormProject}
        formState={formState}
        setInput={setInput}
      ></FormC>;
    };

    return (
      <div>
        <h4>Info</h4>
        {form()}
        <h4 className="mt-2">Team Members</h4>
        <GridC
          data={listUsers}
          structCol={structCol_ListTeamMembers}
          isSelectable={true}
          selectedId={teamMembers}
          handleSelection={handleSelection}
        ></GridC>
      </div>
    );

  };

  // TODO: component?
  const secMessage = () => {
    const message = {
      [TXT_COD_ACTION_CREATE]: {
        text: "The project has been successfully added",
        icon: <FaRegCheckCircle
          className="m-3"
          size={50}
          color="green"
        ></FaRegCheckCircle>
      },
      [TXT_COD_ACTION_EDIT]: {
        text: "The project has been successfully updated",
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
      success === '' ? secCreateProject() : secMessage()
    );
  };

  return (
    <ModalC
      title={labelModal(TXT_TABLE_PROJECT,codAction,success)}
      content={content()}
      showModal={showModal}
      labelButtonSave={labelButtonSave(success)}
      handleModalClose={handleClose}
      handleModalSave={handleSave}
    ></ModalC>
  );
};

export default SecCreateProject;
