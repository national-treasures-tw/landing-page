import axios from 'axios';
import {
  LOAD_DOCS_REQUEST, LOAD_DOCS_SUCCESS, LOAD_DOCS_ERROR, EMPTY_DOCS,
  LOAD_SINGLE_DOC_REQUEST, LOAD_SINGLE_DOC_SUCCESS, LOAD_SINGLE_DOC_ERROR,
  SELECT_TAG, SELECT_FITLER, CALIBRATE_OCR, CALIBRATE_TRANSLATE,
  CALIBRATION_SUCCESS, CALIBRATION_ERROR, CALIBRATION_REQUEST
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

export const selectTag = (tag) => ({
  type: SELECT_TAG,
  tag
});

export const selectFilter = (filter, filterLabel) => ({
  type: SELECT_FITLER,
  filter,
  filterLabel
});

export const hydrateDocs = (uid, tag, treasureBox) => {
  const getDocs = (tag, docs, lastKey, dispatch) => axios.get(`https://76k76zdzzl.execute-api.us-east-1.amazonaws.com/stage/upload?limit=800&tag=${tag || ''}${lastKey ? `&lastKey=${encodeURI(JSON.stringify(lastKey))}` : ''}`)
    .then((res) => {
      if (res.data && res.data.Items) {
        const newDocs = [...docs, ...res.data.Items];
        const newLastkey = res.data.LastEvaluatedKey;

        if (res.data.Items.findIndex(e => e.uid === uid) === -1) {
          return getDocs(tag, newDocs, newLastkey, dispatch);
        } else {
          const doc = treasureBox.selectedDocs[uid];
          const box = doc.metadata.box;
          const USAidBoxes = ['93-94', '95-96', '21-22', '245-246'];
          const fullLabel = `${doc.metadata.title} Box: ${box}`
          dispatch(receiveDocs(newDocs, newLastkey));
          if (USAidBoxes.indexOf(box) !== -1) {
            dispatch(selectFilter(box, fullLabel));
          }
        }
      } else {
        dispatch(loadDocsError('No documents received'))
      }
    })


  return (dispatch) => {
    dispatch(requestDocs());

    return getDocs(tag, [], null, dispatch);
  }
}

export const loadDocs = (tag, lastKey, isReloadingDocs) => {
  return (dispatch) => {
    // requesting docs...
    if (isReloadingDocs) {
      dispatch(emptyCachedDocs())
    }
    dispatch(requestDocs());
    return axios.get(`https://76k76zdzzl.execute-api.us-east-1.amazonaws.com/stage/upload?limit=1000&tag=${tag || ''}${lastKey ? `&lastKey=${encodeURI(JSON.stringify(lastKey))}` : ''}`)
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

export const calibrate = (uid, ocrMode, calibratedText) => {
  return {
    type: ocrMode === 'En' ? CALIBRATE_OCR : CALIBRATE_TRANSLATE,
    text: calibratedText,
    uid
  }
}

const calibrationError = message => ({
  type: CALIBRATION_ERROR,
  message,
});

const requestCalibration = () => ({
  type: CALIBRATION_REQUEST,
});

const calibrationSuccess = (uid) => ({
  type: CALIBRATION_SUCCESS,
  uid
});

export const calibrationComplete = (uid, oldText, newText, type) => {
  return (dispatch) => {
    // requesting docs...
    dispatch(requestCalibration());
    return axios.post('https://76k76zdzzl.execute-api.us-east-1.amazonaws.com/stage/calibrate', {
      oldText,
      newText,
      uid,
      type,
      userId: 'none'
    })
    // return new Promise((resolve, e) => setTimeout(() => resolve({ data: { success: true }}), 2000))
    .then((res) => {
      if (res.data && res.data.success) {
        dispatch(calibrationSuccess(uid));
      } else {
        dispatch(calibrationError('Something went wrong'))
      }
    })
    .catch(err => dispatch(calibrationError(err.message)))
  }
}
