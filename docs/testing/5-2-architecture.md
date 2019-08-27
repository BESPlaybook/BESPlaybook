> # **5.2** Overall Architectural Considerations

The International Software Testing Qualifications Board (ISTQB) has published a body of knowledge (BoK) and glossary that comprise the syllabus for the Advanced 
Level Test Automation Engineer certification. This BoK contains a general test automation architecture (GTAA) from which a purpose-built test automation architecture (TAA) can be derived. 

![istqb](images/istqb.jpg)

### The Generic Test Automation Architecture GTAA
(Source: ISTQB Advanced Level Test Automation Engineer Syllabus)

The defined layers of the GTAA include: test generation, test definition, test execution, and test adaptation. This generic architecture can be thought of as a 
catalog of functionality from which we select those capabilities required for a given project or program. 

#### Test Generation Layer

Test cases, whether for manual or automated testing must be developed. The development process might include a test case generator for systems that are fully 
integrated with requirements and design. Some advanced development environments will included system modeling from which high-level test cases can be generated. 
Use of advanced model based testing techniques and tools can provide an efficient method of preparing an initial set of test cases for automation.

#### Test Definition Layer

The Test Definition Layer provides support to help define high- and low-level test cases and test procedures. Data needed for test procedures would be generated 
at this layer. This can include the data needed for keywords used access libraries when a keyword-driven approach is used. Test libraries can include purpose 
built test sequences and reusable components for our automation solution.

#### Test Execution Layer

The execution layer represents that portion of our automated solution that "runs" the tests. We often think of the various test tools available as test execution 
tools. At their core is the capability to execute a test. This applies equally to COTS, GOTS, and OSS test tool solutions, as discussed in Section 6.3.1. Within 
the execution layer we have two additional components: test reporting and test logging. The test reporting function provides us with information regarding the SUT 
so that we can ascertain if the SUT if performing as our tests expect it to. This will alert us to changes in the SUT, although it will not necessarily identify 
the root cause, which may be SUT, data, or environment related. The test logs will help us identify where some of the errors may be originating from, when providing 
information at a very granular level. The logs can also provide us with information regarding the operation of our Test Automation Framework components and libraries. 
Errors in any of these should be written out to the log files so that corrective action can be taken.

#### Test Adaptation Layer

Test tool solutions must be compatible to work with the intended environment. This can include a graphical user interface (e.g., browser, mobile app, desktop app, 
etc.) or a messaging interface. Most systems that we are testing will often contain several interfaces which need to be exercised for thoroughness in testing. By 
analyzing the SUT architecture we gain an understanding of what interfaces exist, and what are requirements are for testing them. Test tools often provide support 
for multiple interfaces. However, additional interface testing requirements can be met through other test tools or by developing such capability. 

#### Test Automation & Framework

The 4 layers discussed above all encompass a test automation solution. This ranges from the test script definitions through the automated execution via a given 
interface. We can think of the Test Automation Framework as those purpose built testware components that allow us to define data inputs, execute tests, and 
produce reports. The idea behind a framework is that it should be built with reusable components and not contain embedded application data. This will allow for 
greatest reuse, and ease of maintenance.

#### Configuration Management

There are many artifacts that comprise our test automation solution. In order to keep them manageable, we need to understand what version of what component we 
are using. This applies equally to test data, test automation functions and libraries, test reporting, and test environments (which may include OS patches, 
security updates, and updated DLLs). By having this understanding and control we are able to revert to a known working environment quickly.

#### Test Management

Test management is there to support the development and maintenance of the test automation solution. This includes providing the proper funding, staffing, 
tools, and environments in order to be successful. 

#### Project Management

Test automation is a project, often requiring significant development tasks. As such it needs to be planned, and executed with tasks, milestones, people, and 
resources. Different development lifecycle methodologies will affect the approach and timing of developing an automated solution, as discussed in Chapter 7. 

## 5.2.1 Understanding the system architecture

Enterprise systems are built with a multitude of servers and other specialized components with which they interface. A first step in understanding what needs 
to be tested and what can potentially be automated is to understand the overall system architecture, or enterprise system architecture (ESA). Most systems receive 
an input (e.g., a user request for data) and route that request through a multitude of servers, that may include application servers, web servers, database servers, 
and report servers. A good test strategy is to isolate the various requests as they go from one server to another and identify a way to test each individual 
component in addition to creating an end-to-end test. Automated tools exist that support multiple protocols and that can act as stubs to simulate behavior between 
systems or components. 

## 5.2.2 Defining interface components

Software and systems communicate with one another often via a protocol across an interface. Understanding what interfaces the SUT communicates with will help 
determine the testing requirement for that interface. Once the interface has been identified, the communications protocol needs to be established in order to 
simulate data over that interface. Common interfaces and protocols include:

- Graphical User Interface
- Text User Interface
- Applications Programming Interface (API)
- Services (including web services)
- Database (ODBC, etc.)

A test automation engineer will need to gather the specification for the interface in order that testing can simulate, or emulate the given interface.

## 5.2.3 Creating a purpose-built architecture

The GTAA, as described above, allows for flexibility in the creation of a purpose built Test Automation Architecture (TAA). By understanding the various 
components that make up our SUT, we can devise a TAA that fits our needs.

For example, if we use model based testing, we may already have a solution for the test generation layer in creating our high-level test cases. 
Otherwise, we need to define the manual process by which these are created.

Once we start building our test cases and corresponding data we need to define a repository where these will be stored. This repository should be under 
configuration control in order to support the versioning of data by release.

For test execution, we may already have a robust test tool with pre-made logging and reporting functions. Otherwise, we'll need to develop these to cover those 
specific needs.

A broad overview of interfaces, as described in section 6.2.2 will guide us as to what tools we'll need to support interface testing.
