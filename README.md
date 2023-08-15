## FUNCKAGE

###### FUNCTIONS (We all know what this is.) - KAGE (shadow, shade, other side and shadows.)

#

#

### LOCAL STORAGE

Add data to localStorage temporarily without the need to delete them manually.

```javascript
import { store } from 'funckage'

const login = (userData) => {
  const response = await api.call("/login-url")
  const { token } = response;

  // default ttl of 24hours (key, data, ttl)
  store.setWithExpiry('token', token)
}
```

Then you can access it within the ttl;

```javascript
import { store } from 'funckage'

const getUserData =(userData)=>{
  // will return null if queried after ttl
  const token = store.getWithExpiry('token')

  const response = await api.call("/get-data-url", { headers: { 'auth-token': token } } )
  // use response in application
}
```

### Arrays

Basically a package for custom Javascript Functions to be used in the shade of greater projects.

Number to String Converter

Takes in a Number value and returns a String representation

Check the length of numbers to get the size (tens, hundreds, millions, ten millions, hundred millions, billions, ten billions, hundred billions, trillions, ten trillions, hundred trillions)
Example 1234, string?:
  Take it value, returns one thousand, then inputs one thousand to call another
  then returns one thousand two hundred then returns thirty, then returns four
   
switch(value.toString().length){
  case 1:
    size = "Units"
    break;
  case 2:
    size = "Ten"
    break;
  case 3:
    size = "Hundreds"
    break;
  case 4:
    size = "Thousands"
    break;
  case 5:
    size = "Ten Thousands"
    break;
  case 6:
    size = "Hundred Thousands"
    break;
  case 7:
    size = "Millions"
    break;
  case 8:
    size = "Ten Millions"
    break;
  case 9:
    size = "Hundred Millions"
    break;
  case 10:
    size = "Billions"
    break;
  case 11:
    size = "Ten Billions"
    break;
  case 12:
    size = "Hundred Billions"
    break;
  case 13:
    size = "Trillion"
    break;
  case 14:
    size = "Ten Trillions"
    break;
  case 15:
    size = "Hundred Trillions"
    break;
}