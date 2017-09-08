import {
  LOAD_DOCS_REQUEST, LOAD_DOCS_SUCCESS, LOAD_DOCS_ERROR, EMPTY_DOCS,
  LOAD_SINGLE_DOC_REQUEST, LOAD_SINGLE_DOC_SUCCESS, LOAD_SINGLE_DOC_ERROR,
  SELECT_TAG, SELECT_FITLER,
} from '../constants/actionTypes';


const initialState = {
  isFetching: false,
  documents: [],
  selectedDocs: {},
  selectedTag: '中美斷交',
  filterLabel: 'All'
};

const documentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DOCS_REQUEST:
      return { ...state, isFetching: true };
    case LOAD_DOCS_SUCCESS:
      return { ...state, isFetching: false, documentsCopy: [ ...state.documents, ...action.documents], documents: [ ...state.documents, ...action.documents], lastKey: action.lastKey };
    case LOAD_DOCS_ERROR:
      return { ...state, isFetching: false, errorMessage: action.message };
    case LOAD_SINGLE_DOC_REQUEST:
      return { ...state, isFetching: true };
    case LOAD_SINGLE_DOC_SUCCESS:
      return { ...state, isFetching: false, selectedDocs: { ...state.selectedDocs, [action.data.uid]: action.data } };
    case LOAD_SINGLE_DOC_ERROR:
      return { ...state, isFetching: false, errorMessage: action.message };
    case EMPTY_DOCS:
      return { ...state, documents: [], documentsCopy: [] };
    case SELECT_TAG:
      return { ...state, selectedTag: action.tag };
    case SELECT_FITLER:
      return { ...state, filter: action.filter, filterLabel: action.filterLabel, documents: state.documentsCopy.filter(e => e.metadata.box === action.filter ) };
    default:
      return state;
  }
};

export default documentReducer;
