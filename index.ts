import { STATE_PATTERN } from './src/10_1_state-bad/index';
import { ITERATOR_2 } from './src/09_2_iterator/index';
import { ITERATOR } from './src/09_1_iterator/index';
import { ADAPTER } from './src/07_adapter/index';
import { OBSERVER } from './src/02_observer/index';
import { STRATEGY } from "./src/01-strategy/index";
import { DECARATOR } from './src/03_decarator';
import { SIMPLE_FACTORY } from './src/04_1_simple_factory/index';
import { HARD_FACTORY } from './src/04_2_hard_factory';
import { COMAND } from './src/05_comands';
import { TEMPLATE_METHOD } from './src/08_template_method';

//STRATEGY();
//OBSERVER();
//DECARATOR();
//SIMPLE_FACTORY();
//HARD_FACTORY();
//COMAND()
//ADAPTER()
//TEMPLATE_METHOD()
//ITERATOR()
//ITERATOR_2();
STATE_PATTERN()

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












