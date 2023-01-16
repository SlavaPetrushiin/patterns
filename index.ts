import { OBSERVER } from './src/02_observer/index';
import { STRATEGY } from "./src/01-strategy/index";
import { DECARATOR } from './src/03_decarator';
import { SIMPLE_FACTORY } from './src/04_1_simple_factory/index';
import { HARD_FACTORY } from './src/04_2_hard_factory';
import { COMAND } from './src/05_comands';

//STRATEGY();
//OBSERVER();
//DECARATOR();
//SIMPLE_FACTORY();
//HARD_FACTORY();
COMAND()

// (async () => {
//     class Users {
//         _users: any[] | null;

//         private constructor(users: any[]) {
//             this._users = users;
//         }

//         static async fetchUsers() {
//             const response = await fetch('https://jsonplaceholder.typicode.com/users');
//             const users = await response.json();
//             return new Users(users)
//         }

//         get users() {
//             return this._users;
//         }
//     }



//     const report = await Users.fetchUsers();
//     console.log(report instanceof Users);
//     console.log(report.users);
// })()












