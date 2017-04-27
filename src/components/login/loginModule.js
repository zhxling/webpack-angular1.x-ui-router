module.exports = angular => {
    const loginModule = angular.module('loginModule', []);
    require('./loginController')(loginModule);
    require('../common/AuthData')(loginModule);
}