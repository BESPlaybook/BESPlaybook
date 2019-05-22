#5 Developing A Test Automation Solution

###5.1 Approaches to Test Automation

Many approaches are available for how automated tools are used. Some involve using the tool functionality as-is with little to no modification or customization. 
This is what is usually done by test groups with less technically skilled testers. Where more technically skilled testers exist, more customizable solutions 
are created. While these ultimately offer greater flexibility, they also require greater up-front investment and continued skilled resources to maintain and 
expand the automated solution. The following represent common approaches to automation.

**Capture/replay**<br/>
Capture/replay or record/replay is a technique which directly uses the test automation tool's built-in feature to allow a user session to be "captured" as the tester 
interacts with the SUT. Often this is what a vendor might demonstrate as capability with a controlled sample application. After the user keystrokes are captured, they 
are faithfully replayed by the test tool. While this makes for a very effective demonstration of ultimate simplicity, the application of capture/replay in real-world 
complex applications often doesn't fair as well. In most cases, using capture/replay in moderate to complex system will likely not yield a successful playback of the 
initially recorded script. This is due to the fact that most tools are not sophisticated enough to understand all the nuances and the multiple parameters and values 
that are changing dynamically as a user navigates across an application.

For tests that are recorded, the maintenance becomes quite difficult to achieve once the number of tests is in the double digits or higher. Each captured script is 
unique to the others and needs to be individually maintained. This becomes very time consuming and inefficient. 

**Data driven**<br/>
As the name implies, the data driven test technique aims to use data, external to the tool, to drive the test execution. The remaining techniques below are all 
variations or adaptations of driving tests with data. In its simplest form, data driven tests replace the specific (static) values that were used for one iteration 
of a test with a set of data that can be used for many iterations of the same test. With the proper application of specification-based test techniques test datasets 
can be constructed that minimize the number of tests require for the maximum coverage.

**Keyword driven**<br/>
The keyword-driven approach at its core also uses data to drive tests but the keyword descriptor is a meaningful action for the system to perform. For example, 
to test a system with parts that need to be placed in inventory, taken out of inventory, or repaired, a keyword driven script may use the keywords "check in", 
"check out", and "repair" for any given part number. The way a keyword driven script works is that test cases are developed using keywords and the corresponding 
values for each keyword. Then, the test automation solution parses those keywords and values and lets pre-defined scripts navigate in a pre-determined manner, 
through the application in order to execute the desired functionality.

**Process driven**<br/>
The process driven approach also uses data to drive tests, but the data it defines is more detailed than that of the keyword approach. This approach requires 
the definition of the following in order to create a test script: control, instruction, data. The "control" identifies the application window/object which needs 
to be interrogated. The "instruction" may include: input, verification, navigation, timing, etc. The "data" would be the relevant data for the given instruction 
in the context of the window/object. The process driven approach therefore is the most abstracted model as its very design is built around externalizing all data. 
The benefit this approach brings is highly reusable function libraries.

**Model driven**<br/>
A model driven approach for testing is derived from a model based design methodology. With modeling, the desired behavior of a SUT can be represented. From 
this behavior design test cases can be derived and then specific data can be created to make these tests executable. Model based techniques can facilitate creating 
tests which can then be used under automated control.

The following table compares popular approaches to automation, where LOW/MED/HIGH indicates the degree in achieving that characteristic:
![low.med.high](low.med.high.jpg)


###5.2 Overall Architectural Considerations

The International Software Testing Qualifications Board (ISTQB) has published a body of knowledge (BoK) and glossary that comprise the syllabus for the Advanced 
Level Test Automation Engineer certification. This BoK contains a general test automation architecture (GTAA) from which a purpose-built test automation architecture 
(TAA) can be derived. 
![istqb](istqb.jpg)

**The Generic Test Automation Architecture GTAA** (Source: ISTQB Advanced Level Test Automation Engineer Syllabus)

The defined layers of the GTAA include: test generation, test definition, test execution, and test adaptation. This generic architecture can be thought of as a 
catalog of functionality from which we select those capabilities required for a given project or program. 

*Test Generation Layer*

Test cases, whether for manual or automated testing must be developed. The development process might include a test case generator for systems that are fully 
integrated with requirements and design. Some advanced development environments will included system modeling from which high-level test cases can be generated. 
Use of advanced model based testing techniques and tools can provide an efficient method of preparing an initial set of test cases for automation.

*Test Definition Layer*

The Test Definition Layer provides support to help define high- and low-level test cases and test procedures. Data needed for test procedures would be generated 
at this layer. This can include the data needed for keywords used access libraries when a keyword-driven approach is used. Test libraries can include purpose 
built test sequences and reusable components for our automation solution.

