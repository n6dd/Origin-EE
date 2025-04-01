import { Router } from 'express';
import { userRouter } from './user-routes.js';
<<<<<<< HEAD
import { mainNewsRouter } from './mainNews.js'; 
=======
>>>>>>> main

const router = Router();

router.use('/users', userRouter);
<<<<<<< HEAD

router.use('/news', mainNewsRouter); 
=======
>>>>>>> main

export default router;
