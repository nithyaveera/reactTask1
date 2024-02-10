import React, { useEffect } from "react";

const First = ({ jsonData }) => {
  return (
    <div class="row">
      {jsonData.map((val, index) => {
        return (
          <>
            <div class="col-md-4 mt-4" key={index}>
              <div class="card p-3" style={{ borderRadius: "15px" }}>
                <div class="card-body">
                  <div
                    class="card-header"
                    style={{
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    <h6 style={{color:"darkgray"}}>{val.title}</h6>
                    <h1>{val.price}</h1>
                  </div>
                  <div class="card-text pt-4">
                    <p>
                      <span style={{ paddingRight: "8px" }}>
                        <i class="fas fa-check"></i>
                      </span>
                      {val.user}
                    </p>
                    <p>
                      <span style={{ paddingRight: "8px" }}>
                        <i class="fas fa-check"></i>
                      </span>
                      {val.storage}
                    </p>
                    <p>
                      <span style={{ paddingRight: "8px" }}>
                        <i class="fas fa-check"></i>
                      </span>
                      {val.publicproject}
                    </p>
                    <p>
                      <span style={{ paddingRight: "8px" }}>
                        <i class="fas fa-check"></i>
                      </span>
                      {val.access}
                    </p>
                    <p>
                      {index < 1 ? (
                        <div style={{ opacity: "0.4" }}>
                          <i
                            className="fas fa-xmark"
                            style={{ paddingRight: "8px" }}
                          ></i>
                          {val.privatepro}
                        </div>
                      ) : (
                        <div>
                          <i
                            className="fas fa-check"
                            style={{ paddingRight: "8px" }}
                          ></i>
                          {val.privatepro}
                        </div>
                      )}
                    </p>
                    <p>
                      {index < 1 ? (
                        <div style={{ opacity: "0.4" }}>
                          <i
                            className="fas fa-xmark"
                            style={{ paddingRight: "8px" }}
                          ></i>
                          {val.support}
                        </div>
                      ) : (
                        <div>
                          <i
                            className="fas fa-check"
                            style={{ paddingRight: "8px" }}
                          ></i>
                          {val.support}
                        </div>
                      )}
                    </p>
                    <p>
                      {index < 1 ? (
                        <div style={{ opacity: "0.4" }}>
                          <i
                            className="fas fa-xmark"
                            style={{ paddingRight: "8px" }}
                          ></i>
                          {val.domain}
                        </div>
                      ) : (
                        <div>
                          <i
                            className="fas fa-check"
                            style={{ paddingRight: "8px" }}
                          ></i>
                          {val.domain}
                        </div>
                      )}
                    </p>
                    <p>
                      {index < 2 ? (
                        <div style={{ opacity: "0.4" }}>
                          <i
                            className="fas fa-xmark"
                            style={{ paddingRight: "8px" }}
                          ></i>
                          {val.report}
                        </div>
                      ) : (
                        <div>
                          <i
                            className="fas fa-check"
                            style={{ paddingRight: "8px" }}
                          ></i>
                          {val.report}
                        </div>
                      )}
                    </p>
                  </div>
                            <div class="row">
                                {index < 2 ? (<button
                                    class="col-12 btn btn-primary"
                                    style={{ borderRadius: "40px", opacity:"0.6" }}
                                >
                                    Button
                                </button>) : (<button
                                    class="col-12 btn btn-primary"
                                    style={{ borderRadius: "40px" }}
                                >
                                    Button
                                </button>)}
                    
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default First;
