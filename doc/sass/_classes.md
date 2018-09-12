# s-chip-component

Provide a nice and simple chip element


### Example
```html
	<span class="chip">
  <span class="chip__text">
    Hello World
  </span>
  <span class="chip__addon">
    <i class="fa fa-user"></i>
  </span>
</span>
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)


## Mixins


### s-chip-classes

Print out the bare and style component css
Generated classes:
- `.chip`
- `.chip__addon`
- `.chip__text`
- `.chip--closable`
- `.chip--{color}`


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The colors to generate  |  optional  |  default primary secondary


### s-chip-classes-bare

Print out the bare component css
Generated classes:
- `.chip`
- `.chip__addon`
- `.chip__text`


### s-chip-classes-style

Print out the style component css
Generated classes:
- `.chip--closable`
- `.chip--{color}`


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The colors to generate  |  optional  |  default primary secondary