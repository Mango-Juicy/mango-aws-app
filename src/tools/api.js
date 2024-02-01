import { generateClient } from "aws-amplify/api";
import { fetchAuthSession } from 'aws-amplify/auth';
import { get } from 'aws-amplify/api'


import { getProject, listItems, listProjects } from "../graphql/queries";
import { createItems, createProject, updateItems, updateProject } from "../graphql/mutations";

const TXT_GROUP_ADMIN = "Admins";

const client = generateClient();

// ADMIN QUERIES
async function apiListUser() {
  try {
    let apiName = 'AdminQueries';
    let path = '/listUsers';
    let options = {
      queryStringParameters: {
        "limit": 10,
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': (await fetchAuthSession()).tokens.accessToken.toString()
      }
    }
    const response = await get({ apiName, path, options }).response;
    const userData = await response.body.json();
    return { success: true, data: userData.Users };
  } catch (err) {
    console.log("error fetching users:", err);
    return { success: true, error: err };
  }
}

// CURRRENT USER: tools/context/auth ?
async function isAdmin() {
  try {
    const session = await fetchAuthSession();
    const groups = session.tokens.accessToken.payload["cognito:groups"];
    const isAdmin = groups ? groups.includes(TXT_GROUP_ADMIN) : false;
    return isAdmin;
  } catch (err) {
    console.log(err);
    return false;
  }
}

//ITEM
async function apiListItem(id) {
  try {
    const itemData = await client.graphql({
      query: listItems,
      variables: {
        filter: {
          projectItemsId: {
            eq: id  // Sostituisci con il valore effettivo del projectItemsId desiderato
          }
        }
      }
    });
    const items = itemData.data.listItems.items;
    return { success: true, data: items };
  } catch (err) {
    console.log("error fetching items:", err);
    return { success: false, error: err };
  }
}

async function apiCreateItems(item) {
  try {
    const response = await client.graphql({
      query: createItems,
      variables: {
        input: item,
      }
    });
    return { success: true, data: response.data.createItems };
  } catch (err) {
    console.log("error creating item:", err);
    return { success: false, error: err };
  }
}

async function apiUpdateItem(item) {
  try {
    const response = await client.graphql({
      query: updateItems,
      variables: {
        input: item,
      }
    });
    return { success: true, data: response.data.updateItems };
  } catch (err) {
    console.log("error creating item:", err);
    return { success: false, error: err };
  }
}


// PROJECT
async function apiGetProject(id) {
  try {
    const projectData = await client.graphql({
      query: getProject,
      variables: {
        id: id,
      }
    });
    const project = projectData.data.getProject;
    return { success: true, data: project };
  } catch (err) {
    console.log("error fetching items:", err);
    return { success: false, error: err };
  }
}

async function apiListProject() {
  try {
    const projectData = await client.graphql({
      query: listProjects
    });
    const projects = projectData.data.listProjects.items;
    return { success: true, data: projects };
  } catch (err) {
    console.log("error fetching items:", err);
    return { success: false, error: err };
  }
}

async function apiCreateProject(project) {
  try {
    await client.graphql({
      query: createProject,
      variables: {
        input: project,
      }
    });
    return { success: true, data: project };
  } catch (err) {
    console.log("error creating project:", err);
    return { success: false, error: err };
  }
}

async function apiUpdateProject(item) {
  try {
    const response = await client.graphql({
      query: updateProject,
      variables: {
        input: item,
      }
    });
    return { success: true, data: response.data.updateItems };
  } catch (err) {
    console.log("error creating item:", err);
    return { success: false, error: err };
  }
}

export {
  apiListUser,

  apiListItem,
  apiCreateItems,
  apiUpdateItem,

  apiGetProject,
  apiListProject,
  apiCreateProject,
  apiUpdateProject,

  isAdmin
};