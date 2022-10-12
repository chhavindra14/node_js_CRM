const express = require('express');
import ragister from './Controllers/Ragister'
import Postdata from './Controllers/Post';
import lead from './Controllers/Lead';
import team from './Controllers/Team';
import admin from './Controllers/Admin'
import project from './Controllers/Project'
import login from './Controllers/Login';
import CheckAuth from './Middeware/CheckAuth';
import {authPage} from './Middeware/RoleAuth';
import folloups from './Controllers/Folloups';
import punch from './Controllers/Punch';
import AdminAuth from './Middeware/AdminAuth';
const router = express.Router();





router.use('/login', login)
router.use('/project' ,[CheckAuth], project);
router.use('/leads' ,CheckAuth, lead);
router.use('/folloups',CheckAuth, folloups);
router.use('/user',[AdminAuth], punch )

//only admin accesss URL
router.use('/admin',[AdminAuth], admin )
router.use('/admin/team',[AdminAuth],team);




//test
// router.use('/admin/user' , Postdata);
// router.use('/admin/student', ragister);
// router.use('/student', ragister);
// router.use('/user' , Postdata);

export default router;