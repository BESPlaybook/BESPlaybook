> # **6.1** What Makes Sense to Automate

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