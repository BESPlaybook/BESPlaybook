> # **8.4**	Implementation

The Build, Integrate, and Validate phases are performed in tandem in multiple Development Sprints. The legacy code modules undergo Transformation, Refactoring, Testing and Release Integration tasks. Cutover is performed after all development tests have been completed and the modernized application is ready for government acceptance testing.

## 8.4.1 Build

In the Build phase the legacy code modules in the product backlog are assigned to Sprint Teams to undergo Transformation, Refactoring, and Testing tasks.

### Transformation Task

The Transformation Engine automatically rewrites the legacy application from the source into object-oriented platform-specific code.  This code also couples the generated code to the relational databases.  The Transformation generates object-oriented code in the agreed modern implementation languages (typically Java or C#.NET).  It also accurately converts all internal and external interfaces in accordance with the Target Architecture Design by means of external interface resolution or enhancement of the Deployment Cloud Architecture.  Resolution of these external interfaces involves writing code that replaces the functionality of the original legacy services with modernized application logic and replacement services on the target platform middleware (e.g. .NET, JSP or ASP framework services).  The implementation of the replacement APIs is undertaken by the sprint team developers. Deployment-Ready Compilation assures that the functionally equivalent modernized code module cleanly compiles and links in the target language with the target side framework classes and with API s whose implementations interface with target side framework classes. Unit tests are performed on the completed code.

### Refactoring Task

The sprint team developers refactor the transformed code modules to improve the modernized App’s design, architecture, maintainability and enhance its performance.  All semi-automated and automated refactoring operations are carried out to generate redesigned code modules and re-architected application tiers.  The design and architecture of the application is captured as it evolves and the series of refactoring operations are applied.

Automatic Re-Factoring identifies and remove dead and redundant code by the automated Transformation Engine toolset to improve system maintainability without changing the customer’s legacy system’s functionality. Semi-Automatic and Custom Re-Factoring is used to identify further opportunities for code performance optimization and refinements and enhancements to improve design and architecture.  These refactoring work items are specified by the customer’s Product Owner and subject matter experts, and are used to make improvements in a uniform and traceable manner. The sprint team developers are supported by the Transformation SME who assists in the set up and adaptation of the Transformation Engine tool set and hand-coding refactoring process to the customer-specific requirements. The Transformation SME also supports integration of the system with data base and middle tier software components and provides training to the sprint team developers on the tool set.

The sprint team developers and Transformation SME runs The Transformation Engine refactoring rule on the target source code modules of the modernized application. The code is regression tested after application of each refactoring operation to verify that the refactoring operation has been applied without loss or distortion of functionality. The Developers perform defect and issue resolution on the refactored modules.

## 8.4.2 Integrate

The output from the Transformation Engine generate default facade pattern objects, (or application programmer interface -APIs) with classes and methods (function prototypes) that are similar in form to the legacy application’s original external interfaces. External interface resolution tasks set up the Transformation Engine to replace default APIs with native APIs implemented in the target architecture host environment interfaces.  This task typically involves the Transformation Engine SME working with sprint team developers to build specialized transformation rule sets to replace legacy operating system services interfaces with native framework classes in the target architecture host environment. 

The database conversion is accomplished by converting legacy database schema into SQL (Oracle Database or SQL Server) relational database structures, adaptation of the modernized application to use the transformed schema, extraction of metadata and data from the database and adaptation and export of this metadata and data into the target data set, with roundtrip validation to prove the equivalence to the original data base.

Integration, Functional and Regression Tests are performed on completed target code modules or components to demonstrate ‘definition of done’ for the target code components interfaces. Any Continuous Integration/Continuous Deployment (CI/CD) pipeline testing process which executes from a non-mainframe platform (such as from a T27 client platform) can be kept unchanged and follow DevSecOps best practices and use the Air Force Common Computing Environment (CCE) DevSecOps Toolchain. 


## 8.4.3 Validate

The final Development Sprint iteration merges the latest baseline of the code at the end of the modernization process create the final release integration.  All delta areas are identified and regression tests are performed on the needed areas that have changed.  The “modernized” system documentation is generated and a final Transformation Blueprint is delivered to the customer.  During the final release integration, the sprint team demonstrates the modernized system to the Product Owner and stakeholders who validate that ‘definition of done’ and “minimum viable product’ checklist criteria have been completed. The sprint team supports transitioning the system into production.  For complex modernized systems the release integration may require several iterations, more exhaustive testing and additional refactoring to achieve final customer acceptance.

## 8.4.4 Cutover

### Final Testing

During this phase the project sprint team Developers and Testers support User Acceptance Testing and Security Testing (to achieve ATO) of the modernized system in the Staging environment with a subset of the eventual end users or super users. During this phase the sprint team developers and testers will support system rework or Priority 1 and Priority 2 defects and recycle the modernized system release back to Staging environment for validation the defects have been fixed. 

### Documentation

During Cutover the sprint team and technical support team support finalization of any system and user documentation.  Some documentation is written during Development Sprint iterations, but it typically isn't finalized until the system release itself has been finalized to avoid unnecessary rework.  Documentation is treated like any other work item requirement.  It is priced, prioritized, and placed in the sprint backlog as a task supported by the Product Owner and Stakeholders.  

### Knowledge Transfer

Training of end users, operations staff, and technical support staff is conducted to enable users to work effectively with the modernized system. The final task in Cutover phase is Data migration and then the system is deployed to Production for a shakedown period. The AAM contractor’s Sprint team and technical support team provides support to the operations staff as they place the system into production and resolve any Post-Production issues that may arise.

