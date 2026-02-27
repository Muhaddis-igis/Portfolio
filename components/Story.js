const Story = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          My Story <span data-number={1} />
        </h5>
        {/* about text */}
        <div
          className="trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <p className="trm-mb-20">
            I began my professional career in April 2025 as an Assistant
            Marketing Manager at Natural Fiber Company. During my time there
            (April 2025 &ndash; November 2025), I gained hands-on experience in
            marketing strategy, brand positioning, and business development
            within a competitive industry environment.
          </p>
          <p>
            From November 2025 onward, I transitioned into freelancing as a Web
            Developer through Makers Go Online. As a freelance web developer, I
            focus on building modern, responsive, and scalable web solutions for
            clients, combining technical expertise with a strong understanding of
            business needs.
          </p>
        </div>
        {/* about text end */}
      </div>
    </div>
  );
};
export default Story;
