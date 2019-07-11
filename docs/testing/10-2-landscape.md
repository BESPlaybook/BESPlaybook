> # **10.2** Keeping Abreast of the Technology Landscape

Software development continues to evolve and the SUT will, over time, incorporate these technology updates. The test automation solution must anticipate and adapt 
to these changes so that automation continues to work reliably and efficiently. It is recommended to perform a tool evaluation on a regular basis (every 2 years is 
recommended). Many tools, whether COTS, GOTS, or OSS regularly have incremental updates made to them. Before automatically updating the tool to the latest version, 
it is best to find out what improvements were made to the tool and if those improvements have any impact to the project using those tools. If it makes sense to make 
the update, this should first be tested in a separate environment to ensure that the update functions properly and does not inadvertently affect any other software or 
components previously installed. Generally, the latest release will have the latest security updates and features so updates are recommended.

When an automated framework is built with modularity in mind, specific components of the framework can be swapped out or swapped in without having to re-write the 
entire framework. For example, a project that originally used browsers has now migrated to native mobile applications as well. The requirement now is to also support 
native mobile apps. This could potentially be accomplished in one of several ways:

-	Identify if current tool in use also supports mobile apps
-	Identify add-in component that supports mobile apps
-	Identify new tool that supports mobile apps

Each condition allows for a different approach to adding mobile app support to the framework.
