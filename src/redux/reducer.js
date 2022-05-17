/* eslint-disable default-param-last */
import getData from '../API/api';

// Action Type
const RETRIEVE_DATA = 'university-locator/RETRIEVE_DATA';

// Actions
const retrieveData = () => (async (dispatch) => {
  const response = await getData(); // Get data from the API
  const universities = response.data.features.map((element) => ({
    id: element.attributes.OBJECTID,
    name: element.attributes.University_Chapter,
    city: element.attributes.City,
    state: element.attributes.State,
    chapterID: element.attributes.ChapterID,
    mevrRD: element.attributes.MEVR_RD,
  })); // Organize data according to the store sturcture
  dispatch({ type: RETRIEVE_DATA, universities }); // Add data to the store
});

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case RETRIEVE_DATA:
      return action.universities;
    default:
      return state;
  }
};

export { reducer, retrieveData };
