# ErrorCounter
use constructor to achieve multiple instance of error counter

In Angular 1.X, all service are singleton. But in some scenario, we need multiple instances. For example, We have several tabs and each tab has many inputs with validation. and the tab number can be dynamically added and deleted. and we need to get all the error counts in all tabs.  
In these scenario, each tab need a error counter instance. The simple singleton service can not meet requirement. But we can let the service to reture a constructor function. 
