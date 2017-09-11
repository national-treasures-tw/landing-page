import {
  LOAD_DOCS_REQUEST, LOAD_DOCS_SUCCESS, LOAD_DOCS_ERROR, EMPTY_DOCS,
  LOAD_SINGLE_DOC_REQUEST, LOAD_SINGLE_DOC_SUCCESS, LOAD_SINGLE_DOC_ERROR,
  SELECT_TAG, SELECT_FITLER, CALIBRATE_OCR, CALIBRATE_TRANSLATE,
  CALIBRATION_SUCCESS, CALIBRATION_ERROR, CALIBRATION_REQUEST
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
    
    case CALIBRATE_OCR:
      let newSelectedDoc = state.selectedDocs[action.uid];
      if (!newSelectedDoc.oldOcrText) {
        newSelectedDoc.oldOcrText = newSelectedDoc.ocr[0];
      } 
      newSelectedDoc.ocr[0] = action.text;
      newSelectedDoc.isCalibrateSuccess = false;

      return { ...state, selectedDocs: { ...state.selectedDocs, [action.uid]: newSelectedDoc } };

    case CALIBRATE_TRANSLATE:
      let _newSelectedDoc = state.selectedDocs[action.uid];
      if (!_newSelectedDoc.oldTranslateText) {
        _newSelectedDoc.oldTranslateText = _newSelectedDoc.translate[0];
      } 
      _newSelectedDoc.translate[0] = action.text;
      _newSelectedDoc.isCalibrateSuccess = false;

      return { ...state, selectedDocs: { ...state.selectedDocs, [action.uid]: _newSelectedDoc } };

    case CALIBRATION_REQUEST:
      return { ...state, isCalibrating: true };

    case CALIBRATION_SUCCESS:
      let _newSelectedDoc_ = state.selectedDocs[action.uid];
      _newSelectedDoc_.oldTranslateText = null;
      _newSelectedDoc_.oldOcrText = null;
      _newSelectedDoc_.isCalibrateSuccess = true;

      return { ...state, isCalibrating: false, selectedDocs: { ...state.selectedDocs, [action.uid]: _newSelectedDoc_ } };
    
    case CALIBRATION_ERROR:
      return { ...state, isCalibrating: false, errorMessage: action.message };

    default:
      return state;
  }
};

export default documentReducer;
