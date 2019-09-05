
> # **8.2** Design Principles

In this section, we provide design patterns and architectural options that can be applied to the AAM project use cases that are targeted for automated application modernization and migration to the Cloud.

### Scalability

Systems that are expected to grow over time need to be built on top of a scalable architecture. Such an architecture can support growth in users, traffic, or data size with no decrease in performance. It should provide that scale in a linear manner where adding extra resources results in at least a proportional increase in ability to serve additional load. Growth should introduce economies of scale, and cost should follow the same dimension of proportional increases in monthly costs. While cloud computing provides virtually unlimited on-demand capacity, the design needs to be able to take advantage of those resources seamlessly.

### Disposable Resources Instead of Fixed Servers

In a traditional infrastructure environment, you have to work with fixed resources due to the upfront cost and lead time of introducing new hardware. This would drive practices like manually logging in to servers to configure software or fix issues, hardcoding IP addresses, running tests or processing jobs sequentially etc. 

When designing for the cloud Solution Architects have the opportunity to reset that mindset so that architects take advantage of the dynamically provisioned nature of cloud computing. Architects think of servers and other components as temporary resources. Launch as many as you need, and use them only for as long as they are needed.  The problem of configuration drift can be solved with the cloud immutable infrastructure pattern. With this approach a server, once launched, is never updated throughout its lifetime. Instead, when there is a problem or a need for an update, the server is replaced with a new one that has the latest configuration. In this way, resources are always in a consistent (and tested) state and rollbacks become easier to perform.

### Automation.

In a traditional IT infrastructure, system administrators would often have to manually react to a variety of events. When deploying on the cloud there is a lot of opportunity for automation, so that both the system’s stability and the efficiency of the DevOps and SysOps team is improved. When deploying a new environment for development, test, staging, and deployment or increasing capacity of an existing system to cope with extra load, it is important that DevOps Engineers make this an automated and repeatable process that avoids long lead times and is not prone to human error. Since cloud assets are programmable, DevOps Engineers can apply Infrastructure as Code (IaS) techniques, practices, and tools from software development to make the whole infrastructure reusable, maintainable, extensible, and testable. In addition, common cloud features enable automation to support SysOps administration, for example:

• Auto Scaling: You can maintain application availability and scale your cloud computing capacity up or down automatically according to conditions you define. Auto Scaling can also automatically increase the number of VM instances during demand spikes to maintain performance and decrease capacity during less busy periods to optimize costs.
• System Management Alarms: You can create alarms that sends SMS message when a particular metric goes beyond a specified threshold for a specified number of periods.
• System Management Events: You can set up delivery of a near real-time stream of system events that describe changes in cloud resources. Using simple rules that you can set up in a couple of minutes, you can easily route each type of event to one or more System Management Console Dashboards or Logs for subsequent analysis.

### Loose Coupling

As application complexity increases, a desirable attribute of an IT system is well-design interfaces that enable Apps to be broken into smaller, loosely coupled components (i.e. services or microservices). This means that IT systems should be designed in a way that reduces interdependencies—a change or a failure in one component should not cascade to other components.  One way to reduce interdependencies in a system is to allow the various components to interact with each other only through specific, technology-agnostic interfaces (e.g., SOAP or RESTful APIs). In that way, technical implementation detail is hidden so that teams can modify the underlying implementation without affecting other components. As long as those interfaces maintain backwards compatibility, deployments of difference components are decoupled.  Other methods include: (1) service discovery such as the Web Services Universal Description, Discovery, and Integration (UDDI) XML-based registry; (2)  Asynchronous integration - another form of loose coupling between services suitable for any interaction that does not need an immediate response and where an acknowledgement that a request has been registered will suffice; and (3) Graceful Failure - 
another way to increase loose coupling by building applications to handle component failure in a graceful manner and identifying features to reduce the impact on end users.

### Removing Single Points of Failure

Production systems typically come with defined or implicit objectives in terms of uptime. A system is highly available when it can withstand the failure of single or multiple components (e.g., hard disks, servers, network links etc.). Solution Architects implement cloud features to automate recovery and reduce disruption at every layer of the architecture. Solution Architects build automation into both detecting and reacting to failure. Cloud services can be configured to perform health checks and mask failure by routing traffic to healthy endpoint components. In addition, Auto Scaling can be configured to automatically replace unhealthy nodes. 

Data replication techniques can be adopted to increase data durability and availability. Synchronous replication is not recommended for most Apps due to performance issues. Asynchronous replication decouples the primary node from its replicas at the expense of introducing replication lag, however, asynchronous replicas are used to horizontally scale the system’s read capacity for queries that can tolerate that replication lag. It can also be used to increase data durability when some loss of recent transactions can be tolerated during a failover. Quorum-based replication combines synchronous and asynchronous replication to overcome the challenges of large-scale distributed database systems.

### Security.

Most of the security tools and techniques used in a traditional IT on-premises infrastructure can be used in the cloud. At the same time, cloud adoption allows App Owners  to improve security in a variety of ways. Cloud platforms allows you to formalize the design of security controls in the platform itself. It simplifies system use for system and database administrators and those running IT SysOps. Cloud adoption makes the IT environment much easier to monitor and audit security controls in a continuous manner. 