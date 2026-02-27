const History = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          Career &amp; Milestones <span data-number={9} />
        </h5>
      </div>
      <div className="col-lg-6">
        {/* timeline */}
        <div className="trm-timeline">
          {/* DIV 1 */}
          <div
            className="trm-timeline-item trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-timeline-mark-light" />
            <div className="trm-timeline-mark" />
            <div className="trm-a trm-timeline-content">
              <div className="trm-card-header">
                <div className="trm-left-side">
                  <h6 className="trm-mb-15">Natural Fiber Company</h6>
                  <div className="trm-text-sm trm-accent-color trm-mb-15">
                    <i>Assistant Marketing Manager &bull; April 2025 &ndash; November 2025</i>
                  </div>
                </div>
              </div>
              <div>
                Led marketing campaigns, contributed to brand positioning
                strategies, and supported business development initiatives in a
                competitive industry. Collaborated cross-functionally to drive
                brand awareness and optimize customer engagement channels.
              </div>
            </div>
          </div>
          {/* DIV 2 */}
          <div
            className="trm-timeline-item trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-timeline-mark-light" />
            <div className="trm-timeline-mark" />
            <div className="trm-a trm-timeline-content">
              <div className="trm-card-header">
                <div className="trm-left-side">
                  <h6 className="trm-mb-15">Sustainable Innovation Award</h6>
                  <div className="trm-text-sm trm-accent-color trm-mb-15">
                    <i>AP NUST Certification</i>
                  </div>
                </div>
              </div>
              <div>
                Recognized as an award winner in Sustainable Innovation at AP
                NIUST for contributing innovative and sustainable ideas toward
                environmental responsibility and modern business solutions.
              </div>
            </div>
          </div>
          {/* DIV 3 */}
          <div
            className="trm-timeline-item trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-timeline-mark-light" />
            <div className="trm-timeline-mark" />
            <div className="trm-a trm-timeline-content">
              <div className="trm-card-header">
                <div className="trm-left-side">
                  <h6 className="trm-mb-15">NUST Admission &ndash; GIS Program</h6>
                  <div className="trm-text-sm trm-accent-color trm-mb-15">
                    <i>Academic Milestone</i>
                  </div>
                </div>
              </div>
              <div>
                Admitted to the Geographic Information Systems (GIS) program at
                NUST, developing analytical skills in spatial data analysis and
                technology-driven problem solving. Bridging geospatial
                intelligence with modern web technologies.
              </div>
            </div>
          </div>
        </div>
        {/* timeline end */}
      </div>
      <div className="col-lg-6">
        <div className="trm-timeline">
          {/* DIV 4 */}
          <div
            className="trm-timeline-item trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-timeline-mark-light" />
            <div className="trm-timeline-mark" />
            <div className="trm-a trm-timeline-content">
              <div className="trm-card-header">
                <div className="trm-left-side">
                  <h6 className="trm-mb-15">Makers Go Online</h6>
                  <div className="trm-text-sm trm-accent-color trm-mb-15">
                    <i>Freelance Web Developer &bull; November 2025 &ndash; Present</i>
                  </div>
                </div>
              </div>
              <div>
                Developing modern, responsive websites and scalable frontend
                solutions for diverse clients. Focused on performance, clean
                code, and delivering production-ready digital products using
                React and Next.js.
              </div>
            </div>
          </div>
          {/* DIV 5 */}
          <div
            className="trm-timeline-item trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-timeline-mark-light" />
            <div className="trm-timeline-mark" />
            <div className="trm-a trm-timeline-content">
              <div className="trm-card-header">
                <div className="trm-left-side">
                  <h6 className="trm-mb-15">Continuous Learning &amp; Growth</h6>
                  <div className="trm-text-sm trm-accent-color trm-mb-15">
                    <i>Independent Projects &bull; 2025 &ndash; Ongoing</i>
                  </div>
                </div>
              </div>
              <div>
                Actively expanding expertise through independent frontend
                projects, exploring new React and Next.js patterns, contributing
                to open-source, and building personal tools that solve
                real-world problems.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default History;
