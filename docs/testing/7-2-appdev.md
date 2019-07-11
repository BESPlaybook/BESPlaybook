> # **7.2** Similarities to Application Development

Development of a test automation solution should include best practices. These include, but are not limited to:

*Reviews*<br/>
Reviews are an important aspect of making sure that what is being developed stays true to what is expected. Implied in the review process is that someone other than 
the individual producing the work has an opportunity to evaluate and provide feedback. Reviews are often done incrementally thus allowing for changes or 
course-correction to take place if warranted. Reviews can start at a very high level, progress to a very detailed level, and also include quality characteristics. 
Reviews can cover:

-	Architecture
-	Code
-	Peer 
-	Usability

*Documentation*<br/>
Documentation helps us understand the automated solution at various levels. From how it works, and what features it contains, to how to make changes or upgrades. 
Documentation helps make sure that the automated solution is used properly. In summary we can use documentation for:

-	In-line code descriptions
-	Function descriptions
-	Library cataloging
-	User instructions
-	Maintenance instructions

*Standard variable naming*<br/>
The way in which variables are named in a software often helps us understand the context and use of that variable. Using capitalization and lower case letters 
in a mixed case format along with compound word choices can facilitate the automation engineer's understanding of what variables are used for. This also provides 
discipline for new variables to use the same naming standards and conventions.

*Abstraction*<br/>
Abstraction indicates a separation of all but the most relevant data in order to reduce complexity, duplication, and increase efficiency of the automation code base. 
With automation, an example of abstraction may revolve around the way we choose to interact with a given UI control. With abstraction, we would create a single 
function that is used to interact with that control regardless of where it appears within the SUT. The function itself will have the details pertaining to what 
methods and data the control needs. 

*Cyclomatic complexity*<br/> 
The cyclomatic complexity metric is a quantitative measure of code complexity. It allows us to measure the number of linearly independent paths through code. A high 
cyclomatic complexity value indicates that many (if not too many) paths exist which in turn indicates a high number of test cases necessary to fully validate code. 
Although most test automation code is not subject to cyclomatic complexity analysis, in the way that a software program might, it is good practice to keep the number 
of independent paths (often referred to as conditions) low so that we can ensure proper testing can be done while minimizing potential errors due to code complexity.