<!-- classes: title -->
# New in ⚡️ React 18 ⚡️

---
<!-- classes: title -->
## The New Root API


### React 17

```ts
ReactDOM.render(<App />, document.getElementById('root'));
```

### React 18

```ts
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

---
<!-- classes: title -->
## Automatic Batching

```ts
 const handleClick = async () => {
    const res = await fetchSomething()

    // React 18 and later DOES batch these

    setCount(c => c + 1);
    setFlag(f => !f);
    // React will only re-render once at the end (that's batching!)
 }
```

---
<!-- classes: title -->
## startTransition API

### React 17

```ts
setText(input);
```

### React 18

```ts
startTransition(() => {
  setText(input);
})
```

---
<!-- classes: title -->
## useDeferredValue

Goodbye lodash debounce ❤️

Returns a deferred version of the value that may “lag behind”

it for at most timeoutMs.

```ts
const deferredValue = useDeferredValue(value, { timeoutMs: 2000 });
```

---
<!-- classes: title -->
# All ES2022 features in one slide

---
<!-- classes: title -->
## Top-level await

```js
// app.js
let jQuery; // one love :-)

try {
  jQuery = await import('https://cdn-a.com/jQuery');
} catch { }
```

---
<!-- classes: title -->
## at() - new way to work with arrays

```js
const arr = [10,20,30,40];

// same -> 10
arr[1];
arr.at(1);

// same -> 40
arr[arr.length -1];
arr.at(-1); // Clear code !
```

---
<!-- classes: title -->
## Object.hasOwn()

```js
const student = {
    name: 'Mark',
    age: 18
}
Object.hasOwn(student,'age'); // true
Object.hasOwn(student,'grade'); // false
```

---
<!-- classes: title -->
### Class Fields / **#** - private fields

```js
class ButtonToggle extends HTMLElement {
  color = 'green';
  #value = true;
  toggle(){
      this.#value = !this.#value;
  }
}
```

### Private methods and getter/setters for JavaScript classes

```js
class ButtonToggle extends HTMLElement {
  color = 'green'
  #value = true;
  #toggle(){
      this.#value = !this.#value
  }
  set #setFalseValue(){
      this.#value = false;
  }
}
```
---
<!-- classes: title -->
### Class Static Block

```js
// method defined outside of the class body
let initVal;
class ButtonToggle{
  #value = false;
  get getValue(){
      if(!this.#value){
          throw new Error('no value');
      }
      return this.#value
  }
  static {
      initVal = () => {
          // Ex: get data from API
          this.#value = this.getValue;
      }
  }
}
initVal();
```