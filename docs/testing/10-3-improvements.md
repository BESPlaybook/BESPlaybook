> # **10.3** Continuous Improvement Activities

The areas that most benefit from ongoing inspection, review, and improvement will include:

### Functional script design
Functional tests can be analyzed for their overall construction. This will include identifying areas of duplication with other scripts and extracting common 
functionality which can be better served by calling a shared component. Scripts that are excessively long will likely benefit from modularization. 

### Error trapping
Often, things go wrong during testing. This may include predicted and unpredicted errors. When errors occur they can cause havoc with automated tests. One approach to 
address this is through the use of error trapping. With error trapping we can direct abnormal application behavior to a known state. This is helpful when we have a 
large number of tests queued up and we do not want to hold up the next testing activity. 

### Timing
When executing tests we want the behavior to mimic real user interactions with the system. In order to do this we may need to slow down the rate at which automation 
interacts with the SUT. Adding a static number of seconds to pause the automation is not recommended as these static pauses can add up and eventually slow down test 
execution. A better approach is to use dynamic wait statements. These are often implemented by observing the attribute of a control. For example, if we want to make 
sure that the screen is ready to accept our order, we could dynamically interrogate the order field to make sure it is ready to accept input. This way, whether it 
takes .05 seconds or 3 seconds, the automation will wait the appropriate time before continuing with the order.

### Code Base
Treat your automation code as any other software development project. This includes frequent reviews, coding guidelines, documentation, and the use of developers to 
help with some of the more challenging components.

### Performance
After using automation for some time we may find that we are no longer able to execute all of our testing on an overnight run. This will require examining just what 
scripts are being executed, and evaluating if some of these no longer provide the value they once did and need to be re-written or merged into other more efficient 
scripts.

Performance can also be measured at the component level, where much of the I/O activity occurs. You may want to evaluate if you we using resources effectively. For 
example, are you writing temporary results to a disk? If so, you may consider writing them to RAM which is much quicker. Script performance will also be affected with 
timing, as described above.

### Audit and reporting
Understanding of what occurred during test execution can be enhance by audit logs and reporting. Audit logs can be developed that provide a level of granularity that 
helps us understand everything about our test execution. For example, we could develop a logging function that lets us know what windows were present at any time that the test was running. This make give us clues to windows that were not closed, messaging pop-ups that were not accounted for, or starting conditions that did not meet our expectations.

Reporting requirements will come from stakeholders and once they start receiving information they will likely want additional information from the SUT and similar 
information but expressed differently. Satisfying the needs of stakeholders is an important part of keeping an automation solution viable.