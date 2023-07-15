## FUNCKAGE

###### FUNCTIONS (We all know what this is.) - KAGE (shadow, shade, other side and shadows.)

#

#

### LOCAL STORAGE

Add data to localStorage temporarily without the need to delete them manually.

```javascript
import { store } from 'funckage'

const login (userData)=>{
  const response = await api.call("/login-url")
  const { token } = response;

  // default ttl of 24hours (key, data, ttl)
  store.setWithExpiry('token', token)
}
```

Then you can access it within the ttl;

```javascript
import { store } from 'funckage'

const getUserData (userData)=>{
  // will return null if queried after ttl
  const token = store.getWithExpiry('token')

  const response = await api.call("/get-data-url", { headers: { 'auth-token': token } } )
  // use response in application
}
```

### Arrays

Add ,delete and update objects in arrays with a key of id

```javascript
import { data } from "funckage";

const updateCollection = (collection, item) => {
  return updateItem(collection, item);
  // Updates the object item in the collection array
};
```

```javascript
import { data } from "funckage";

const addToCollection = (collection, item) => {
  return array.addItem(collection, item);
  // pushes item to the collection array
};
```

```javascript
import { data } from "funckage";

const deleteItemFromCollection = (collection, item) => {
  return array.deleteItem(collection, item);
  // delete item from a collection of array
};
```

### Maths

perform basic math functions

```javascript
import { data } from "funckage";

 const = maths.compound(amount, percentage, period)
//  calculate compound intrest
```

### Strings

Capitalize the first word of a string

```javascript
import { data } from "funckage";

string.capitalize("foobar");
// will return Foobar
```

Remove country code from an array of phone numbers

```javascript
string.removeCountryCode([+9123434576, 23423432234]);
// remove the country code from phone numbers
```
