import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import User from '../models/user.js';
import Role from '../models/role.js'
import Permission from '../models/permission.js';
import RolePermission from '../models/role_permission.js';
dotenv.config();

const Authorization = async (req, res, next) => {
    try {
        const {role} = await User.findOne({_id: req.userID});
        const checkRole = await Role.findOne({name: role});
        if (checkRole === null) res.sendStatus(403);
        const {name} = await Permission.findOne({method: req.method, path: req.URL}, {name: 1})
        const rolePermission = await RolePermission.findOne({role, permission: name})
        
        if (rolePermission !== null) next();
      
        res.sendStatus(403);
    } catch (error) {
        res.sendStatus(400);
    }
}
export default Authorization;