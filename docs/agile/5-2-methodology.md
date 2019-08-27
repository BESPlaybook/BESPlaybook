> # **5.2** Part II - Establish the Methodology:

## 5.2.1 Definition of "Ready" and "done"

Prior to implementing a specific development methodology, the definitions for the development entry and exit criteria need to be defined. Thus, prior to beginning development through any of the methodologies, two definitions should be agreed upon between the PO and development team in reference to individual PBIs:

**Deifinition of Ready**

- Purpose

    - Describes materials and topics that must be included and addressed in well written backlog items (I.e. Scrum / XP User Stories, Kanban cards)
    - Used to evaluate whether or not a PBI has been appropriately elaborated and is ready for development
    - Helps ensure that backlog items are complete and understandable before being scheduled for an iteration.

- EXAMPLE DEFINITION OF READY CHECKLIST
    - Description clearly states the who ("As a"), what ("I want to"), and why ("so that") are for the backlog item
    - PO has approved the backlog item
    - Acceptance criteria is clearly defined
    - Scenarios and expected outcomes are clearly defined
    - Artifacts defining user interface requirements are included (if applicable)
    - Business rules are referenced or included (if applicable)
    - Dependencies are identified
    - Development Team has reviewed and confirmed they understand the backlog item
    - Backlog item is appropriately estimated (I.e. sized for scrum)
    - "Definition of Done" for the PBI is understood

**Definition of Done**

- Purpose

    - The "Definition of Done" describes criterion that must be met by each committed User Story or Defect to development before the PO can validate that the PBI is accepted.
    - Definition is used to help ensure that the developed product is consistent with the associated backlog item, is high quality, and is ready for production testing.
    - "Done" establishes quality norms and assures the PO that major defects are not likely to be identified during production testing

- EXAMPLE DEFINITION OF DONE CHECKLIST
    - Unit testing and module testing are complete
    - All acceptance criteria defined within the PBI are met
    - Test results have been reviewed with the PO
    - The PO concurs with the adequacy of the testing
    - The backlog item has passed acceptance testing by the PO
    - The development product has been demonstrated and accepted by the PO

## 5.2.2 Scrum

This section provides a template for the scrum process. As it is a template, government and development teams are encouraged to adapt the process based on team structure, culture and regulatory constraints to make it more efficient. To that effect, this section is prescriptive versus directive in nature. Also note that we have transitioned from the general agile term of PBI to user stories as they relate to Scrum.

Scrum Methodology:

![scrummethod](images/scrummethod.jpg)

**Scrum Events**

The five key Scrum events are:

- Product Backlog Refinement - Based on the project release roadmap and PO priorities, there are two components to refinement:
    - Feature Refinement - Breaking down features and setting priorities (this process was explained in Section 5.1.5 above under feature refinement)
    - User Story Refinement - Grooming user stories so that they are ready to be accepted into a sprint
- Sprint Planning: Determining the goals and related stories for a sprint
- Sprint Execution - Developing and testing stories so they are done
- Sprint Review - Providing feedback to improve the product
- Sprint Retrospective - Determining how to improve the process

**Product Backlog Refinement**

- **Feature Refinement Session (2 Sprints early)**: Coordinated by the Scrum Master with the Solution Architect and Customer System Engineer (and POs if available) to:

    - Ensure that the feature acceptance criteria are still correct for upcoming features originally determined during Sprint 0 activities.
    - Ensure that all dependencies (possible future impediments) have a resolution strategy prior to development.
    - Ensure that design tenets are understood within the context of the feature work.

- **User Story Refinement Collaboration (Between Feature and User Story Refinement Sessions)**: Team designated Business Analyst works collaboratively with the PO to
  refine story priority and the acceptance criteria necessary to accomplish the associated feature functionality. Team testers can also add necessary positive test
  cases based on draft acceptance criteria to the story (facilitates test driven development).

- **Refinement Session - User Stories (1 Sprint early)**: Business Analyst discusses each story with the development team to ensure understanding of delivery
  requirements. The PO is included in this refinement session, but it is the development team that is being introduced to the stories. The PO is there to confirm
  through listening to the team's conversations with the Business Analyst that his/her intent is understood within the context of the story. This refinement session
  is done to ensure that each story meets the established Definition of Ready prior to being accepted into the sprint for development.

