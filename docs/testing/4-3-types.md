
> # **4.3** Test Types

### Functional Tests
Functional tests are those tests that evaluate if a system is performing according to a specification or requirement, often detailed in a use case or user story. 
Functional tests look at the system behavior as a guide to what the system should be do.

### Non-Functional Tests
Non-Functional Tests evaluate the characteristics of a system and include performance testing, security testing, and other testing that does not directly test 
system functionality. However, as in the case of performance testing, we do exercise a functional test under load to examine its characteristics for the purposes 
of acquiring timing/performance information.

### Structural/architectural
Structural/architectural testing is a white box testing activity which is concerned with coverage of code within modules and functions. The structure is tested 
to meet all possible conditions that the code provides for. Any code not exercised from the tests would require specific test conditions to be created, thus 
improving the overall coverage of code within the module or function.

### Retesting/regression
When changes are made to a system or component, testing should be done in order to ensure the system or component continues to operate as expected.  This can 
include testing done after a defect has been fixed to ensure that the fix was applied correctly, or testing done as a result new features added to the system 
and where existing features need to continue to operate as expected.

Each these test types can be executed across test levels, where applicable. Also, there may be opportunities to reuse tests if designed as part of the automation 
strategy. For example, tests developed at the system test level may be re-used at the mission test level. 
