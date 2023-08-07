usage:
``` html
  <script src="https://raw.githubusercontent.com/UV-mod/uv-mod/main/uv-mod/uv-mod.min.js"></script>
```

file pattern:
``` html
<shadow></shadow>
<style></style>
<script></script>
```

`<shadow>` is element shadow markup
`<style>` is element css style tag
`<script>` is script into uv element 

##Script API

script tag is "function"

arguments: 
```ts
(multiMethod: UVScriptApiMultiMethod, parentElement: Element, shadow: Element)
```

UVScriptApiMultiMethod in development

you can return object by type:
```html
 <script>
  return {
      attributes: ["type", ...],
      callback: function (name, oldValue, newValue) {
          * do some *
     }
   }
 </script>
```

interface: 
```ts
observe: {
		attributes: string[];
		callback: (name: string, oldValue: string, newValue: string) => void;
};
```
