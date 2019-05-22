#7 Test Automation Development Lifecycle

###7.1 Phases in Automation Development

The lifecycle phases for development of a test automation solution are not unlike software development for software applications. Although there are differences the 
process mostly follows the same steps, which include:

*Requirements Phase*<br/>
The requirements phase allows us to capture features and functionality necessary for our automation solution. Requirements for automation often fall within the 
following areas:

-	Input/output (I/O) requirements
-	External interface requirements
-	User interface (UI) control requirements 
-	Navigation requirements 
-	Timing and synchronization requirements
-	Development of logging and reporting functions
-	Requirements for utilities

Requirements for automation are all about enabling interaction with the SUT and providing clear reporting of those interactions.

*Design Phase*<br/>
The design phase for automation includes the evaluation of tools that as described in section 5.3, Evaluation and selection of test tools. Here, we differ from 
traditional software development in that we are finding test tools that offer compatibility and features needed to interact with our SUT. This is the primary 
consideration of our design as failing to ensure compatibility with the SUT prevents us from effectively automating.

*Technical Design Phase*<br/>
The technical design for automation is described in section 5.2, Overall architectural considerations. Here we define an approach that covers the various interfaces 
and reporting requirements of our SUT. We map out our framework components in this phase so that we know what development activity will be required.

*Development Phase*<br/>
The development phase in automation will include the possibility of programming functions and developing libraries that address our stated requirements. Additionally 
it may include some pre-built modules that provide out-of-the-box functionality from our selected test tool or it may include some third-party modules that integrate 
with the test tool add functionality.

*Test Phase*<br/>
Each feature and function that has been engineered into our automated solution must be tested in order that we can be certain it will reliably and accurately help 
us in testing the SUT. A test baseline must be used in order to validate functionality as testing the automation against the SUT may be unpredictable.

*Implementation Phase*<br/>
Once we have a high degree of confidence that our automation solution is working properly, we can start using it to test against the SUT. While we expect that 
automated testing will help us uncover defects, we always first need to verify that the defect is not attributable to the automation components.

With automation, the features and functions we build are there to support our need for testing against software application programs.

###7.2 Similarities to Application Development

Development of a test automation solution should include best practices. These include, but are not limited to:

*Reviews*<br/>
Reviews are an important aspect of making sure that what is being developed stays true to what is expected. Implied in the review process is that someone other than 
the individual producing the work has an opportunity to evaluate and provide feedback. Reviews are often done incrementally thus allowing for changes or 
course-correction to take place if warranted. Reviews can start at a very high level, progress to a very detailed level, and also include quality characteristics. 
Reviews can cover:

-	Architecture
-	Code
-	Peer 
-	Usability

*Documentation*<br/>
Documentation helps us understand the automated solution at various levels. From how it works, and what features it contains, to how to make changes or upgrades. 
Documentation helps make sure that the automated solution is used properly. In summary we can use documentation for:

-	In-line code descriptions
-	Function descriptions
-	Library cataloging
-	User instructions
-	Maintenance instructions

*Standard variable naming*<br/>
The way in which variables are named in a software often helps us understand the context and use of that variable. Using capitalization and lower case letters 
in a mixed case format along with compound word choices can facilitate the automation engineer's understanding of what variables are used for. This also provides 
discipline for new variables to use the same naming standards and conventions.

*Abstraction*<br/>
Abstraction indicates a separation of all but the most relevant data in order to reduce complexity, duplication, and increase efficiency of the automation code base. 
With automation, an example of abstraction may revolve around the way we choose to interact with a given UI control. With abstraction, we would create a single 
function that is used to interact with that control regardless of where it appears within the SUT. The function itself will have the details pertaining to what 
methods and data the control needs. 

*Cyclomatic complexity*<br/> 
The cyclomatic complexity metric is a quantitative measure of code complexity. It allows us to measure the number of linearly independent paths through code. A high 
cyclomatic complexity value indicates that many (if not too many) paths exist which in turn indicates a high number of test cases necessary to fully validate code. 
Although most test automation code is not subject to cyclomatic complexity analysis, in the way that a software program might, it is good practice to keep the number 
of independent paths (often referred to as conditions) low so that we can ensure proper testing can be done while minimizing potential errors due to code complexity.

###7.3 Similarities to Manual Testing

Once we have our test automation solution up and running and we have data to drive some testing we can confirm that our automated solution properly tests the SUT and 
faithfully reproduces the testing that was otherwise done manually. We still need to analyze what is to be tested. From this we need to define the test types and 
develop test data. This is all still very similar to the work we do in manual testing. However, the definition of data for automated testing is more structured as 
we're now reliant on the test automation solution and specifically the testing framework to work with our defined data and provide us with results. As with manual 
testing we will have results to analyze, but with automation we would expect a good portion of this analysis, at least as it pertains to verifications and comparisons, 
to occur automatically via automation. From here we need to ensure the confidence in our acceptance in that automation has met or exceeded our previous manual testing 
efforts. This is an important milestone and one which can help bring the team together in supporting their contributions in the development of test automation.


















