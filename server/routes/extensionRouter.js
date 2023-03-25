import express, { Router } from 'express';

import { handleUrl } from '../controller/extension-controller.js';

const extensionRouter = express.Router();

extensionRouter.post('/', handleUrl);



export default extensionRouter;