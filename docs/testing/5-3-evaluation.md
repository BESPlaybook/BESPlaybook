> # **5.3** Evaluation and Selection of Test Tools

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
