> # **3.3** Technical Support

### Developer
The software developer plays a key role in supporting the test automation team. The developer has first-hand knowledge of the tools and methods used to 
construct the software and system. This information will help guide the automation team in the evaluation and selection of tools that are compatible with 
the tools selected by the development team. Often developers can further aid the automation effort (and associated maintenance) by using uniquely identifiable 
names for objects/controls displayed by the software application. This is equally applicable to client-based or browser-based solutions. The key point here is that 
a little forethought by the developers can go a long way to facilitate the recognition of objects/controls by the automation team. For example, we avoid a common 
scenario where the properties of an application for a user "name" and user "account" show up as U25523 and A00056 within the automation tool rather than USER_NAME 
and USER_ACCOUNT.

### Database Administrator
Data forms a large part of tests, and test automation amplifies this. The role of the Database Administrator is key in assisting the needs of the automation team. 
These may include:

-	Assistance in configuring and selecting a database which emulates a production-like database
-	The ability to restore or revert a database to an earlier condition for retesting
-	Assistance in executing direct queries against the database in order to validate application behavior

### Systems Administrator
The System Administrator (SA) ensures that the system, including software, network, and interfaces are available to the test automation team. Additionally, 
the SA controls the updates (patches, security releases, etc.) that are applied to the servers on which the test automation solution runs. This coordination is 
very important as any changes to the underlying system may have consequences to the reliability of the test automation solution, with the possibility that it ceases to function.

The SA will also help the automation team with any updates to automation software that need to installed on the testing infrastructure and can assist the test automation team by providing an environment that emulates a production-like environment.