*Test Execution Layer*

The execution layer represents that portion of our automated solution that "runs" the tests. We often think of the various test tools available as test execution 
tools. At their core is the capability to execute a test. This applies equally to COTS, GOTS, and OSS test tool solutions, as discussed in Section 6.3.1. Within 
the execution layer we have two additional components: test reporting and test logging. The test reporting function provides us with information regarding the SUT 
so that we can ascertain if the SUT if performing as our tests expect it to. This will alert us to changes in the SUT, although it will not necessarily identify 
the root cause, which may be SUT, data, or environment related. The test logs will help us identify where some of the errors may be originating from, when providing 
information at a very granular level. The logs can also provide us with information regarding the operation of our Test Automation Framework components and libraries. 
Errors in any of these should be written out to the log files so that corrective action can be taken.

*Test Adaptation Layer*

Test tool solutions must be compatible to work with the intended environment. This can include a graphical user interface (e.g., browser, mobile app, desktop app, 
etc.) or a messaging interface. Most systems that we are testing will often contain several interfaces which need to be exercised for thoroughness in testing. By 
analyzing the SUT architecture we gain an understanding of what interfaces exist, and what are requirements are for testing them. Test tools often provide support 
for multiple interfaces. However, additional interface testing requirements can be met through other test tools or by developing such capability. 

*Test Automation & Framework*

The 4 layers discussed above all encompass a test automation solution. This ranges from the test script definitions through the automated execution via a given 
interface. We can think of the Test Automation Framework as those purpose built testware components that allow us to define data inputs, execute tests, and 
produce reports. The idea behind a framework is that it should be built with reusable components and not contain embedded application data. This will allow for 
greatest reuse, and ease of maintenance.

*Configuration Management*

There are many artifacts that comprise our test automation solution. In order to keep them manageable, we need to understand what version of what component we 
are using. This applies equally to test data, test automation functions and libraries, test reporting, and test environments (which may include OS patches, 
security updates, and updated DLLs). By having this understanding and control we are able to revert to a known working environment quickly.

*Test Management*

Test management is there to support the development and maintenance of the test automation solution. This includes providing the proper funding, staffing, 
tools, and environments in order to be successful. 

*Project Management*

Test automation is a project, often requiring significant development tasks. As such it needs to be planned, and executed with tasks, milestones, people, and 
resources. Different development lifecycle methodologies will affect the approach and timing of developing an automated solution, as discussed in Chapter 7. 

#####5.2.1 Understanding the system architecture

Enterprise systems are built with a multitude of servers and other specialized components with which they interface. A first step in understanding what needs 
to be tested and what can potentially be automated is to understand the overall system architecture, or enterprise system architecture (ESA). Most systems receive 
an input (e.g., a user request for data) and route that request through a multitude of servers, that may include application servers, web servers, database servers, 
and report servers. A good test strategy is to isolate the various requests as they go from one server to another and identify a way to test each individual 
component in addition to creating an end-to-end test. Automated tools exist that support multiple protocols and that can act as stubs to simulate behavior between 
systems or components. 

#####5.2.2 Defining interface components

Software and systems communicate with one another often via a protocol across an interface. Understanding what interfaces the SUT communicates with will help 
determine the testing requirement for that interface. Once the interface has been identified, the communications protocol needs to be established in order to 
simulate data over that interface. Common interfaces and protocols include:

-	Graphical User Interface
-	Text User Interface
-	Applications Programming Interface (API)
-	Services (including web services)
-	Database (ODBC, etc.)

A test automation engineer will need to gather the specification for the interface in order that testing can simulate, or emulate the given interface.

#####5.2.3 Creating a purpose-built architecture

The GTAA, as described above, allows for flexibility in the creation of a purpose built Test Automation Architecture (TAA). By understanding the various 
components that make up our SUT, we can devise a TAA that fits our needs.

For example, if we use model based testing, we may already have a solution for the test generation layer in creating our high-level test cases. 
Otherwise, we need to define the manual process by which these are created.

Once we start building our test cases and corresponding data we need to define a repository where these will be stored. This repository should be under 
configuration control in order to support the versioning of data by release.

For test execution, we may already have a robust test tool with pre-made logging and reporting functions. Otherwise, we'll need to develop these to cover those 
specific needs.

A broad overview of interfaces, as described in section 6.2.2 will guide us as to what tools we'll need to support interface testing.

###5.3 Evaluation and Selection of Test Tools

#####5.3.1 Tool choices

