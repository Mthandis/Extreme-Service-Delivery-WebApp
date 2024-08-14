module.exports = (requiredRole) => {
    return (req, res, next) => {
        console.log(req.user.roleName);
        console.log(requiredRole);
        if(req.user.roleName !== requiredRole) {
            return res.status(403).json({message: 'Access Denied'})
        }
        next();
    } 
}