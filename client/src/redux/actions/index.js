import axios from 'axios';

import { ADDNEW_SUMMARY, GETALL_SUMMARY, UPDATE_SUMMARY, DELETE_SUMMARY, UPDATE_KEYWORD } from './type';

const API_URL = 'http://localhost:8000';

export const addNewSummary = (url) => async (dispatch) => {
    try {

    } catch (error) {
        console.log('Error while calling addNewSummary API ', error.message);
    }
}

export const getAllSummary = () => async (dispatch) => {
    try {

    } catch (error) {
        console.log('Error while calling getAllSummary API ', error.message);
    }
}

export const updateSummary = (id, title, text) => async (dispatch) => {
    try {

    } catch (error) {
        console.log('Error while calling updateSummary API ', error.message);
    }
}

export const deleteSummary = (id) => async (dispatch) => {
    try {

    } catch (error) {
        console.log('Error while calling deleteSummary API ', error.message);
    }
}

export const updateKeyword = (id, keyword) => async (dispatch) => {
    try {

    } catch (error) {
        console.log('Error while calling updateKeyword API ', error.message);
    }
}