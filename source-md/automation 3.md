#3 Roles in Test Automation

###3.1 Acquisitions

Automated testing is an integral part of modern software development. As such, requirements for automated testing should be identified in the requirement 
document (e.g., Statement of Objective or Statement of Work). It is essential to establish best practices as requirements at the onset of all new software 
acquisitions, not only to ensure they are delivered during execution, but to ensure quality vendors respond. The DoD 5000 already prescribes such requirements. 
Specifically, DoD Instruction (DoDI) 5000.02 defines, under DT&E Planning Considerations, the requirement to "develop a software test automation strategy" 
and under OT&E for software, for regression tests to be "preferably automated." This policy, now superseded by policy 5000.75 for business systems and 
implemented with AFMAN 63-144, includes a directive to "Employ  effective  use  of  integrated  testing  and  automated  software  test  tools."

Acquisition guidelines should be stated at the objective level, however, they should allow for the ability for the contractor to recommend industry best 
testing tools that may be implemented with Government approval. The goal is to obtain the best solution for the program and the Government. Many contracting 
organizations with automation skills have honed the techniques necessary to deliver quality, reliable automated test solutions.

If it is envisioned that government will take over the use and management of the automated testing suite, guidelines for training and transitioning of 
the solution should be required as part of the Statement of Objective or Statement of Work. If a different technology is envisioned for any continuation 
of test automation, then the test data used to drive the automation should be delivered in a standardized manner that allows for reusability and adaptability 
to another automated solution.

###3.2 Management Support

The role of management, at all levels, is key to the success of test automation in AF programs. Management can:

-	Identify projects and programs where automation would likely provide benefits to the overall testing process
-	Identify staff (government or contractors) who can be targeted to deliver automated solutions
-	Identify relevant training and certification to ready staff for automation
-	Anticipate funding requirements for test automation resources (people, tools, environments, process adjustment)
-	Ensure that an adequate assessment of test tools takes place through market research and evaluation
-	Provide equipment and environments in which to develop and execute automation
-	Adopt cross-enterprise "Best Practices" for sharing of test automation methods and technology
-	Define contract structures and CLINs that promote use of automation

#####3.2.1 Identifying and Funding Resources

From a funding perspective, there are three areas a manager should consider when planning for test automation. 

**People**<br/>
Who will be tasked to do the automation? And who will be implementing the testing tools framework? Government staff? Contractors? A combination? This needs to be 
decided on up front as it will affect the process by which these resources are identified and the timeframe under which they can be brought in to accomplish the 
work, including any training time required prior to project start.<br/> 
If the automation skillset is not easily found within government, a first step might be to contract the work out to an organization with expertise in this area. 
This will save time and money, and avoid missteps.

**Test Tools**<br/>
Software test tools have costs associated with licenses, maintenance, training, and support. Even tools that are open source software will require maintenance, 
training, and possibly support. However, the absence of an initial license fee may provide a significant cost savings (see section 6.3). This playbook will 
describe industry standard testing tools and the trade-offs between open source versus Commercial-Off-The-Shelf (COTS) software.

**Test Environments**<br/>
Test environments where automated tools reside can include:
-	An individual tester's workstation 
-	A test lab with specific computers dedicated to automation
-	A server with virtual machine images 
-	A cloud-based setup
-	A cloud-based service (SaaS)

###3.3 Technical Support

**Developer**<br/>
The software developer plays a key role in supporting the test automation team. The developer has first-hand knowledge of the tools and methods used to 
construct the software and system. This information will help guide the automation team in the evaluation and selection of tools that are compatible with 
the tools selected by the development team. Often developers can further aid the automation effort (and associated maintenance) by using uniquely identifiable 
names for objects/controls displayed by the software application. This is equally applicable to client-based or browser-based solutions. The key point here is that 
a little forethought by the developers can go a long way to facilitate the recognition of objects/controls by the automation team. For example, we avoid a common 
scenario where the properties of an application for a user "name" and user "account" show up as U25523 and A00056 within the automation tool rather than USER_NAME 
and USER_ACCOUNT.

