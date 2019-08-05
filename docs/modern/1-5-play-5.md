># **1.5** Play 5: Formulate the application modernization and migration plan (how to move from “As-Is” to “To-Be” state)

This play develops the plan for migrating the application from the legacy (determined in Play 2) to modernized (determined in Play 3, 4) state using automation.

## Checklist
- Create the development environment.
    - Create proper networking solution (consistent with production solution).
    - Allow network access to the enterprise computing services (PaaS) needed (ie: IDAM, ESB, others).
    - Install COTS products to be used.

- Map business logic components from the legacy to modernized application.
    - Use automated software conversion tools to do the bulk of the work.  Note: these tools are specialized, and the right tool(s) must be used for the task at hand.  More about these tools are included in the complete playbook.

- Choose a data store (database) that best meets the applications needs.
    - Map data structures from the legacy to modernized application.
    - Migrate the data from the legacy to modernized data store (database).

- Transform interfaces if necessary.  Ensure interfaces can be tested from development and test environments.

- Create plan for lean documentation using automated and digital means (to maximum extent possible) for: system design, application design, database design, interface design, test cases, operator’s manual, help/service desk guides 


## Key Questions
- Are all lifecycle processes defined and documented?
- What activities are not using automation?  Why?
