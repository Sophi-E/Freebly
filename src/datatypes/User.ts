export type User = {
  currentUser: {
    uid: string,
    displayName: string,
    email: string,
    photoURL: string,
    roles?: string[],  
  }
};