**Database Administrator**<br/>
Data forms a large part of tests, and test automation amplifies this. The role of the Database Administrator is key in assisting the needs of the automation team. 
These may include:

-	Assistance in configuring and selecting a database which emulates a production-like database
-	The ability to restore or revert a database to an earlier condition for retesting
-	Assistance in executing direct queries against the database in order to validate application behavior

**Systems Administrator**<br/>
The System Administrator (SA) ensures that the system, including software, network, and interfaces are available to the test automation team. Additionally, 
the SA controls the updates (patches, security releases, etc.) that are applied to the servers on which the test automation solution runs. This coordination is 
very important as any changes to the underlying system may have consequences to the reliability of the test automation solution, with the possibility that it ceases 
to function.

The SA will also help the automation team with any updates to automation software that need to installed on the testing infrastructure and can assist the test 
automation team by providing an environment that emulates a production-like environment.

###3.4 Domain Support

The Business User, Business Analyst, Product Owner, and other similar roles are subject matter experts (SMEs) when it comes to understanding how the software should 
work and what it needs to do in order to meet stated requirements, objectives and defined user stories.

Domain knowledge is hard to come by and usually comes from individuals who have had or continue to have direct roles in using the business functionality that a system 
provides. These are the go-to people when a thorough understanding of use cases is required. 

###3.5 Automation Team Members

The roles of the core automation team are important to define up front. The individuals filling those roles should have the necessary skills and experience to 
properly implement a maintainable, expandable automation solution. They should also be current on industry standards and have the ability to provide recommendations 
for changes based on the environment and user needs.

The following roles can be assigned to individuals or could be performed by one or more individuals, depending on the complexity of the software project.

**Test Automation Architect**<br/>
The Automation Architect is the senior Subject Matter Expert (SME) in automation and is responsible for the overall design and implementation of a test automation 
solution. The automation architecture will be dependent on many factors, including: complexity of the system or software under test (SUT); number of interfaces to 
other systems or subsystems; richness of the Integrated Development Environment (IDE) controls; and technical level of automation team.

The Architect needs to have a broad vision of what current and forthcoming requirements for automation may be based on for overall system architectures. Selecting 
appropriate tools to meet a diverse set of needs and understanding how multiple tools may need to be integrated for complex testing and reporting requirements 
will need to be considered as part of the planning process.

**Test Automation Engineer**<br/>
The Test Automation Engineer is an intermediate-level technical individual who is responsible for developing and maintaining automation components and subsystems. 
This may include development of purpose-built functions, creation of function libraries, and documentation of the test automation components. As new requirements 
for automation are defined (e.g. a new "calendar" control being added) the automation engineer makes the appropriate updates/additions to the test automation solution, 
including documentation, to incorporate the new functionality. 

There may be multiple roles for an automation engineer which may include:

-	Development of input/output (I/O) functions 
-	Development of test interfaces to external systems
-	Development of user interface (UI) component test functions
-	Development of navigational paradigms across the application
-	Development of timing and synchronization requirements
-	Development of logging and reporting functions

**Test Automation User**

The Test Automation User is the individual or individuals who are the "customer" of the test automation solution. They need not be concerned with the technical 
implementation of a test automation solution, but rather with the ability to use automation to execute tests and report findings. A properly designed test automation 
solution will allow a user to select a test, the corresponding data set, and run the test. At the conclusion of the test execution, the user should be presented 
with a report indicating the pass/fail status of the test and any information gathered as a result of a passed/failed test.

Often the user of test automation will be a manual tester, a business analyst, or another individual with a strong understanding of the software or system and 
the requirements that it needs to meet. These individuals may not have programming backgrounds and would not be productive or motivated to take on the role of 
an automation engineer. 

By identifying and assigning roles based on skills we are able to keep each individual fully productive and motivated and allow automation to be used by the team, 
not just by select technical individuals.







