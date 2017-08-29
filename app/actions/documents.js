import axios from 'axios';
import {
  LOAD_DOCS_REQUEST, LOAD_DOCS_SUCCESS, LOAD_DOCS_ERROR, EMPTY_DOCS,
  LOAD_SINGLE_DOC_REQUEST, LOAD_SINGLE_DOC_SUCCESS, LOAD_SINGLE_DOC_ERROR
} from '../constants/actionTypes';


// load documents action creators
const requestDocs = () => ({
  type: LOAD_DOCS_REQUEST,
});

const receiveDocs = (documents, lastKey) => ({
  type: LOAD_DOCS_SUCCESS,
  documents,
  lastKey
});

const loadDocsError = message => ({
  type: LOAD_DOCS_ERROR,
  message,
});

const emptyCachedDocs = () => ({
  type: EMPTY_DOCS,
});

const requestSingleDoc = () => ({
  type: LOAD_SINGLE_DOC_REQUEST,
});

const receiveSingleDoc = (data) => ({
  type: LOAD_SINGLE_DOC_SUCCESS,
  data
});

export const loadDocs = (tag, isReloadingDocs) => {
  return (dispatch) => {
    // requesting docs...
    if (isReloadingDocs) {
      dispatch(emptyCachedDocs())
    }
    dispatch(requestDocs());
    return axios.get(`https://76k76zdzzl.execute-api.us-east-1.amazonaws.com/stage/upload?tag=${tag || ''}`)
    .then((res) => {
      if (res.data && res.data.Items) {
        dispatch(receiveDocs(res.data.Items, res.data.LastEvaluatedKey));
      } else {
        dispatch(loadDocsError('No documents received'))
      }
    })
    .catch(err => dispatch(loadDocsError(err.message)))
  }
}

export const getSingleDoc = (uid) => {
  return (dispatch) => {
    // requesting docs...
    dispatch(requestSingleDoc());
    return axios.get(`https://76k76zdzzl.execute-api.us-east-1.amazonaws.com/stage/upload?uid=${uid}`)
    .then((res) => {
      if (res.data && res.data.Item) {
        dispatch(receiveSingleDoc(res.data.Item));
      } else {
        dispatch(loadDocsError('No documents received'))
      }
    })
    .catch(err => dispatch(loadDocsError(err.message)))
  }
}
