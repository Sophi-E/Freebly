So a few things. This will be updated and edited as I need, in order to keep my thoughts straight.

08/03
  * I was thinking that, as we change the data structures for the Firestore, we need to write an update script that alters *all* existing records to fit the new mold. I'm rethinking that. First, it could break in unexpected ways, and second, it could be a major pain, in that google will begin to charge - each schema rewrite would incur a MASSIVE hit on the store, thus racking up usage stats. Instead, I'm thinking we write a custom class for each data model, and when we read the data from the firestore, we simply coerce fields on the fly as needed. Here's an example:
  - we have a 'replies' collection within the '/posts/{postUid}' document, and the structure for that currently looks like this:
```
/posts
  /{postUid}
    /replies
      /{replyUid}
        {
          message,
          postDate,
          userId
        }
```
and that's simply not going to do what I want to do, when we add some functionality. For example, we might want to add the repliers username here, or a field for whether the original poster has viewed this, as well as whether this is the chosen request to close the post. But all of that doesn't exist in the current structure.

**BUT**! I think we can create a Reply class, and when we read each reply from the Firestore, we coerce that into our class. *This* is where, if there are changes to the schema, that change happens. Here's what that might look like:

```js
class Reply {
  /***
   * Originally, I was thinking we would simply store the
   *   object directly in the constructor, but I think that's
   *   a little to simplistic. Instead, we want to pass the
   *   class a documentSnapshot, the complete Firestore ref
   *   for this particular reply. 
   * By doing this, we can simply call 
   *   myReply = new Reply(documentSnapshot);
   * and later, after updating any needed fields...
   *   myReply.save()
   ***/
  constructor(documentSnapshot){
    this._dbRef = documentSnapshot.ref;
    this._uid = documentSnapshot.id;

    // This line feeds the current data in its schema into our
    //   transformation method. If we update the schema, we simply
    //   update the init() method to catch that, transform the
    //   data, and possibly update the database structure? Not
    //   sure about that last.
    this._reply = init(documentSnapshot.data() );
  }
  /***
   * We create our default values here. As we add props
   *   to our class, we can simply update the constructor
   *   with those default values. If a field changes,
   *   we update the constructor as needed. In the case of
   *   the replyChosen field, we are simply setting it true
   *   or false. In the case of username, however, we'll need
   *   to do a little more working about in here - if the prop
   *   is not in the current object, we need to fetch that users
   *   name from the database, given their userId, and insert it
   *   in here. We'll keep the userId so that the poster can view
   *   their profile by clicking on the username. 
   ***/

  init({
    message      = 'Default Message',
    postDate     = new Date().toUTCString(),
    userId       = null,
    username     = null,
    posterViewed = null,
    chosenReply  = false,
  }){
    // see this line? It says "If we have a userID but no name..."
    if (userId && !username) {
      // Here, we would get the username from the firestore and 
      //  update the username field as appropriate.
    }

    return {
      message,
      postDate,
      userId,
      userName,
      posterViewed,
      chosenReply
    }
  }
  /****
   * Our class would likely include getters and setters, make it
   *  easy to access or modify our object. Also, we would like a
   *  convenient function to retrieve our object for saving.
   ****/
  get hasBeenViewed() {
    return this._reply.posterViewed === null;
  }
  set hasBeenViewed(/* the parameter here isn't used */){
    if(!this._reply.hasBeenViewed) this.reply.posterViewed = new Date().toUTCString();
  }
  get isChosen(){
    // This is a boolean, so we simply return its T/F value
    return this._reply.chosenReply;
  }
  set isChosen(boolean){
    // This will let us either choose, or unchoose, a reply.
    // In the container of all replies, we should run a check as
    //  to whether there is more than one chosen reply.
    this._reply.chosenReply = boolean;
  }
  get message() {
    return this._reply.message;
  }
  set message(request){
   /***
    *  If we need to, we can escape the string or perform other
    *  validation checks on it. By default, we simply replace
    *  the value directly
    ***/
    this._reply.message = request;
  }
  get userId(){
    return this._reply.userId;
  }

  set userId(uid){
    /***
     * This is one of those special cases. When the userId is
     *   updated (shouldn't be, but if it is), we should update
     *   the username as well.
     ***/
    this._reply.userId = uid;
    // Hmmm... how does the Reply class know about the User class?
    // Ack. I just painted myself into a corner.
  }
  get postDate(){
    return this._reply.postDate
  }
  set postDate(date){
    this._reply.postDate = date;
  }
  /***
   * By this save method, we completely replace existing data
   *   with our new data schema. This removes any obsolete or
   *   outdated fields, as well as creating the new ones.
   ***/
  async save(){
    await this._dbRef.set(this.__reply)
        .then(()=>console.log(`Reply ${this._uid} has been overwritten.') )
        .catch( (error) => console.error(`Error received: ${error}))
  }
  async delete(){
    await this._dbRef.delete()
        .then(()=>console.log(`Reply ${this._uid} has been deleted.`))
        .catch( (error) => console.error(`Error deleting: ${error}`))
  }
}
```

Not entirely sure, that may have just complicated the CRAP out of our data, but it seems to me that something along those lines would allow for both new replies, and existing ones.

```js
// with an existing id, we will simply import those fields.
const anExistingReply = new Reply(repliesRef.doc(myExistingDocId));

// If we create a new one, by using .doc() as below, we create a new,
//  empty document. Then our Reply class will initialize it with some
//  default values.
const aNewReply = new Reply(repliesRef.doc() )

// In either case, we have a handy interface to our Reply!
anExistingReply.message = "Foo bar baz";
aNewReply.userId="28FA!4Cz7Mz1";

aNewReply.save();
anExistingReply.save();
```

I think I messed that up. The class itself is using the documentSnapshot, which may not work for me. Instead, I simply want to use the db reference (I think), or pass in those properties? I'm not sure. I'm rethinking this approach. But I would like to create a data model here, so we can simply update the model and have the data itself being maintained within the model transparently.