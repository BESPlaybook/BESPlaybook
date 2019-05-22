#6 Migrating From Manual to Automated Testing

###6.1 What Makes Sense to Automate

The process of test case selection and evaluation 

*Complex tests*<br/>
Tests that are complex create the possibility of introducing errors into their execution. Testers, careful as they are, are susceptible to making execution errors 
while they are testing. Complexity is a quality best delegated to computers. However, the complexity of the test need to be designed and tested before or during 
the codification to automation. Complex tests may require testing results from calculations and those calculation results are best defined outside of the automated 
test. Otherwise, the automated test adds additional risk of coding and logic error if it not only has to validate results but also needs to calculate them as well.

*Long tests*<br/>
Often, business scenarios can take 100 - 300 steps in order to be fully exercised. This creates very long tests which are very time-consuming to execute. The longer 
the manual execution time, the more time there is to introduce an operator error. Additionally, manually executing a long test introduces risk as it is difficult to 
document the intervening steps making it difficult to state unequivocally if the test was 100% successful. Automation allows us to codify any number of steps necessary 
to execute a test, all with the possibility of providing an audit trail of that activity. 

*Repeatable tests*<br/>
Tests that are run on a regular basis in order to validate application functionality are excellent candidates for automation as reuse provides high return on 
investment. Often, projects will use a risk-based approach to testing that balances the risks with the high-value system functions. In this way the most critical 
functionality is tested first, while less critical functionality is tested time permitting. Often the first tests that will be automated are the smoke tests, or 
high-level tests which are run for every release, major and minor, and whose function is to establish the most basic operational requirement. This often will include 
the ability to access a system with valid credentials, navigate across major application functions, and verify that there is database connectivity.

*Dependency tests*<br/>
Although we develop tests as stand-alone entities, often tests and test data are dependent on one another. For example, when entering an airplane part into an 
order, we would expect to find that same airplane part in a shipping manifest for that newly created order. If we have one test that creates the order, we need to 
somehow pass the new order number to the next test so that it can verify the shipping manifest. When testing this manually, we look at the system generated  order 
number, write it down, and then use that order number on the following test. This can get cumbersome and inefficient. With automation, we merely provide an instruction 
to capture and store the value that we can access at a later time.

*Scenario based tests*<br/>
Business scenarios often involve multiple dependencies, as described above. However, for the scenario we have a larger scale process that we need to confirm is 
working. Automation provides an opportunity to link the various functions that are tested across a business scenario. Automation can help synchronize the starting 
of tests, passing of data from one test to another, aggregating test results, and monitoring systems while the automated test is running. For example, when testing 
month-end or quarter-end close activities there are a number of processes that need to be done, in a specific order, and dependent upon each other, in order that the 
final month-end reporting is correct and accurate. 

###6.2 When Should Automation Occur

Ideally, automation of tests should occur once we have a strong understanding of what needs to be tested, when have defined test cases, and when we've developed 
test data for those test cases.

When we've achieved the above, we've likely already tested once or more times manually in order to ensure that our test definitions are correct.

This initial manual test activity can save much time for the test automation engineer as that individual will now have valid test conditions and data to work with in 
developing automated tests. 

For traditional development methodologies, this would occur after the initial software release and automation would be most helpful in building out a regression 
test bed.

For Agile projects, the automation will likely be scheduled as a 1- or 2-sprint offset as individual sprints themselves do not often allow adequate time to build 
out the test automation architecture and framework. Automation in Agile becomes a work-in-progress where each successive sprint sees additional functionality and 
maturation added to the test automation solution.

###6.3 Criteria for Creating New Automated Tests

There may be an opportunity to immediately automate tests, rather than prepare for automation with manual tests. In order for this to happen, the test 
automation framework has to be sufficiently developed to allow its use for new tests. The timing of this is dependent on the complexity of the application and 
components that need to be tested. For example, if an application has 200 different controls spread across 5 functional areas, the framework must be capable of 
identifying and interacting with each of those controls, so that no test is off limits for development. If the 200 controls can be mapped out against the 5 
functional areas, then as long as the functional areas under test have been verified and are compatible automation can proceed. Often automation teams do not do 
their due diligence to find all controls and ensure that the test automation solution indeed is compatible with every one of them. It only takes 1 error in trying 
to interact with a control for testing to fail, thus undermining the automated approach.

###6.4 Criteria for Converting Manual Tests to Automation

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

###6.5 Transitioning Staff to Automation

Since the advent of testing tools there has been talk that automation kills testing jobs. For large programs heavily dependent on manual testers we would expect to see 
a reduction of an inefficient process. However, automation mostly helps testers increase their focus on developing quality tests rather than on time consuming 
"key pounding" test execution activity. 

It is very important to make sure staff understand that they are valued for their knowledge of systems and their testing acumen. It is also important to acknowledge 
that in order for automation to be successful, there are different roles, and not all roles require programing skills. Section 3.5 describes the various roles 
necessary for the tasks required to make automation successful.

*Outsourced solutions*<br/>
Test automation solutions can be contracted out to firms knowledgeable in creating and maintaining test automation frameworks. In this scenario, a firm would be 
contracted to assist in automating all or part of a system. Once the capability is developed the government would request documentation, training, and transitioning 
as part of the final deliverable. 

*Government developed solutions*<br/>
Government developed automation would require the selection of staff with the appropriate skills and training so that the process of building out automation does 
not become a learn-as-you-go exercise, which ultimately will not show a high return on investment. Appendix A covers many resources that can provide the necessary 
knowledge for team members.

*Acquiring automation assets*<br/>
In addition to the wide range of test automation tools described in Section 5.3.1 and listed in Appendix B there exist pre-made frameworks that can be used with 
existing tools. These frameworks can offer a shortcut to a build-from-scratch strategy, and often one can continue to build additional functionality to the base 
framework libraries.

**Regardless of the solution used in migrating to automation, a tool-agnostic approach that abstracts test data from test tools provides the greatest flexibility and 
overall longevity.**








