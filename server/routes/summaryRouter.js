import express, { Router } from 'express';

import { addNewSummary, getAllSummary, updateSummary, deleteSummary, updateKeyword } from '../controller/summary-controller.js';

const summaryRouter = express.Router();

summaryRouter.post('/', addNewSummary);
summaryRouter.get('/', getAllSummary);
summaryRouter.put('/:id', updateSummary);
summaryRouter.put('/:id/keyword', updateKeyword);
summaryRouter.delete('/:id', deleteSummary);



export default summaryRouter;