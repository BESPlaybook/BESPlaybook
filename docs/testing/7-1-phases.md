> # **7.1** Phases in Automation Development

The lifecycle phases for development of a test automation solution are not unlike software development for software applications. Although there are differences the 
process mostly follows the same steps, which include:

### Requirements Phase
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

### Design Phase
The design phase for automation includes the evaluation of tools that as described in section 5.3, Evaluation and selection of test tools. Here, we differ from 
traditional software development in that we are finding test tools that offer compatibility and features needed to interact with our SUT. This is the primary 
consideration of our design as failing to ensure compatibility with the SUT prevents us from effectively automating.

### Technical Design Phase
The technical design for automation is described in section 5.2, Overall architectural considerations. Here we define an approach that covers the various interfaces 
and reporting requirements of our SUT. We map out our framework components in this phase so that we know what development activity will be required.

### Development Phase
The development phase in automation will include the possibility of programming functions and developing libraries that address our stated requirements. Additionally 
it may include some pre-built modules that provide out-of-the-box functionality from our selected test tool or it may include some third-party modules that integrate 
with the test tool add functionality.

### Test Phase
Each feature and function that has been engineered into our automated solution must be tested in order that we can be certain it will reliably and accurately help 
us in testing the SUT. A test baseline must be used in order to validate functionality as testing the automation against the SUT may be unpredictable.

### Implementation Phase
Once we have a high degree of confidence that our automation solution is working properly, we can start using it to test against the SUT. While we expect that 
automated testing will help us uncover defects, we always first need to verify that the defect is not attributable to the automation components.

With automation, the features and functions we build are there to support our need for testing against software application programs.
