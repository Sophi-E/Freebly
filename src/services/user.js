import db from './firestore';
import { get } from 'http';

class User {
  constructor(user){
    this.uid = user.email;

  }
  has(permission){
    return db.collection('users')
             .where('email', '==', this.uid)
             .where('permissions', 'array_contains', permission)
             .get()
             .then(doc=>doc.length===1 ? true : false )
             .catch(err => {
               console.log(err.message);
               return false;
             })
  }
  is(role){

  }
}

export default User;