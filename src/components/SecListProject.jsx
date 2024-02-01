import { useEffect, useState } from "react";

import GridC from "./library/GridC";
import ButtonC from "./library/ButtonC";
import SectionC from "./library/SectionC";
import SecCreateProject from "./SecCreateProject";
import { findBy } from "../tools/utility";
import { TXT_COD_ACTION_CREATE, TXT_COD_ACTION_DETAIL, TXT_COD_ACTION_EDIT } from "../tools/constants";
import { apiListProject, isAdmin } from "../tools/api";

const structCol_Project = {
  name: 'Name',
  description: 'Description'
};

const SecListProject = ({
  handleProjectSelection = (project) => { },
}) => {
  const [isUserAdmin, setIsUserAdmin] = useState(false);

  const [projects, setProjects] = useState([]);
  const [selProject, setSelProject] = useState({});

  const [showModal, setShowModal] = useState(false);
  const [codAction, setCodAction] = useState('');

  // Projects
  useEffect(() => {
    getListProject();
  }, []);

  async function getListProject() {
    const isUserAdmin = await isAdmin();
    const projectsData = await apiListProject();
    const projects = projectsData.success && projectsData.data;
    setProjects(projects);
    setIsUserAdmin(isUserAdmin)
  };

  const handleSelection = (id, value) => {
    if (value) {
      const selProject = findBy(projects, "id", id);
      setSelProject(selProject);
      handleProjectSelection(selProject);
    } else {
      handleProjectSelection({});
      setSelProject({});
    }
  };

  const handleNewItem = () => {
    setCodAction(TXT_COD_ACTION_CREATE);
    setShowModal(true);
  };
  const handleDetail = (id) => {
    const selProject = findBy(projects, "id", id);
    setCodAction(TXT_COD_ACTION_DETAIL);
    setSelProject(selProject);
    setShowModal(true);
  };
  const handleEdit = (id) => {
    const selProject = findBy(projects, "id", id);
    setCodAction(TXT_COD_ACTION_EDIT);
    setSelProject(selProject);
    setShowModal(true);
  };
  const handleRemove = (id) => {
    console.log("Remove: confirmation message");
  };

  const handleClose = () => {
    setShowModal(false);
    getListProject();
    setSelProject({})
    setCodAction('');
  };


  const content = () => {
    return (
      <div className="pt-3">
        {isUserAdmin &&
          <ButtonC
            label={"New Project"}
            onClick={handleNewItem}
          ></ButtonC>}
        <GridC
          data={projects}
          structCol={structCol_Project}
          colorHeader={"c-accent-l"}
          isSelectable={true}
          handleSelection={handleSelection}
          selectedId={selProject.id}
          isAction={isUserAdmin}
          isDetail={false}
          handleDetail={handleDetail}
          handleEdit={handleEdit}
          handleRemove={handleRemove}
        ></GridC>
      </div>
    );
  };

  return (
    <div>
      <SecCreateProject
        project={selProject}
        codAction={codAction}
        showModal={showModal}
        handleModalClose={handleClose}
      ></SecCreateProject>

      <SectionC
        title={"Projects"}
        content={content()}
        isCollapse={true}
      ></SectionC>
    </div>
  );
};

export default SecListProject;
