> # **3.5** Methodologies

Once it has been determined by the application owner that the application needs to be modernized by refactoring and/or re-architecting to meet requirements or regulations, there are several methodologies to consider:

- ### Agile Methodology (SAFe): 
    - See Chapter 5 – Software Life Cycle Processes
- ### Application Analysis and Assessment: 
    - Before undertaking any AAM project, ensure the application is fully analyzed and understood.  This is necessary to make decisions about how to proceed with the design of the application’s future state and how to achieve the required future state:
        - Use a Discovery tool to document the configuration of the production application and system
        - Use a tool such as Silver Thread to determine the quality and identify the shortcomings of the application and system architecture
- ### Automated Code Conversion: 
    - Automated Code Conversion is a type of refactoring that transforms an existing code baseline into a new and improved code baseline.
    - This approach can be used for many scenarios.  Basically, the legacy code is converted to a desired language.  For example, COBOL to Java.  Automated Code Conversion can also be used to improve a current code baseline.  For example, Java to refactored Java.
    - Note: 
        - Automated Code Conversion converts the code to a new code baseline.  The database, interfaces, etc must be dealt with as well so the application works properly post code conversion.
        - Underlying application architecture issues will persist if not directly addressed as part of the code conversion.
- ### Re-platforming:
    - Re-platforming is a type of refactoring that simply migrates an application from one platform to another.  This is usually done to get off legacy platform and onto modern cloud type platforms.
    - Re-platforming moves an application from one platform to another.  For example, consider moving an application off the GCSS-AF platform to a cloud provided Platform as a Service (PaaS).  In this example, the application may be migrated to a new operating system (ie: Solaris to Linux), the application’s database may be migrated from on-premise hosted Oracle RDBMS to a cloud Database as a Service (DBaaS).


| Methodology | Benefits | Drawbacks |
| --- | --- | --- |
| Agile Methodology (SAFe) | - Provides an Agile contracts acquisition approach that implements iterative, timeboxed Agile development methodologies of Scrum, Kanban and XP. | - Requires specialized SAFe training to support Agile Teams, programs, and Program Portfolio Management. |
| Application Analysis and Assessment | - Provides true view of application and challenges | - Takes time (~4 - 8 weeks)<br/> - Requires specialized Discovery tools and skills |
| Automated Code Conversion | - Retains and reuses valuable legacy business logic<br/> -Use iterative conversions to improve code baseline and app architecture | - Does not address underlying app architecture issues, deeper refactoring required |
| Re-Platforming | - Migrate to new platform quickly<br/> -Perhaps migrate to cloud<br/> -Likely reduce cost via migration to cloud and use of “as-a-services” | - Only re-platforms application, additional refactoring is required to correct architectural and other defects |
