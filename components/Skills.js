import { Fragment } from "react";
const Skills = () => {
  return (
    <Fragment>
      <LanguageSkills />
      <FrontendSkills />
      <ToolsSkills />
    </Fragment>
  );
};
export default Skills;

const LanguageSkills = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <h5 className="trm-mb-40 trm-title-with-divider">
          Language Skills
          <span data-number={5} />
        </h5>
      </div>
      <div className="col-lg-6">
        <div
          className="trm-skill-card trm-scroll-animation trm-active-el"
          data-scroll
          data-scroll-offset={40}
        >
          <div>
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">Urdu</h6>
              <span className="trm-label trm-label-light">Native &ndash; 90%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p90" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div
          className="trm-skill-card trm-scroll-animation trm-active-el"
          data-scroll
          data-scroll-offset={40}
        >
          <div>
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">English</h6>
              <span className="trm-label trm-label-light">80%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FrontendSkills = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <h5 className="trm-mb-40 trm-title-with-divider">
          Frontend
          <span data-number={6} />
        </h5>
      </div>
      <div className="col-lg-6">
        <div
          className="trm-skill-card trm-scroll-animation trm-active-el"
          data-scroll
          data-scroll-offset={40}
        >
          <div className="trm-mb-40">
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">HTML</h6>
              <span className="trm-label trm-label-light">90%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p90" />
            </div>
          </div>
          <div className="trm-mb-40">
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">CSS</h6>
              <span className="trm-label trm-label-light">85%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p80" />
            </div>
          </div>
          <div>
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">JavaScript</h6>
              <span className="trm-label trm-label-light">80%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p80" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div
          className="trm-skill-card trm-scroll-animation trm-active-el"
          data-scroll
          data-scroll-offset={40}
        >
          <div className="trm-mb-40">
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">React</h6>
              <span className="trm-label trm-label-light">80%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p80" />
            </div>
          </div>
          <div>
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">Next.js</h6>
              <span className="trm-label trm-label-light">75%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p70" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ToolsSkills = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <h5 className="trm-mb-40 trm-title-with-divider">
          Tools &amp; Version Control
          <span data-number={7} />
        </h5>
      </div>
      <div className="col-lg-6">
        <div
          className="trm-skill-card trm-scroll-animation trm-active-el"
          data-scroll
          data-scroll-offset={40}
        >
          <div>
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">Git</h6>
              <span className="trm-label trm-label-light">80%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p80" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div
          className="trm-skill-card trm-scroll-animation trm-active-el"
          data-scroll
          data-scroll-offset={40}
        >
          <div>
            <div className="trm-skill-header">
              <h6 className="trm-mb-15">GitHub</h6>
              <span className="trm-label trm-label-light">80%</span>
            </div>
            <div className="trm-progressbar-frame">
              <div className="trm-progressbar p80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
