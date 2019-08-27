> # **3.1** Agile Contracting

Before jumping into the Agile development, PMOs should take time to consider how Agile can benefit their program,
what the issues will be, and if perhaps a hybrid approach (combination of Waterfall and Agile) is the best approach.  
Some of the concepts that need to be considered when embarking on the use of Agile are discussed below. The discussion assumes the government
will be contracting with a firm to actually do the development. Since the contractor will be creating the Agile organization structure, it is
important the government understands the contractors' Agile organization and how the government interacts within that structure.
The better the understanding, the less likely there will be inadvertent roadblocks or obstacles created to impede the progress of the
Agile team(s). If the government is doing the development internally, some of the actions may differ and would be accomplished by the government.
The following establish some of the key variables which must be considered in the context of enabling an Agile development framework.

- Acquisition life cycle
- Team environment
- End-user access
- Training and coaching
- Oversight including milestone reviews, documentation, evaluation (metrics)
- Rewards and incentives
- Culture

These concepts were actual issues that programs deal with during their use of Agile methods. The concepts discussed here overlap and are
intertwined. In many cases, the concepts are mutually reinforcing.

## 3.1.1 Acquisition Life Cycle

The acquisition life cycle consists of multiple phases: Materiel Solution Analysis, Technology Development, Engineering and Manufacturing Development,
Production & Deployment and Operations & Support. Each of these phases presents unique challenges and opportunities. Some phases lend themselves
to the use of Agile better than others. The PMO should determine how to best employ Agile in their program depending on their specific situation.
The following paragraphs propose questions to ask and identify issues to consider in building an Agile program. If the PMO is doing a Request for
Proposal (RFP), no matter which phase, ensure that the RFP contains language that allows the use of Agile. In many instances, the traditional RFP
language makes it difficult, if not impossible, to propose an Agile-based solution. One consideration is the types of reviews and documents required.
If the PMO wants to employ Agile, be prepared to allow for Agile style document development, i.e., incremental development of documents and data for
reviews that result from the individual iterations and/or releases. This might not seem much different from what the traditional waterfall methods
provide but consider the level of detail may be sparser using Agile in the earlier versions of the documents. Even final documents might not contain
the amount of detail provided in traditional documents. The key here is not the volume, but the content. A necessary and sufficient criterion is that
all important information required for operation and maintenance of the system are supplied.

## 3.1.2 Team Environment

Due to the size and complexity of most Air force programs, multiple agile iteration teams will be needed. The number is dependent upon the program
and in some instances the locations of the contractor team. The larger the number of teams, the more complicated the communications and the greater
the need for more users to be involved. In an ideal situation, each agile iteration team would have access to their own dedicated Product Owner.
However, that is not practical in the DoD environment so alternatives need to be employed. PMO can consider the use of Product Owner proxies,
rotating personnel every x weeks (x usually is two-four weeks), or perhaps a separate - team of subject matter experts (SMEs) accessible by the agile
iteration teams as needed.

The structure of the overall program team-especially the contractor team-is dependent upon which Agile method is chosen. Agile Scrum, Kanban and XP
are just three examples of management practices within Agile methods. Typically, the contractor determines the flavor of Agile. However, the
government PMO team needs to be responsive and supportive of that method. Otherwise, using Agile will have less than optimal results. The Agile
team also must exhibit behavior reflecting the approach. Seven Extreme Programming (XP) engineering practices have been observed to scale up to
enterprise-level Agile development projects and will serve as a foundation for the discussion of Agile contractin

**The Define/Build/Test Component.** Three basic workflows are combined in the component team: define, build, and test, operating cooperatively within
a pre-defined period, known as a time box. The juxtaposition of these skill sets into one team tends to run counter to some conventional methods employed
in DoD programs, where these players are often separated by intent.

**Two-Level Planning.** Two-level planning is portrayed as providing both guidance of how software is to be inserted into the operational environment as well as
allowing some flexibility to accommodate what is learned during development: The top level of the planning cycle is termed release level planning. This cycle
of planning defines series of releases that broadly define capability to be contained in each release. This could be done at the feature set level. The second
level of the planning cycle is termed iteration or flow level planning, where work is made ready for development within either a time-boxed iteration or rhythmic
workflow approach.

**Mastering the flow / Iteration.** The ability of a team to reliably execute a process flow (Kanban) or sequence of iterations (Scrum / XP) may well be the
key behavior that distinguishes a team capable of exploiting Agile techniques in a large organization. If this capability is not present, the likelihood of
success is minimal at best. The development iteration or workflow consists of the following key activities: creation of complete, tested, working code
implementing a set of features and integration of the developed code into the working baseline. The result is potentially releasable to the user.

**Producing Smaller and More Frequent Releases.** One goal of an agile development framework is the desire for more frequent feedback from the customer and/or
stakeholders to avoid large-scale course corrections. The shorter duration of iterations or workflow lead time will help to maintain more or less continuous
feedback from the customer.

**Concurrent Testing.** Concurrent testing practices are based upon thorough testing of code both during development and during integration. The goal
is that all code is tested. One primary methodology for this is the application of a Test-Driven-Development Approach where the unit tests for software
are created prior to the actual code development.

**DevOps Continuous Integration (CI)/Continuous Delivery (CD) Pipelines.** DevOps CI/CD pipelines may well be the most useful and controversial practice
advocated in the Agile community. The DevOps CI/CD model diverges from the usual V-shaped model advocated by traditional systems engineering practice
employed in DoD programs. In the V-shaped model, requirements synthesis, allocation, and development are carried out in a top-down fashion. This is
followed by a bottom-up sequence of integration and verification activities, leading to a product ready for production.

DevOps CI/CD pipeline processes are contingent upon the ability to concurrently execute two crucial activities: (1) collect incremental changes from multiple
developers on a regular basis, ideally on a daily basis on code check-in, and (2) perform the nightly build discipline, where all changes are brought together
in an incremental software baseline, which is in turn compiled and tested with the available automated unit, security, functional and regression test tools.

**Regular Reflection and Adaptation.** Reflection and adaptation (called the Retrospective in Scrum) is the Agile version of continuous process improvement
that is highlighted in other quality practices such as CMMI-DEV processes. In keeping with the bottom-up discipline of Agile approaches,
this introspection is driven down to the individual team level.

## 3.1.3 Contracting Consideration Checklist

- Procure the repeatable process for the delivery of functional products
- Contractual Requirements should be the scope, period of performance, and price. The technical execution of the project should be at the discretion of the Product Owner
- Enhancement and fixes should be owned by the same team
- Contract Types:

    - Fixed Price per iteration is good for the procurement of the process for an entire team but the current DoD acquisition process does not support short-term contract changes
    - Time and Materials is ideal for the procurement of time of required skill sets but the risk is entirely on the government
    - A preferred type which enables agile development is a "Rent the Factory" type contract:

        - Establish contract to resource ("rent") a team for a specified time period from a contractor
        - Control change through PMO management of the Product Backlog
        - Implement within contract incremental options for extension to decrease government risk (off-ramp for lack of performance)
        - Provide reward incentives for excellence in performance
