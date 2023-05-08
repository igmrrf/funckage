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

### STRINGS

### OBJECTS

### LOG

### TYPED
