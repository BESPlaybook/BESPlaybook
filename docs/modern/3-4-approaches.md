> # **3.4** Migration Approaches

## 6 Application Migration Strategies: “The 6 R’s”

(adapted from: [https://aws.amazon.com/blogs/enterprise-strategy/6-strategies-for-migrating-applications-to-the-cloud/](https://aws.amazon.com/blogs/enterprise-strategy/6-strategies-for-migrating-applications-to-the-cloud/))

The 6 most common application migration strategies we see are:

- ### **1. Rehosting** — Also known as “lift-and-shift.”
    Many early cloud projects gravitate toward net new development using cloud-native capabilities, but in a large legacy migration scenario where the organization is looking to scale its migration quickly to meet a business case, we find that most applications are rehosted. GE Oil & Gas, for instance, found that, even without implementing any cloud optimizations, it could save roughly 30 percent of its costs by rehosting.

    Most rehosting can be automated with tools (e.g. AWS VM Import/Export, Racemi), although some customers prefer to do this manually as they learn how to apply their legacy systems to the new cloud platform.

    We’ve also found that applications are easier to optimize/re-architect once they’re already running in the cloud. Partly because your organization will have developed better skills to do so, and partly because the hard part — migrating the application, data, and traffic — has already been done.

- ### **2. Re-platforming** — Sometimes referred to as “lift-tinker-and-shift.”

    Here you might make a few cloud (or other) optimizations to achieve some tangible benefit, but y  ou aren’t otherwise changing the core architecture of the application. You may be looking to reduce the amount of time you spend managing database instances by migrating to a database-as-a-service platform like Amazon Relational Database Service (Amazon RDS) or migrating your application to a fully managed platform like Amazon Elastic Beanstalk.

    A large media company we work with migrated hundreds of web servers it ran on-premises to AWS, and, in the process, it moved from WebLogic (a Java application container that requires an expensive license) to Apache Tomcat, an open-source equivalent. This media company saved millions in licensing costs on top of the savings and agility it gained by migrating to AWS.


- ### **3. Repurchasing** — Moving to a different product.

    Most commonly repurchasing is used to move to a SaaS platform. Moving a CRM to Salesforce.com, an HR system to Workday, a CMS to Drupal, and so on.

- ### **4. Refactoring / Re-architecting** — Re-imagining how the application is architected and developed, typically using cloud-native features.

    This is typically driven by a strong business need to add features, scale, or performance that would otherwise be difficult to achieve in the application’s existing environment.

    Are you looking to migrate from a monolithic architecture to a service-oriented (or server-less) architecture to boost agility or improve business continuity (I’ve heard stories of mainframe fan belts being ordered on e-bay)? This pattern tends to be the most expensive, but, if you have a good product-market fit, it can also be the most beneficial.

- ### **5. Retire **— Decommission and dispose of.

    Once you’ve discovered everything in your environment, you might ask each functional area who owns each application. We’ve found that as much as 10% (I’ve seen 20%) of an enterprise IT portfolio is no longer useful and can simply be turned off. These savings can boost the business case, direct your team’s scarce attention to the things that people use, and lessen the surface area you must secure.

- ### **6. Retain** — Usually this means “revisit” or do nothing (for now).

    Maybe you’re still riding out some depreciation, aren’t ready to prioritize an application that was recently upgraded or are otherwise not inclined to migrate some applications. You should only migrate what makes sense for the business; and, as the gravity of your portfolio changes from on-premises to the cloud, you’ll probably have fewer reasons to retain.

AAM mostly focuses on Migration Approach #4: Refactoring / Re-architecting legacy systems, but also is relevant to Migration Approach #2: Re-platforming.