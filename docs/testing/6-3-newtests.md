> # **6.3** Criteria for Creating New Automated Tests

There may be an opportunity to immediately automate tests, rather than prepare for automation with manual tests. In order for this to happen, the test 
automation framework has to be sufficiently developed to allow its use for new tests. The timing of this is dependent on the complexity of the application and 
components that need to be tested. For example, if an application has 200 different controls spread across 5 functional areas, the framework must be capable of 
identifying and interacting with each of those controls, so that no test is off limits for development. If the 200 controls can be mapped out against the 5 
functional areas, then as long as the functional areas under test have been verified and are compatible automation can proceed. Often automation teams do not do 
their due diligence to find all controls and ensure that the test automation solution indeed is compatible with every one of them. It only takes 1 error in trying 
to interact with a control for testing to fail, thus undermining the automated approach.
