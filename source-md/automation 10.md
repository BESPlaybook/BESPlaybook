#10 Looking Ahead

###10.1 Building Momentum in Test Automation

Test automation is not a static activity. Due to its nature, it is not as robust as a full-on software application solution. Automation may require review, evaluation, 
and tweaking from time to time in order that it continues to support testing activities. Therefore, there should always be someone assigned to monitor and maintain the 
test automation solution.

Automation is additive. From the initial scripts that are automated, more scripts can be developed or reused. In this way, automation helps us build capability 
similar to stacking bricks to build a wall. Initial automation will be purpose-built, while later automation may be more about stringing prior automated scripts into 
larger and more complex business processes.

Automation can also help with pre- and post-testing activities, as described in section 2.1. These activities often take time to carry out and the use of automation 
will help reduce the overall test execution activity time.

Often other projects with similar technology will benefit from the automation developed. It is far easier to adapt an automation solution to another program than to 
build it again from scratch.

###10.2 Keeping Abreast of the Technology Landscape

Software development continues to evolve and the SUT will, over time, incorporate these technology updates. The test automation solution must anticipate and adapt 
to these changes so that automation continues to work reliably and efficiently. It is recommended to perform a tool evaluation on a regular basis (every 2 years is 
recommended). Many tools, whether COTS, GOTS, or OSS regularly have incremental updates made to them. Before automatically updating the tool to the latest version, 
it is best to find out what improvements were made to the tool and if those improvements have any impact to the project using those tools. If it makes sense to make 
the update, this should first be tested in a separate environment to ensure that the update functions properly and does not inadvertently affect any other software or 
components previously installed. Generally, the latest release will have the latest security updates and features so updates are recommended.

When an automated framework is built with modularity in mind, specific components of the framework can be swapped out or swapped in without having to re-write the 
entire framework. For example, a project that originally used browsers has now migrated to native mobile applications as well. The requirement now is to also support 
native mobile apps. This could potentially be accomplished in one of several ways:

-	Identify if current tool in use also supports mobile apps
-	Identify add-in component that supports mobile apps
-	Identify new tool that supports mobile apps

Each condition allows for a different approach to adding mobile app support to the framework.

###10.3 Continuous Improvement Activities

The areas that most benefit from ongoing inspection, review, and improvement will include:

**Functional script design**<br/>
Functional tests can be analyzed for their overall construction. This will include identifying areas of duplication with other scripts and extracting common 
functionality which can be better served by calling a shared component. Scripts that are excessively long will likely benefit from modularization. 

**Error trapping**<br/>
Often, things go wrong during testing. This may include predicted and unpredicted errors. When errors occur they can cause havoc with automated tests. One approach to 
address this is through the use of error trapping. With error trapping we can direct abnormal application behavior to a known state. This is helpful when we have a 
large number of tests queued up and we do not want to hold up the next testing activity. 

**Timing**<br/>
When executing tests we want the behavior to mimic real user interactions with the system. In order to do this we may need to slow down the rate at which automation 
interacts with the SUT. Adding a static number of seconds to pause the automation is not recommended as these static pauses can add up and eventually slow down test 
execution. A better approach is to use dynamic wait statements. These are often implemented by observing the attribute of a control. For example, if we want to make 
sure that the screen is ready to accept our order, we could dynamically interrogate the order field to make sure it is ready to accept input. This way, whether it 
takes .05 seconds or 3 seconds, the automation will wait the appropriate time before continuing with the order.

**Code Base**<br/>
Treat your automation code as any other software development project. This includes frequent reviews, coding guidelines, documentation, and the use of developers to 
help with some of the more challenging components.

**Performance**<br/>
After using automation for some time we may find that we are no longer able to execute all of our testing on an overnight run. This will require examining just what 
scripts are being executed, and evaluating if some of these no longer provide the value they once did and need to be re-written or merged into other more efficient 
scripts.

Performance can also be measured at the component level, where much of the I/O activity occurs. You may want to evaluate if you we using resources effectively. For 
example, are you writing temporary results to a disk? If so, you may consider writing them to RAM which is much quicker. Script performance will also be affected with 
timing, as described above.

**Audit and reporting**<br/>
Understanding of what occurred during test execution can be enhance by audit logs and reporting. Audit logs can be developed that provide a level of granularity that 
helps us understand everything about our test execution. For example, we could develop a logging function that lets us know what windows were present at any time that 
the test was running. This make give us clues to windows that were not closed, messaging pop-ups that were not accounted for, or starting conditions that did not meet 
our expectations.

Reporting requirements will come from stakeholders and once they start receiving information they will likely want additional information from the SUT and similar 
information but expressed differently. Satisfying the needs of stakeholders is an important part of keeping an automation solution viable.

###10.4 Making the Process Repeatable

Ultimately, we want to learn from our efforts and know that we can do this again for the next project. Repeatability of the process requires a sound overall design, 
clear implementation, and useful documentation. As the automation evolves, all aspects of its design need to be understood and documented so that as testers are 
rotated into and out of a program there is a permanence to the automation that was built.



































