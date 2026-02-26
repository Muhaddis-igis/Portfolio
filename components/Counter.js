const Counter = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        {/* counter */}
        <div
          className="trm-counter-up trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <div className="trm-counter-number">
            <span className="trm-counter">12</span>
            <span className="trm-counter-symbol">+</span>
          </div>
          <div className="trm-divider trm-mb-20 trm-mt-20" />
          <div className="trm-label">Happy Customers</div>
        </div>
        {/* counter end */}
      </div>
      <div className="col-lg-6">
        {/* counter */}
        <div
          className="trm-counter-up trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <div className="trm-counter-number">
            <span className="trm-counter">5</span>
            <span className="trm-counter-symbol">+</span>
          </div>
          <div className="trm-divider trm-mb-20 trm-mt-20" />
          <div className="trm-label">Completed Projects</div>
        </div>
        {/* counter end */}
      </div>
    </div>
  );
};
export default Counter;
