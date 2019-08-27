> # **5.1** Approaches to Test Automation

Many approaches are available for how automated tools are used. Some involve using the tool functionality as-is with little to no modification or customization. 
This is what is usually done by test groups with less technically skilled testers. Where more technically skilled testers exist, more customizable solutions are created. While these ultimately offer greater flexibility, they also require greater up-front investment and continued skilled resources to maintain and 
expand the automated solution. The following represent common approaches to automation.

### Capture/replay
Capture/replay or record/replay is a technique which directly uses the test automation tool's built-in feature to allow a user session to be "captured" as the tester interacts with the SUT. Often this is what a vendor might demonstrate as capability with a controlled sample application. After the user keystrokes are captured, they are faithfully replayed by the test tool. While this makes for a very effective demonstration of ultimate simplicity, the application of capture/replay in real-world complex applications often doesn't fair as well. In most cases, using capture/replay in moderate to complex system will likely not yield a successful playback of the initially recorded script. This is due to the fact that most tools are not sophisticated enough to understand all the nuances and the multiple parameters and values that are changing dynamically as a user navigates across an application.

For tests that are recorded, the maintenance becomes quite difficult to achieve once the number of tests is in the double digits or higher. Each captured script is unique to the others and needs to be individually maintained. This becomes very time consuming and inefficient. 

### Data driven
As the name implies, the data driven test technique aims to use data, external to the tool, to drive the test execution. The remaining techniques below are all 
variations or adaptations of driving tests with data. In its simplest form, data driven tests replace the specific (static) values that were used for one iteration of a test with a set of data that can be used for many iterations of the same test. With the proper application of specification-based test techniques test datasets can be constructed that minimize the number of tests require for the maximum coverage.

### Keyword driven
The keyword-driven approach at its core also uses data to drive tests but the keyword descriptor is a meaningful action for the system to perform. For example, 
to test a system with parts that need to be placed in inventory, taken out of inventory, or repaired, a keyword driven script may use the keywords "check in", 
"check out", and "repair" for any given part number. The way a keyword driven script works is that test cases are developed using keywords and the corresponding values for each keyword. Then, the test automation solution parses those keywords and values and lets pre-defined scripts navigate in a pre-determined manner, through the application in order to execute the desired functionality.

### Process driven
The process driven approach also uses data to drive tests, but the data it defines is more detailed than that of the keyword approach. This approach requires the definition of the following in order to create a test script: control, instruction, data. The "control" identifies the application window/object which needs to be interrogated. The "instruction" may include: input, verification, navigation, timing, etc. The "data" would be the relevant data for the given instruction in the context of the window/object. The process driven approach therefore is the most abstracted model as its very design is built around externalizing all data. The benefit this approach brings is highly reusable function libraries.

### Model driven
A model driven approach for testing is derived from a model based design methodology. With modeling, the desired behavior of a SUT can be represented. From this behavior design test cases can be derived and then specific data can be created to make these tests executable. Model based techniques can facilitate creating tests which can then be used under automated control.

The following table compares popular approaches to automation, where LOW/MED/HIGH indicates the degree in achieving that characteristic:

![low.med.high](images/low.med.high.jpg)