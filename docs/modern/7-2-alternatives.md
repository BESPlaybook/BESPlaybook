> # **7.2** Analysis of Alternatives (AoA) Guidance

An Analysis of Alternatives needs to performed due to the impact of the application modernization solution strategy on the life cycle costs, project timeline, system performance, RMF/A & A process, security controls compliance, authority to operate (ATO), FAIR and FISCAM auditing. A high-level AoA comparison of the application modernization key objectives using the CMMI-DEV ML3 formal Decision Analysis and Resolution (DAR) process is provided in the following table. 

| Key Objectives     | Code Rewrite                                              | Lift & Shift                                       | Code Transformation                                | Standard package                                          |
| ------------------ | --------------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------------- |
| Cost increase      | Huge increase on short term (3 – 5 years)                 | Short term increase with typical ROI in 2.5 years  | Short term increase with typical ROI in 2.5 years  | High increase on short term (3 years)                     |
| Business alignment | Improved on longer term (3+ years)                        | Not improved since legacy code is preserved        | Improved on shorter term (1+ years)                | Improved on longer term (3+ years)                        |
| Cost avoidance     | Not achieved due to long term project execution time line | Achieved due to 1 year project execution time line | Achieved due to 2 year project execution time line | Not achieved due to long term project execution time line |
| Risk reduction     | Not achieved due to long term project execution           | Not achieved as legacy Code is preserved           | Achieved as legacy dependency is removed           | Not achieved due to long term project execution           |

A detailed AoA comparison of the impact of each modernization solution on the BES PMO Application Project Metrics is presented in the table below. (1 is very low and 5 is very high)

| Project Metric              | Code Rewrite | Lift & Shift | Code Transformation | Standard package |
| --------------------------- | ------------ | ------------ | ------------------- | ---------------- |
| TCO reduction               | 1            | 5            | 5                   | 3                |
| Time to Market (TTM) impact | 5            | 1            | 2                   | 5                |
| IT Security Risk            | 5            | 1            | 1                   | 5                |
| IT Agility                  | 2            | 3            | 1                   | 3                |
| IT Cost                     | 5            | 2            | 1                   | 3                |
| Project Risk                | 5            | 1            | 3                   | 5                |
| Project Cost                | 5            | 2            | 3                   | 5                |
| Project Duration            | 5            | 1            | 2                   | 5                |

From this high level AoA and further more detailed trade-off comparisons, we see the modernization strategy of “lift and shift” to IaaS services is more cost-effective than on-premises, however, it can be more costly to run applications in the cloud with IaaS services than if organizations were to transform, refactor and re-platform the application to use cloud native PaaS services. The “code transformation (and refactoring)” modernization strategy is time-consuming and resource-intensive, yet it can offer the lowest monthly spend of the four approaches, since organizations that refactor are able to modify their applications and infrastructure to take full advantage of cloud-native PaaS service features and to maximize operational cost efficiency in the cloud to offer the lowest total recurring monthly cost.

Code Rewrite and COTS Standard Packages are the least cost effective, are more resource intensive, have the longest project durations and highest record of modernization project failure. These approaches are not recommended for BES PMOs application modernization projects. Therefore, legacy application modernization use cases amenable to AAM solutions are:

### Appendix A: Sample Design 1

Re-host (transform, lift and shift) i.e. legacy COBOL (mainframe) to modern COBOL (X86 processor) code transformation and emulation of the mainframe transaction processing environment on a modern Cloud Windows or Linux infrastructure and RDBMS to achieve portability of the Legacy System as is with minimal refactoring.

### Appendix B: Sample Design 2

Re-platform (transform and refactor to new platform) i.e. legacy COBOL to modern Java code transformation preserving all the business processes and business rules and architecting the application to run on an open systems Windows or Linux Cloud infrastructure and RDBMS.
