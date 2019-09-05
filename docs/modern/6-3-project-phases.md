> # **6.3** AAM Project Phases and Work Items

Specific AAM project patterns with larger volumes, such as re-hosting, offer the opportunity to define methods and tools for moving data and application components using factory-like processes. Every AAM project in the execution phase of a migration follows the same six-step process Framework phases: Discover, Design, Build, Integrate, Validate, and Cutover. Work items, tasks and deliverables are defined for each phase. Success Items to consider:

1. Make sure the team is familiar with agile practices.
2. An iterative approach to maximize immediate requirements gathering to avoid doing up front work that will be out of date by the time you are ready to use it.
3. The Cloud Center of Excellence (CCoE) plays a key role in sharing best practices and lessons learned across the different migration teams.
4. Implementation is executed in iterative Development Sprints.

## 6.3.1 Discover

In the Discover stage, the application portfolio analysis; product planning and features mapping; and the product roadmap and product backlog are confirmed with the App Product Owner and used by the contractor team to understand the current and future architectures. If needed, more data is collected about the application. There are two categories of information: Business Information and Technical Information. Examples of business information are application product owner, product roadmap, product backlog, cutover plans, and operation runbooks. Examples of technical information are “As Is” server statistics, connectivity, process information, data flow, system architecture and technology stack(s). As Is” information can be captured via tools and the output reports confirmed with the application product owner. The data is then analyzed, and a Modernization/Migration plan for that application is confirmed with both the sprint team and the application product owner. Deliverable Discovery work items include:

1. Confirmed Product Road Map and Product Backlog
2. Discovery Tool reports on “As Is” App hosting environment
3. Application Inventory Report - precise inventory of the legacy system source code
4. App Modernization/Migration Plan 

## 6.3.2 Design

In the Design stage, the target state is developed and “To Be” architecture runway is documented. The target state includes the Cloud architecture, application architecture, and supporting architecture runway infrastructure, software, operational components and processes. A member of the sprint team and engineering team uses the information collected during the Discover stage to design the application for the targeted Cloud environment. 

AAM Design stage project work items depend on the migration pattern. For re-hosting (Lift and Shift), an infrastructure architecture document outlines what cloud services to use. The document also includes information about compute, storage, network, failover, backup/recovery, cybersecurity, identity and access management elements, system monitoring, and how the application will consume external resources. 

For re-platforming (code transformation & refactoring) we add the application transformation and refactoring processes, tools setup, application blueprint, data migration and additional cloud infrastructure components required to deploy a modernized Cloud-ready App.  The Application Blueprint (Legacy Documentation) is a detailed presentation of the structure and flow of the customer’s legacy code.  The presentation includes Code and Design Metrics, Navigation Indices, Control Flow Diagrams, Structure Charts, Data Element Tables, State Machine Models, State Transition Tables, Cause Effect Graphs, and hyper-linked legacy code in HTML format. Deliverable Design deliverable work items include:

1. “To Be” Architecture Runway
2. Infrastructure Architecture Document
3. Transformation and Refactoring Plan
4. Transformation Specification Document
5. Baseline Application Blueprint (Legacy Documentation)
6. Product Backlog of Legacy code modules/components

The next three AAM stages are performed iteratively in 2-week Development Sprints whereby the Legacy Application Code Modules/Components are selected from the Product Backload, refined, estimated and entered into the Sprint Backlog in a Sprint Planning session.  Then the Development Sprint Build, Integrate and Validate process stages are performed on the Code Modules/Components pulled from the Sprint Backlog.

## 6.3.3 Build

In the Build stage of the Development Sprint, the modernization and migration design created during the Design stage is executed iteratively. The required people, tools, and reusable templates are identified and are given to the migration teams. A migration team is selected based on the migration strategy chosen for the application. 

