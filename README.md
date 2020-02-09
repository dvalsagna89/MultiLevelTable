# MultiLevelTable
A multi-level table for AngularJS that shows 3 levels of a parameter an allows edit, add or remove elements.

# How to use

**You need:**
  - AngularJS
  - Angular Material
  - Angular Material Data Table: https://github.com/daniel-nagy/md-data-table
  - Loader
  - Moment: https://momentjs.com
  
**Steps:**
  - Add multi-level-table.component.js to your index.html
  - Inject "multiLevelTable" in your main module
  - Change the template path:
    ```javascript
    templateUrl: 'MultiLevelTable/multi-level-table.template.html',
    ```
  - Add the loader you want. A div tag with id="loader" is needed. I'm using one from this page: https://icons8.com/cssload
  
# What I learned
  - Send functions as parameters
  - Using ng-repeat-start
  - Using JSON to set up options
  - Developing a generic component
