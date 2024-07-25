import express from 'express'
import { courseRouter } from './courseRouter';
export const router = express.Router()

router.use('/courses',courseRouter);