For the re-host (lift and shift) migration pattern, code transformation may be optional. The cloud ready App release code is installed in the Cloud CI/CD pipeline Development, Test, Staging and Production environments and the cloud migration Build, Integrate and Validate iterations are performed using cloud native processes.  Code transformation steps can be added, for example; to move a legacy mainframe COBOL application to a Micro Focus COBOL application that can run on open systems Windows or Linux platforms. 

For re-platforming (code transformation & refactoring) migration pattern, there are additional steps described in the Transformation and Refactoring Plan. First the selected transformation tool suite is Set-Up to be able to ingest and parse the customer’s legacy code. Next in the Transformation process, code modules are pulled from the sprint backlog and the transformation tool is executed on the code modules to rewrite the customer’s legacy code into a compilable and linkable target code-of-choice with all external system calls “stubbed out”.  The UI screens will also be converted in this process. The customer’s legacy database is automatically rewritten into a target database structure-of-choice.  

Automated Re-Factoring is run to identify and remove dead and redundant code to improve system maintainability without changing the customer’s legacy system’s functionality. Next opportunities for code improvement and performance optimization are identified and the transformation toolset is setup and used to make those re-factorings in a uniform and traceable manner. Finally, Semi-Automatic Re-Factoring is run to identify further opportunities for hand-coded improvement and performance optimization as specified by the customer’s Product Owner and the subject matter expert stakeholders.

Unit tests, integration tests, functional, security and regression tests are run iteratively in the CI pipeline Development and Test environments and a sprint Demo with the Product Owner is held at the end of each Development Sprint iteration. 

A Target Language Transformation Blueprint document is developed to provide a detailed presentation of the structure and flow of the modernized App code to support future code maintenance, system restructuring and/or enhancement.  It includes Code and Design Metrics, Navigation Indices, Control Flow Diagrams, Structure Charts, Data Element Tables, State Machine Models, State Transition Tables, Cause Effect Graphs and side-by-side views of hyper-linked source and target code in HTML format. Deliverable Build work items deliverables include:

1. Source to Target Transformation Blueprint document
2. Transformation Blueprint (Final documentation) - detailed structure and flow of the modernized code
3. Test Plans
4. Test Cases
5. Test Scripts – automated to the extent practical

## 6.3.5 Validate

In the Validate stage at the end of the final Development Sprint, Release Integration tasks are performed whereby the application goes through the CI/CD pipeline series of specific tests in the Staging environment (i.e. build verification, functional, security, performance, disaster recovery, and business continuity tests) are demonstrated to the Product Owner and Stakeholders before being finalized and released for the Cutover stage. Test teams evaluate release integration, verify rollout and rollback plans, data migration plans and evaluate performance baselines. Rollback procedures are defined by application within a rollback playbook, which consists of an operations communication plan for users that defines integration, data migration, application, and performance impacts. Testers complete business acceptance criteria by running parallel testing for pre-migrated and migrated applications. Minimum Viable Product validation is performed by the Product Owner and Stakeholders. Validate work items deliverables include:

1. Rollout Plans
2. Data Migration Plans
3. Training Plans and Materials
4. Rollback Procedures
5. Cutover Plan
6. User Acceptance Test (UAT) Plan
7. UAT Test Scripts (automated as much as practical)
8. Security Test Scripts (automated as much as practical)
9. Test Reports

## 6.3.6 Cutover

In the Cutover stage, the cutover plan that was agreed upon by the migration team and application product owner is executed. Data Migration and any updated User Training tasks are performed at this stage. A User Acceptance Test and Security Testing for ATO are performed in the CD pipeline Staging environment at this stage to support a successful cutover. Following successful government UAT and Security testing and correction of all Priority 1 and 2 defects, the application release is deployed to the production environment and rolled out to users. In the event of a release failure during cutover, rollback procedures in the cutover plan are executed. Defects causing the release failure are corrected by developers in the CI pipeline and the App release is recycled through the CD pipeline Staging environment before release to Production and Cutover.
