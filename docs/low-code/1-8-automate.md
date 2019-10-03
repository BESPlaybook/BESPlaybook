> # **1.8** Play 8: Automate Everything

The goal should be to implement as much automation as possible.  When evaluating the Low-Code platforms during the AoA phase consider the level of automation that the platforms provide out-of-the-box.  Also, consideration should be given to the various commercially available automation tools that the platform can integrate with.  Automated tests provide consistent and reliable protection against unintentional regressions and make it possible for developers to confidently release frequent updates to the system.  Automated build and deployment tools can provide the ability to release functionality to production daily. 

Please reference the “Automated Testing” Chapter of the BES Playbook for additional information on test automation methodologies and tools:
[https://besplaybook.github.io/BESPlaybook/testing/1-1-purpose/](https://besplaybook.github.io/BESPlaybook/testing/1-1-purpose/)

### Checklist

- Create automated tests that verify all user-facing functionality
- Create unit and integration tests to verify modules and components
- Run tests automatically as part of the build process
- Perform deployments automatically with deployment scripts, continuous delivery services, or similar techniques
- Conduct load and performance tests at regular intervals, including before public launch

### Key Questions

- What percentage of the code base is covered by automated tests?
- How long does it take to build, test, and deploy a typical bug fix?
- How long does it take to build, test, and deploy a new feature into production?
- How frequently are builds created?
- What test tools are used?
- Which deployment automation or continuous integration tools are used?
