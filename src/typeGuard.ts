{
    // Type Guards

    // typeof --> type guard

    type AlphaNeumeric = string | number;
    const add = (param1 : AlphaNeumeric, param2 : AlphaNeumeric) : AlphaNeumeric => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        }else {
            return param1.toString() + param2.toString()
        }
    }
    // console.log(add('he', 'llo'))

    // In Guard
    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string,
        role: "Admin"
    }

    const getUser = (user : NormalUser | AdminUser) => {
        if('role' in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }else{
            console.log(`My name is ${user.name} and my role is a user.`);
        }
    }

    const normalUser : NormalUser = {
        name: 'Mr. Normal'
    }
    const adminUser : AdminUser = {
        name: 'Mr. Admin',
        role: 'Admin'
    }

    // getUser(adminUser)

}