## Submitting Pull Requests

**Please follow these basic steps to simplify pull request reviews - if you don't you'll probably just be asked to anyway.**

* Please rebase your branch against the current master
* Run ```npm install``` to make sure your development dependencies are up-to-date
* Please ensure that the test suite passes **and** that code is lint free before submitting a PR by running:
 * ```npm test```
* Please commit via ```npm run commit```
  * Add changes to git ```git add <files> ```
  * Run ```npm run commit```
  * Choose kind of change and descripe the change. 
* If you've added new functionality, **please** include tests which validate its behaviour
* Make reference to possible [issues](https://github.com/Nightapes/HumanizeDuration.ts/issues) on PR comment