Testing tools are available from a number of sources. These include: commercial vendors, open source, and custom built. Each source brings with it possible 
benefits and limitations. For example, a commercial test tool may be rich in features and offer good support, but require a significant initial and ongoing 
financial investment for license, maintenance, and support. An open source solution may provide the functionality needed at a given moment, but may lack the 
ability to expand to meet future needs. Custom solutions, which are either contracted out or developed by the government, will be purpose-built and target key 
areas needing automation.  However, the burden of maintaining, correcting, and expanding such a solution will fall to the government to direct either through 
internal resources or through additional contractor funding.

Appendix B: Test Tools provides a listing of tools frequently found to perform well. Each project will have its own needs and will need to evaluate the fit to a 
given requirement.

**Open Source Software (OSS)**<br/>
The OSS category of software products has many options available for the various functional and non-functional requirements for test automation 
(as described in Chapter 4 Scope of test automation). OSS test tools are updated by a community of contributors, and keeping abreast of the changes ensures that 
the tool is functioning optimally. Many OSS test tools are have been developed to support a specific environment. For example, there are tools to support browser 
based testing and tools for mobile application testing. A few tools may provide support for multiple environments, but that is more commonly seen in commercial 
test tools. (see Defense Acquisition Policy, DoD Instruction 5000.75)