**Meeting the Definition of Ready**: The acronym INVEST provides a high-level cross-check of whether a story is Ready for development. It is normally part of the last check done on a story during either Refinement Day activities or as part of Sprint Planning for priority stories that have been updated since Refinement Day.  

While it is presented here under the Scrum section, it can be used with modification (I.e. Kanban work flow estimates versus sprint estimates) within the other agile
frameworks as a final check for each PBI). The acronym represents the following criteria:

- (I) Independent - Story contains no dependencies on unavailable external resources or preparatory user story completion
- (N) Negotiable - Three perspectives must be represented in refinement of the user story to meet the PO's intent - Business Analyst, Developer, Tester - if they have not been involved in refinement, a key perspective on the complexity of the story is missing from the preparatory analysis.
- (V) Valuable - Established by the prioritization given by the POs.
- (E) Estimable - Estimates provide a gage for the acceptance of future work levels into a sprint as well as for forecasting future work timelines - they gain
  value over time as the team evolves.
- (S) Small - User stories should be small enough to complete within a sprint while large enough to provide observable value to the PO.
- (T) Testable - Positive manual test cases will be added to appropriate user stories prior to being taken into the sprint to account for successful achievement
  of acceptance criteria. As necessary, these tests will be augmented during the sprint with additional negative manual and automated tests.

Based on the high-level of interaction between the team and the PO in this option, each story should have as a minimum 3 touch points with the PO to confirm that
PO's intent is maintained throughout refinement. At a minimum, these touch points are the verification of the acceptance criteria in the documentation, the answering
of team questions during team refinement of stories, and the final acceptance of the story as ready for development At this point the story is considered "ready" for
acceptance into a sprint during sprint planning.

**Sprint Planning**<br/>
Sprint Planning (Appendix A)

Planning centers around the presence of the PO within the Planning meeting. During this meeting, the PO will review the current list of Ready user stories to ensure that they are still valuable (relevant), as well as reprioritize the Backlog based on existing value as necessary (this facilitates the team's acceptance of work into the sprint as they simply take user stories from the top of the list within their established sprint capacity.

**Sprint Execution**<br/>
Sprint Execution (Appendix A)

While developers and testers work to complete and validate the work required for each user story, Business Analysts and, if necessary, POs are available for
clarification of requirements to ensure that the work produced meets the intent of the customer. If refinement has been done correctly, sprint execution consists
of developers completing their work, testers executing the tests developed prior to the sprint (with the addition of any necessary negative test cases), and BAs and
testers reviewing the completed work with the PO in order to receive early feedback or formal closure of the story as meeting the teams "Definition of Done". The
user story acceptance criteria is the foundation for this definition. The story points assigned to sprint user stories not designated as "Done" are not counted when
measuring sprint completion velocity.

**Sprint Review**<br/>
Sprint Review (Appendix A)

Story acceptance as Done is completed by the PO only (the same person who approves the acceptance criteria must be the person who approves work against the approved
acceptance criteria). If the PO believes that the work does not satisfy the customer requirements, they have to make a decision: if the work does not meet the
acceptance criteria, they can reject the work as not done and provide additional clarification; if the work meets the acceptance criteria, but the PO wants additional
revisions, additional user stories are created and prioritized within the existing backlog. The key to the review is that it is interactive between the PO and
Development Team - the focus being to improve the product.

**Sprint Retrospective**<br/>
Sprint Retrospective (Appendix A)

This is where the POs and the Development Team focus on improving the Agile process. Critical to understanding the concept of the retrospective is that learning
always occurs during these events (Successful sprints can indicate items to sustain; failed sprints provide opportunities to learn where the team can improve). One
note to remember in the retrospective is that the process should facilitate the development efforts - not impede them (hence why this document is presented as a
template - it needs to be adjusted to fit the needs of the agile environment in which it exists which is a combination of the people, processes, tools, relationships
and levels of trust involved in the project).
