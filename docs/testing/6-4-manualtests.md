> # **6.4** Criteria for Converting Manual Tests to Automation

Most projects have documented test cases and scripts defining the test steps. When evaluating the migration of tests to automation, the following should be 
considered:

*Is the test necessary?*<br/>
Often, tests that were developed a long time ago no longer provide the value they once did as applications evolve and other newer tests may already cover parts of the 
functionality from older tests. When examining existing tests, evaluate if any or all of a test's functions may already be present in other tests.

*Is the test complete?*<br/>
Does the test exercise the complete business process so that it provides relevant, meaningful results? If not, the business analyst, manual tester, and test automation 
engineer will likely need to work together to enhance the capability of the automated test.

*Is the test effective?*<br/>
Effectiveness for any test can be measured by coverage to the requirement and coverage to the code. Specification based testing techniques help us determine how 
to construct data sets that will provide us with the least amount of test cases that can generate the highest level of coverage, thus mitigating deployment risk. 
Code coverage tools can be run by developers in parallel to test execution to verify the code coverage. Automation provides us the vehicle by which additional quality 
test cases can now be executed which previously were not possible, due to time and resource constraints, under a manual scenario.

*Is the test efficient?*<br/>
Test efficiency can take on several aspects, from speed of execution to overall construction. Automation by itself will always execute a test faster than can be 
done manually. However, not all manual tests have been designed in a way that is efficient for automation to process them. For example, for many applications, 
testing follows a prescribed path through an application. The path of navigation is what allows us to test getting from, say, the login screen to the reports screen. 
Some applications can have complex or lengthy paths before even getting to test for data. With automation we have the opportunity to create navigational tests that 
can be combined with functional tests in a manner that allows for reuse.

Regarding test construction, the approach used to develop a manual test will often differ from the approach to develop an automated test. This is due to the different 
ways in which each test is executed. Testers think and act linearly, while computers can be made to jump from one area to another. 

Decomposition of manual tests and reconstruction is a worthwhile effort in order to maximize the quality of automated tests produced. Depending on how manual tests 
have been created, they may be:

-	*Broken apart and reconstituted across various automated tests*
-	*Combined into one larger automated test*
-	*Converted one-for-one as an automated test*