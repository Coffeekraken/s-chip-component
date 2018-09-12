# component

description


### Example
```html
	<!-- example here -->
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com)


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