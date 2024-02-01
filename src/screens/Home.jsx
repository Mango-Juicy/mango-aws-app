import { useEffect, useState } from "react";

import { apiListItem } from "../tools/api";

import SecListItem from "../components/SecListItem";
import SecListProject from "../components/SecListProject";
import SecRecapProject from "../components/SecRecapProject";
import SectionTabs from "../components/library/SectionTabs";


const Home = () => {
  const [selProject, setSelProject] = useState({});
  const [items, setItems] = useState([]);

  // Items
  useEffect(() => {
    selProject.id && getListItem(selProject.id);
  }, [selProject]);

  async function getListItem(id) {
    const itemsData = await apiListItem(id);
    const data = itemsData.success && itemsData.data;
    setItems(data);
  };

  const handleSelection = (project) => {
    if (project.id) {
      setSelProject(project);
    } else {
      setSelProject({});
      setItems([]);
    }
  };

  // RecapProject or ListItems: (selProject, items, getListItem)
  const tabsContent = () => {
    return ([
      <SecRecapProject
        project={selProject}
        items={items}
      ></SecRecapProject>,
      <SecListItem
        project={selProject}
        items={items}
        getListItem={getListItem}
      ></SecListItem>
    ]);
  };

/**
* TODO:
*  - remove action
*  - auto select first project / favorite project ?
* */

  return (
    <div>
      <SecListProject
        projectItemsId={selProject.id}
        handleProjectSelection={handleSelection}
      ></SecListProject>

      {selProject.id &&
        <SectionTabs
          tabsLabel={[selProject.name, "Items"]}
          tabsContent={tabsContent()}
        ></SectionTabs>
      }
    </div>
  );
};

export default Home;
