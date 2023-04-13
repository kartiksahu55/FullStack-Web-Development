class User {
    constructor(name, pass) {
        this.username = name;
        this.password = pass;
    }
    getPassword() {
        return this.password.replace(/./g, '*');
    }
    setPassword(newPass) {
        let checkPassword = /^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
        if (checkPassword.test(newPass)) {
            this.password = newPass
        }
        else {
            console.log('Password must be at least 8 characters long and contain at least one uppercase number and one letter');
        }
    }
}

let user = new User("Mithun", "Password123")
console.log(user.getPassword());

user.setPassword("myPassword")

user.setPassword("MyPassword")

user.setPassword("Mypassword1234")
console.log(user.getPassword());

