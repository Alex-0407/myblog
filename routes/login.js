/**
 * Created by liulei_dev on 2016/1/25.
 */

var User = require('../modules/user');
function Login() {

}

Login.prototype.addUser = function *(next) {
    var name = this.query.name;
    var password = this.query.password;
    if (!(yield User.thereIs(name))) {
        yield User.addUser(name, password);
        this.body = true;
    } else {
        this.body = false;
    }
};

module.exports = new Login();
