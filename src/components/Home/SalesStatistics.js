import React from "react";

const SaleStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Sale statistics</h5>
          <iframe
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
              width: "100%",
              height: "350px",
            }}
            src="https://charts.mongodb.com/charts-franell-lfmha/embed/charts?id=628b4e6e-58e9-460b-8083-1e16eaf3b620&maxDataAge=3600&theme=light&autoRefresh=true"   ></iframe>
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;
