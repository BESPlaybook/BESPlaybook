> # **1.12** Play 12: Use Data to drive Decisions

At every stage of a project, we should measure how well our system is working for our users. This includes measuring how well a system performs and how people are interacting with it in real-time. Our teams and program leadership should carefully watch these metrics to find issues and identify which bug fixes and improvements should be prioritized. Along with monitoring tools, a feedback mechanism should be in place for people to report issues directly.

### Checklist

- Monitor system-level resource utilization in real time
- Monitor system performance in real-time (e.g. response time, latency, throughput, and error rates)
- Ensure monitoring can measure median, 95th percentile, and 98th percentile performance
- Create automated alerts based on this monitoring
- Track concurrent users in real-time and monitor user behaviors in the aggregate to determine how well the system meets user needs
- Publish metrics internally
- Publish metrics externally

### Key Questions

- What monitoring tools are provided by the Low-Code platform out-of-the-box?
- What are the key metrics for the system?
- Which system monitoring tools are in place?
- What is the targeted average response time for your system? What percent of requests take more than 1 second, 2 seconds, 4 seconds, and 8 seconds?
- What is the average response time and percentile breakdown (percent of requests taking more than 1s, 2s, 4s, and 8s) for the top 10 transactions?
- What is the volume of each of your system’s top 10 transactions? What is the percentage of transactions started vs. completed?
- What is your system’s monthly uptime target?
- What is your system’s monthly uptime percentage, including scheduled maintenance? Excluding scheduled maintenance?
- How does your team receive automated alerts when incidents occur?
- How does your team respond to incidents and what is your post-mortem process?
- Which tools are in place to measure user behavior?
- How do you measure user satisfaction?
