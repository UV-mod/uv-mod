usage:
``` html
  <script src="https://raw.githubusercontent.com/UV-mod/uv-mod/main/uv-mod/uv-mod.min.js"></script>
```

# Content:
1. [links](#link)
2. [Script API](#Script-API)
3. [Define uv component from file](#Define-uv-component-from-file)
4. [Define uv component as muv](#Define-uv-component-as-muv)

##link:	
1.[site](https://uv-mod.github.io/uv-mod/)

file pattern:
``` html
<shadow></shadow>
<style></style>
<script></script>
```

`<shadow>` is element shadow markup
`<style>` is element css style tag
`<script>` is script into uv element 

## Script API

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

## Define uv component from file
```js
uv.define("%componentPath%", "%componentPath2%", ... , "%componentPathN%");
uv.render();
```

## Define uv component as muv
```js
uv.defineFromMUV("%componentName%", "%muvValue%");
uv.render();
// example
uv.defineFromMUV("button", "PHNoYWRvdz48ZGl2PjxzcGFuPiR0ZXh0PC9zcGFuPjwvZGl2Pjwvc2hhZG93PjxzdHlsZT5kaXZ7LS1hLWNvbG9yOmhzbCgyMjAsIDUwJSwgNzAlKTstLWEtMmNvbG9yOmhzbCgwLCA1MCUsIDcwJSk7LS1iZy1jb2xvcjpoc2woMjIyLCAxMDAlLCA5NiUpOy0tYmctMmNvbG9yOmhzbCgxMCwgMTAwJSwgOTIlKTstLWJvcmRlci1jb2xvcjpoc2woMCwgMCUsIDEwMCUpOy0td2lkdGg6M3JlbTtkaXNwbGF5OmZsZXg7Y3Vyc29yOnBvaW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Zm9udDpub3JtYWwgMTZweC8xOXB4IFVWTS1Db25kbztsZXR0ZXItc3BhY2luZzoxcHg7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1iZy1jb2xvcik7Y29sb3I6dmFyKC0tYS1jb2xvcik7cGFkZGluZzo0cHggMTZweDtoZWlnaHQ6MS41cmVtO3dpZHRoOnZhcigtLXdpZHRoKTtib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7Ym9yZGVyLXJhZGl1czouNXJlbTtib3gtc2hhZG93OjFweCAxcHggLjJyZW0gMCB2YXIoLS1hLWNvbG9yKSwtMXB4IC0xcHggLjJyZW0gMnB4IHZhcigtLWJvcmRlci1jb2xvcik7dHJhbnNpdGlvbjouNXN9ZGl2OmhvdmVye2JveC1zaGFkb3c6MnB4IDJweCAuMjVyZW0gMCB2YXIoLS1hLTJjb2xvciksLTFweCAtMXB4IC4ycmVtIDRweCB2YXIoLS1ib3JkZXItY29sb3IpO2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDkwZGVnLHZhcigtLWJnLTJjb2xvcikgMCx2YXIoLS1iZy0yY29sb3IpIDEwJSx2YXIoLS1ib3JkZXItY29sb3IpIDEwJSx2YXIoLS1ib3JkZXItY29sb3IpIDIwJSx2YXIoLS1iZy0yY29sb3IpIDIwJSx2YXIoLS1iZy0yY29sb3IpIDMwJSx2YXIoLS1ib3JkZXItY29sb3IpIDMwJSx2YXIoLS1ib3JkZXItY29sb3IpIDQwJSx2YXIoLS1iZy0yY29sb3IpIDQwJSx2YXIoLS1iZy0yY29sb3IpIDUwJSx2YXIoLS1ib3JkZXItY29sb3IpIDUwJSx2YXIoLS1ib3JkZXItY29sb3IpIDYwJSx2YXIoLS1iZy0yY29sb3IpIDYwJSx2YXIoLS1iZy0yY29sb3IpIDcwJSx2YXIoLS1ib3JkZXItY29sb3IpIDcwJSx2YXIoLS1ib3JkZXItY29sb3IpIDgwJSx2YXIoLS1iZy0yY29sb3IpIDgwJSx2YXIoLS1iZy0yY29sb3IpIDkwJSx2YXIoLS1ib3JkZXItY29sb3IpIDkwJSx2YXIoLS1ib3JkZXItY29sb3IpIDEwMCUsdmFyKC0tYmctMmNvbG9yKSAxMDAlKTtjb2xvcjp2YXIoLS1hLTJjb2xvcik7YW5pbWF0aW9uOjEuNXMgZGFuc2VyIGxpbmVhciBpbmZpbml0ZTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnR9ZGl2OmFjdGl2ZXthbmltYXRpb246LjVzIGRhbnNlciBsaW5lYXIgaW5maW5pdGV9QGtleWZyYW1lcyBkYW5zZXJ7dG97YmFja2dyb3VuZC1wb3NpdGlvbjpjYWxjKHZhcigtLXdpZHRoKSAqIDEuNil9fTwvc3R5bGU+PHNjcmlwdD48L3NjcmlwdD4=");
uv.render();
```

use "render" only after all adding uv-components
