import axios from 'axios';

import { ADDNEW_SUMMARY, GETALL_SUMMARY, UPDATE_SUMMARY, DELETE_SUMMARY, UPDATE_KEYWORD } from './type';

const API_URL = 'http://localhost:8000';

export const addNewSummary = (url) => async (dispatch) => {
    try {
        const response = await axios.post(`${API_URL}/summaries`, { url });
        dispatch({ type: ADDNEW_SUMMARY, payload: response.data });
    } catch (error) {
        console.log('Error while calling addNewSummary API ', error.message);
    }
}

export const getAllSummary = () => async (dispatch) => {
    try {
        const response = await axios.get(`${API_URL}/summaries`);
        dispatch({ type: GETALL_SUMMARY , payload: response.data });
    } catch (error) {
        console.log('Error while calling getAllSummary API ', error.message);
    }
}

export const updateSummary = (id, title, text) => async (dispatch) => {
    try {
        const response = await axios.put(`${API_URL}/summaries/${id}`, { title, text });
        dispatch({ type: UPDATE_SUMMARY, payload: response.data });
    } catch (error) {
        console.log('Error while calling updateSummary API ', error.message);
    }
}

export const deleteSummary = (id) => async (dispatch) => {
    try {
        const response = await axios.delete(`${API_URL}/summaries/${id}`);
        dispatch({ type: DELETE_SUMMARY, payload: response.data});
    } catch (error) {
        console.log('Error while calling deleteSummary API ', error.message);
    }
}

export const updateKeyword = (id, newKeyword) => async (dispatch) => {
    try {
        const response = await axios.put(`${API_URL}/summaries/${id}/keyword`, { newKeyword });
        dispatch({ type: UPDATE_KEYWORD, payload: response.data});
    } catch (error) {
        console.log('Error while calling updateKeyword API ', error.message);
    }
}