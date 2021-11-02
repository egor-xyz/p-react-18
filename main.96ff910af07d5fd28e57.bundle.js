(self.webpackChunkp_react_18=self.webpackChunkp_react_18||[]).push([[179],{7879:(e,t,n)=>{"use strict";n.r(t),n.d(t,{slides:()=>s,backgrounds:()=>u,fragmentSteps:()=>o,fusumaProps:()=>c,default:()=>p});var a=n(7401),l=n(9332);n(108),n(6066),n(1687),n(230);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}const s=[e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("h1",null,"New in ⚡️ React 18 ⚡️")),e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("h2",null,"The New Root API"),(0,l.kt)("h3",null,"React 17"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"ReactDOM.render(<App />, document.getElementById('root'));\n")),(0,l.kt)("h3",null,"React 18"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);\n"))),e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("h2",null,"Automatic Batching"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"}," const handleClick = async () => {\n    const res = await fetchSomething()\n\n    // React 18 and later DOES batch these\n\n    setCount(c => c + 1);\n    setFlag(f => !f);\n    // React will only re-render once at the end (that's batching!)\n }\n"))),e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("h2",null,"startTransition API"),(0,l.kt)("h3",null,"React 17"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"setText(input);\n")),(0,l.kt)("h3",null,"React 18"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"startTransition(() => {\n  setText(input);\n})\n"))),e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("h2",null,"useDeferredValue"),(0,l.kt)("p",null,"Goodbye lodash debounce ❤️"),(0,l.kt)("p",null,"Returns a deferred version of the value that may “lag behind”"),(0,l.kt)("p",null,"it for at most timeoutMs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const deferredValue = useDeferredValue(value, { timeoutMs: 2000 });\n"))),e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("h1",null,"All ES2022 features in one slide")),e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("h2",null,"Top-level await"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nlet jQuery; // one love :-)\n\ntry {\n  jQuery = await import('https://cdn-a.com/jQuery');\n} catch { }\n"))),e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("h2",null,"at() - new way to work with arrays"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const arr = [10,20,30,40];\n\n// same -> 10\narr[1];\narr.at(1);\n\n// same -> 40\narr[arr.length -1];\narr.at(-1); // Clear code !\n"))),e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("h2",null,"Object.hasOwn()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const student = {\n    name: 'Mark',\n    age: 18\n}\nObject.hasOwn(student,'age'); // true\nObject.hasOwn(student,'grade'); // false\n"))),e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("h3",null,"Class Fields / ",(0,l.kt)("strong",{parentName:"h3"},"#")," - private fields"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class ButtonToggle extends HTMLElement {\n  color = 'green';\n  #value = true;\n  toggle(){\n      this.#value = !this.#value;\n  }\n}\n")),(0,l.kt)("h3",null,"Private methods and getter/setters for JavaScript classes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class ButtonToggle extends HTMLElement {\n  color = 'green'\n  #value = true;\n  #toggle(){\n      this.#value = !this.#value\n  }\n  set #setFalseValue(){\n      this.#value = false;\n  }\n}\n"))),e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("h3",null,"Class Static Block"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// method defined outside of the class body\nlet initVal;\nclass ButtonToggle{\n  #value = false;\n  get getValue(){\n      if(!this.#value){\n          throw new Error('no value');\n      }\n      return this.#value\n  }\n  static {\n      initVal = () => {\n          // Ex: get data from API\n          this.#value = this.getValue;\n      }\n  }\n}\ninitVal();\n")))],u=[0,0,0,0,0,0,0,0,0,0,0],o=[0,0,0,0,0,0,0,0,0,0,0],c=[{classes:"title"},{classes:"title"},{classes:"title"},{classes:"title"},{classes:"title"},{classes:"title"},{classes:"title"},{classes:"title"},{classes:"title"},{classes:"title"},{classes:"title"}],i={};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",r({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",null,"New in ⚡️ React 18 ⚡️"),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"The New Root API"),(0,l.kt)("h3",null,"React 17"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"ReactDOM.render(<App />, document.getElementById('root'));\n")),(0,l.kt)("h3",null,"React 18"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"Automatic Batching"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"}," const handleClick = async () => {\n    const res = await fetchSomething()\n\n    // React 18 and later DOES batch these\n\n    setCount(c => c + 1);\n    setFlag(f => !f);\n    // React will only re-render once at the end (that's batching!)\n }\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"startTransition API"),(0,l.kt)("h3",null,"React 17"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"setText(input);\n")),(0,l.kt)("h3",null,"React 18"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"startTransition(() => {\n  setText(input);\n})\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"useDeferredValue"),(0,l.kt)("p",null,"Goodbye lodash debounce ❤️"),(0,l.kt)("p",null,"Returns a deferred version of the value that may “lag behind”"),(0,l.kt)("p",null,"it for at most timeoutMs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const deferredValue = useDeferredValue(value, { timeoutMs: 2000 });\n")),(0,l.kt)("hr",null),(0,l.kt)("h1",null,"All ES2022 features in one slide"),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"Top-level await"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// app.js\nlet jQuery; // one love :-)\n\ntry {\n  jQuery = await import('https://cdn-a.com/jQuery');\n} catch { }\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"at() - new way to work with arrays"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const arr = [10,20,30,40];\n\n// same -> 10\narr[1];\narr.at(1);\n\n// same -> 40\narr[arr.length -1];\narr.at(-1); // Clear code !\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"Object.hasOwn()"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const student = {\n    name: 'Mark',\n    age: 18\n}\nObject.hasOwn(student,'age'); // true\nObject.hasOwn(student,'grade'); // false\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",null,"Class Fields / ",(0,l.kt)("strong",{parentName:"h3"},"#")," - private fields"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class ButtonToggle extends HTMLElement {\n  color = 'green';\n  #value = true;\n  toggle(){\n      this.#value = !this.#value;\n  }\n}\n")),(0,l.kt)("h3",null,"Private methods and getter/setters for JavaScript classes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class ButtonToggle extends HTMLElement {\n  color = 'green'\n  #value = true;\n  #toggle(){\n      this.#value = !this.#value\n  }\n  set #setFalseValue(){\n      this.#value = false;\n  }\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",null,"Class Static Block"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// method defined outside of the class body\nlet initVal;\nclass ButtonToggle{\n  #value = false;\n  get getValue(){\n      if(!this.#value){\n          throw new Error('no value');\n      }\n      return this.#value\n  }\n  static {\n      initVal = () => {\n          // Ex: get data from API\n          this.#value = this.getValue;\n      }\n  }\n}\ninitVal();\n")))}p.isMDXComponent=!0},1600:(e,t,n)=>{"use strict";n.r(t),n.d(t,{backgrounds:()=>p,default:()=>d,fragmentSteps:()=>k,fusumaProps:()=>m,slides:()=>i});var a=n(7401),l=n(150);const r=l.F4`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,s=l.ZP.h2`
  display: inline-block;
  animation: ${r} 3s linear infinite;
`,u=()=>a.createElement(s,null,"Hello from jsx!!");var o=n(9332);n(108);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}const i=[e=>(0,o.kt)(a.Fragment,null,(0,o.kt)(u,{mdxType:"Sample",mdxType:"Sample"}))],p=[0],k=[0],m=[{}],g={};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",c({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{mdxType:"Sample"}))}d.isMDXComponent=!0},5516:(e,t,n)=>{"use strict";n.r(t)},3447:(e,t,n)=>{var a={"./0-slide.md":7879,"./1-slide.mdx":1600};function l(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=r,e.exports=l,l.id=3447}},e=>{e.O(0,[179],(()=>{[901,921,626].map(e.E)}),5);var t=t=>e(e.s=t);e.O(0,[736],(()=>(t(7751),t(1720),t(9969))));e.O()}]);