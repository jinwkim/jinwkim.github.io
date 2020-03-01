# Jin Kim
[A personal webite for Jin Kim: jinwoookim.com](https://www.jinwoookim.com)

Below are notes on HTML from [W3Schools](https://www.w3schools.com/html/default.asp)
## HTML Attributes
* HTML links using "a" tag - a href="https://www.w3schools.com">This is a link /a>
* Images using "src" attribute - img src="img_girl.jpg" alt="Girl with a jacket" width="500" height="600">
    * "alt" to show text when image cannot be displayed
* style attribute (CSS) - p style="color:red">This is a red paragraph./p>
* title attribute to show text when you hover over text
    * p title="I'm a tooltip"> This is a paragraph /p>

## Headings
* Search engines use headings to index the structure and content of web pages
* Each HTML heading has a default size but can be overriden with "style" attribute via CSS
* hr> - horizontal breaks, separate content
* head> - container for metadata, not displayed

## Paragraphs
* br> - line break, new line without starting new paragraph within p>
    * Empty tag, no need to end tag
* pre> - preformatted text, preserves spaces and line breaks

## Styles
* HTML style follows this syntax to utilize CSS - tagname style="property:value;">
    * Example properties - color, font-family, font-size, text-align

## Text Formatting
* Various elements like mark>, del>, small>, ins>, sub> subscripted text, sup> superscripted text

## Quotations
* blockquote>, abbr>, etc.

## Colors
* Colors can be specified with words, RGB values, HEX, RGBA, HSLA, etc.
* RGB (0-255) -> HEX #rrggbb 

## CSS - Cascading Style Sheets
* Can control layout of multiple web pages at once
* Can be added in 3 ways:
    * inline - "style" attribute
        - h1 style="color:blue;">This is a Blue/h1>
    * internally - style> element in head>
        - style>
            body {background-color: powderblue;}
            h1   {color: blue;}
            p    {color: red;}
        /style>
    * externally - CSS file
        - head>link rel="stylesheet" href="styles.css">/head>
        - Specify in styles.css, sample:
            body {
              background-color: powderblue;
              font-family: verdana;
            }
            h1 {
              color: blue;
            }
            p {
              color: red;
            }
* Use "id" attribute to specify style for specific element
    * p id="p01">I am different/p>
    * In CSS: #p01{color:blue;}
* Use "class" attribute to specify a class
    * p class="error">I am different/p>
    * In CSS: p.error{color:red;}
* Reference external style sheets: link rel="stylesheet" href="/html/styles.css">

## Links
* Hyperlinks with a> tag
* a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!/a>
    * "target" to choose new window, same window, etc.
* Button as a link - button onclick="document.location = 'default.asp'">HTML Tutorial/button>
* Can "bookmark" parts of the page
    * h2 id="C4">Chapter 4 /h2>
    * a href="#C4">Jump to Chapter 4 /a>

## Images
* Use "style" over "width"/"height" - img src="img_girl.jpg" alt="Girl in a jacket" style="width:500px;height:600px;">
* To use images as a link, put img> inside a> tag
* [Background Images](https://www.w3schools.com/html/html_images_background.asp)

## [Classes](https://www.w3schools.com/html/html_classes.asp)
* Use the "class" attribute to define equal styles for elements with the same class name
* Apply with JavaScript to perform a function against all elements within a specific class
* Example - script> within body>
	* script>
	* function myFunction() {
	*  var x = document.getElementsByClassName("city");
	*  for (var i = 0; i  x.length; i++) {
	*    x[i].style.display = "none"; } }
	* /script>
* vs. ID
	* Only one element can have one unique id
	* You can bookmark to a link using href

## [Iframe](https://www.w3schools.com/html/html_iframe.asp)
* Embed a web page within a web page

## [JavaScript](https://www.w3schools.com/html/html_scripts.asp)
* Client-side script
* i.e. document.getElementById()

## [Head](https://www.w3schools.com/html/html_head.asp)
* "head" is a container for metadata - data about data, not displayed
* Use the following tags - title, style, meta, link, script, base
* Sample meta
	* meta charset="UTF-8">
	* meta name="description" content="Free Web tutorials">
	* meta name="keywords" content="HTML, CSS, XML, JavaScript">
	* meta name="author" content="John Doe">
	* meta http-equiv="refresh" content="30">
* Setting the view
	* meta name="viewport" content="width=device-width, initial-scale=1.0">
* Set the base URL
	* base href="https://www.w3schools.com/images/" target="_blank">

