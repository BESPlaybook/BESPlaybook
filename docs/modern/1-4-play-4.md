># **1.4** Play 4: Determine the target (“To-Be”) modernized application solution

Building on Play 3, this play determines the complete target (or “To-Be”) solution architecture for the modernized application for the approved option.  This is like a deep preliminary design ending with a critical design.  If the application modernization solution is complex, then break this play into sub parts to address the complexity.  The complete target (or “To-Be”) solution architecture includes a full stack solution consisting of: hosting (all needed environments), networks, security, accreditation, application, data and database, interface solution, processes, automated baseline promotion in a DevOps pipeline (if appropriate), production operations, help/service desk operations, and related solutions and activities.  Significant design activities (such as those included in this section) are usually best completed using a formal agile methodology such as Scrum.

## Checklist
- Determine the application architecture including: overall architecture, operating system, coding paradigm, code language, frameworks, database type, etc. 
- Determine the development methodologies to be used: agile, DevOps, hybrid, DAD, waterfall, etc.  Determine DevOps automated baseline promotion pipeline solution (or use one provided by the enterprise).
- Integrate Cyber Security, accreditation, and compliance requirements as this target solution is defined.
- Determine the hosting solutions.  Determine if the application will be hosted in the cloud (and under which model: government cloud, shared cloud, private cloud, on-premise hosting, hybrid)?
  
    - Consider each environment the application needs: development, testing, pre-production, production, and others. 
    - Determine where each of these environments be hosted.
    - Determine how the application baseline upgrades will flow between environments (ie: promoted from one environment to the next)?

- Determine the enterprise computing services (ie: platform as a service, PaaS) required to host the application.

    - Determine solutions for identity and access management (IDAM), data interfacing such as enterprise service bus (ESB) solutions, web services, and microservices.

- Determine how this application will be operated in the new environment, including backups, monitoring, and disaster recovery.
- Create accreditation plan.
- Create the development environment.

    - Create proper networking solution (consistent with production solution).
    - Allow network access to the enterprise computing services (PaaS) needed (ie: IDAM, ESB, others).
    - Install COTS products to be used.

- Map business logic components from the legacy to modernized application.

    - Use automated software conversion tools to do the bulk of the work.  
    - **Note:** these tools are specialized, and the right tool(s) must be used for the task at hand.  More about these tools are included in the complete playbook.  

        - These tools can convert the code (and thereby the business logic) into other code languages or dialects using a variety of approaches.
        - Use Proof of Concepts and demonstrations to show automation results against the actual codebase.

- Choose a data store (database) that best meets the applications needs.

    - Map data structures from the legacy to modernized application.
    - Migrate the data from the legacy to modernized data store (database).
    - **Note:** these tools are specialized, and the right tool(s) must be used for the task at hand.  More about these tools are included in the complete playbook.

        - Use Proof of Concepts and demonstrations to show automation results against the actual data schema and data set.

- Transform interfaces if necessary.  Ensure interfaces can be tested from development and test environments.
- Test exhaustively using automated testing.
- Create plan to produce lean documentation using automated and digital means (to maximum extent possible) for: system design, application design, database design, interface design, test cases, operator’s manual, help/service desk guides.
- Create software version list and forecast for the modernized application.  Communicate to stakeholders.
- Determine the Help Desk or Service Desk model.
- Ensure the Help Desk or Service Desk is ready to provide service during and after production cutover.
- Coordinate cutover plan with stakeholders.  
- Define cutover test.
- Achieve cyber security authorization to operate.
- Cutover and Go-Live.
- Leave legacy system in production, but not serving users, until the new modernized system is deemed ready for initial operating capability (IOC) and can reliably serve users.
- Perform as many iterative design reviews with stakeholders as needed throughout this play.

Key Questions:
- Are all lifecycle processes defined and documented?
- What activities are not using automation?  Why?
- Does the target (or “To-Be”) solution align or comply with enterprise requirements?
- Are the products used aligned with the enterprise license agreements and forecast?
- What are the key solution risks?  How are they being mitigated?  How are they reported to stakeholders?