OSS test tools have expanded rapidly over the years and can meet many enterprise testing needs. The U.S. Government supports the use of OSS solutions to meet 
information technology needs, as addressed in the Federal Source Code Policy (https://sourcecode.cio.gov/).

**Commercial off the Shelf (COTS)**<br/>
Commercial software testing tools developed and supported by vendors have been around for many years. These tools tend to be fully featured and often support 
multiple environments (e.g., browsers, terminals, API, mobile, etc.). Ideally, there would be one tool that offers the tester capabilities to test all software. 
In reality, even those tools that cover a wide range of environments may support some better than others. So when evaluating a tool across multiple environments, 
a separate evaluation will need to be made to see how well each environment is supported. By using a paid license and maintenance model, COTS tools provide for 
research and development to fund a steady stream of improvements, feature additions, and defect patching. A well-funded organization has the resources to do this 
and keep the tools current.

COTS vendors often have multiple test tools in their catalog to support various testing activity (e.g. functional testing, load testing, test management). These 
tools are often integrated with one another, such as keeping all test artifacts under configuration version control through a test management module.

**Government of-the-shelf (GOTS)**
The GOTS solution is one that has been engineered to meet a specific need. Most often this level of effort is only undertaken when an exhaustive evaluation of 
existing COTS and OSS solutions shows no matches. The GOTS solution Government directed and can be developed internally with technical staff or via subcontract 
to an external entity. These solutions vary in scope and features and it is often difficult to know what may be available as no centralized catalog exists that 
lists them.

See Appendix B: Test Tools for commonly used test tools by government and industry.

######5.3.2 Test tool evaluation

In order to properly evaluate test automation tools we need to make sure we identify the correct quality criteria that will help identify the proper fit for the 
project or program. 

**Environment**

Each environment presents unique opportunities and challenges for the implementation of test automation tools. Environments may include multiple platforms to 
support workstations, laptops, and mobile tables and phones. Each of these platforms often will run a different operating system and the software implementation, 
whether native or through a browser (which are also native to the device), will dictate the functionality to that platform. When evaluating test automation tools, 
we need to be aware of our complete needs for the environment, including all platforms and devices that ultimately might be required. Be aware that tools perform 
differently across devices so a prioritization of which device testing should be automated first will help ensure that those most critical platforms can be 
implemented successfully.

**Test Types**

Types and test levels are discussed in sections 4.2 and 4.3 and need to be considering when evaluating test automation tools. This includes defining the types 
of tests that are candidates for automation across test levels. Tools are purpose built, and each combination of test type/test level may require re-evaluation 
of a given test tool selected for a prior test type/test level pairing.

**Technology**

Test tools exist to support a variety of older and current technologies (e.g. terminals, text UIs, graphical UIs, browsers, etc.) Some tools support many 
technologies within one product suite. These are most often COTS tools (see section 6.3.1) where a vendor's tools evolve technology to meet continuing technology needs.

However, a bundled solution suite may not necessarily contain "best-in-class" for each technology that is supported. An a-la-carte approach to find a specific tool for 
each technology stack that needs testing may ultimately provide a more satisfactory solution, even where integration amongst disparate tools may be required. 

**Language**

Most tools provide customization through programmability. In this way they are similar to Interactive Development Environments (IDEs) used by developers to design 
and build applications. With automation we are building an application too, one that when run automates the execution of testing. Common languages used by test tools 
include Java, Python, C#, C++, VBScript, etc., with some tools supporting multiple languages. Languages offer a range of features and flexibility and a range of effort 
to learn them. Identifying tools with the right balance of features and flexibility as they pertain to the knowledge and skills in the organization are key to using 
a specified tool effectively.

**Reporting**

When we look at the reporting features of tools we want evaluate both test reporting and logging functionality.

The logging function which is often undervalued or not evaluated and is important in determining if errors occurred specific to the automation of tests. The logging 
function is an audit trail that can be examined to know exactly what occurred doing execution, irrespective of any application criteria being examined. Often the 
logging function can be customizable to provide specific information that may be required for analysis.

For reporting,  features should include meaningful displays of data and analysis from which decisions can be made. These may require additional test runs in order to 
show varying parameters or cumulative data. Most tools have a basic level of on-demand reporting but the better tools will allow for the customization of reporting. 
Dashboards also provide reporting, most often in a graphical or table based approach where application health is readily displayed. Where other reporting systems 
exist, exporting data from the tool may be necessary in order to integrate the results with project-level metrics required by project management for planning and 
reporting purposes.

**Ease of Use**

Test tools should be intuitive and easy to understand and use. They should be well documented so that common answers to questions and techniques can be quickly 
identified. For example, one may need to know what function is used to verify the content on a calendar widget or how to export a test report in csv format.

Although some test tools may claim that there is no need to use scripting for test development, most medium to complex test requirements will likely require a 
level of scripting that makes the test perform to meet standards and requirements. Therefore, "ease of use" is a relative term. For those automators with strong 
programming skills it will be easy to develop scripts with a test tool. However, for the traditional manual tester, the requirement to write program code may be 
difficult and counterproductive to their domain-specific skills.

**Sourcing**

As defined in section 6.3.1 tools are available form a variety of sources. These can include COTS, GOTS, and OSS. Each category may have very good solutions. 
The solution needs to include the sourcing of the tool, the training required for the tool, the ongoing maintenance requirements to the tool, and the support 
available for the tool (in the form of technical support, product updates, etc.)

**Support**

Support for test tools can be available from many sources. Vendors often have dedicated support sites that allow logging of issues. These are normally restricted 
to customers paying for support, either directly or indirectly via maintenance contracts. Additionally forums exist on the internet that focus specifically on 
particular testing tools. These forums may not be a reliable place for answers as contributions are made by volunteers who may or may not have the knowledge to 
answer correctly.

**Investment**

Test tools from commercial entities have a variety of licensing fees structures. These can include individual, per seat, and floating, among others. Understanding 
the intended usage by your team will help define which license structure that is best for you. Additionally, commercial entities have support and maintenance fees. 
Support allows for technical questions or issues to be submitted and responded to, while maintenance usually provides for minor and major updates to the testing 
tool. Working with the most recent version of a tool will often help resolve technical issues (e.g., compatibility, defects, etc.). Training should also be included 
as a cost, both for vendor and open source solutions.

**EVALUATION TABLES**

Evaluation of the above criteria can be reduced to a table indicating the relative importance for each category, with a total weight at 100%. As tools are 
evaluated, completing the table helps to compare one tool against another tool objectively.
![weight](weight.jpg)<br/>
*(sample values for illustration)*

Categories should be rated for how closely they meet the intended requirements. A score allows the category to show a strength or weakness in meeting the 
category requirement. Use of a scoring system ranging from 0 to 5 where each value indicates alignment to the requirement score.
![score](score.jpg)<br/>
Finally, no tool evaluation is complete without trying the tool out in the intended environment where there is a need to automate. This will ensure that 
the tool really does work as intended.

#####5.3.3 Proof-of-concept

A proof of concept (PoC) is the first step in understanding if a given test tool meets the anticipated needs of the project. With a PoC we want to ensure that 
the technology that we've provisionally selected actually works in the intended environment. This is key as any prior demonstration of the tool, however capable, 
needs to now show the same capability in the intended environment.

#####5.3.4 Test tool prototypes

A prototype takes the PoC further along by automating a narrowly defined set of functionality from a system where automation is to take hold. The prototype helps 
the project team understand the complexities of implementation in a timeframe that will not drain excessive resources or funding. The prototype shows the way ahead 
and serves to realign expectations of how long it actually takes to get test built for automation. The lessons learned from the prototype will bring greater efficiency 
to the next phase of automation.

#####5.3.5 Tool training and support

Success in automation requires an overall understanding of testing, technology, and the features and functions of specific testing tools in meeting the stated 
requirements. Appendix B: Test Tools provides a listing of tools that have been shown to be successful across projects and programs. Appendix A: Resources provides 
additional resources that cover education and certification around testing best practices and test tools.

Combining education and certification with hands-on test tool knowledge empowers the test team to develop purpose-built solutions that align with project and program 
needs.

















