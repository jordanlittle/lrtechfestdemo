# LRTechFest 2015
_These files accompany a talk given by Brent Coney and Jordan Little at LRTechFest 2015._

---

# Modern UIs with Knockoutjs and stateful CSS
Browsers are more capable than ever at delivering rich, native-like experiences, but the stateless nature of the web makes them rather difficult to build. Binding a data model to the UI using an MVVM (Model, View, ViewModel) javascript framework allows developers to manage complex interfaces with relatively little code. We’ll walk you through how we use Knockout (one such MVVM framework) to untangle modern UIs and how we simplify our CSS by using BEM syntax to provide “stateful” classes for our interface.

## Follow along
Interact with the prototype as we explain our thought process behind how we built it by downloading the zip file for this project (right sidebar on github's site) and opening the <code>www/index.html</code> file in your browser.

## Dig into code
This guide assumes you have a bit of knowledge of the following libs/tech&hellip;
- git [ [install](http://git-scm.com/downloads) ]
- nodejs and npm [ [install](https://nodejs.org/download/) ]
- grunt [ [install](https://github.com/gruntjs/grunt) ]
- a teeny bit of command line knowledge

### Getting started
1. Open your command line of choice.
2. Navigate to the directory where you want to put these files.  
E.g. <code>cd ~/Code</code>
3. Assuming you have git installed, clone the lrtechfestdemo repo with  
<code>git clone https://github.com/Inuvo/lrtechfestdemo.git</code>
4. Assuming you have nodejs and npm installed, enter  
<code>npm install</code>
5. Running <code>grunt</code> at this point should launch a browser window on port 9001 with the site open.

# GeneriCorp Staff Manager v1.0
So here's what we're building&hellip;
<img src="http://i.imgur.com/DkHEX08.png" alt="" />
Looks like we have a straightfoward list of staff members, a way to add new ones, edit, delete, the usual actions, as well as an Employee of the Month denoted by a colored star.
