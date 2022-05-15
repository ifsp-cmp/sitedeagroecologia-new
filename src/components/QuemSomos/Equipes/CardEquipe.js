import React from "react";

import "./CardEquipe.css";

const TeamCard = (props, index) => {
  const isFirst = index === 0;
  const isLast = index === props.membro.length - 1;
  const margin = isFirst ? "mr-1" : isLast ? "ml-1" : "mx-1";

  return (
    <div
      className={`${margin} mt-2 text-center px-2 mt-3 col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 border`}
      style={{ borderRadius: "10px" }}
    >
      <figure className="mb-2">
        <img
          style={{ maxWidth: "100%", borderRadius: "10px" }}
          src={props.membro.photo}
          alt={props.membro.name}
        />
      </figure>
      <h5 style={{ color: "#77B81E", fontWeight: "700" }}>
        {props.membro.name}
      </h5>
      <h6 style={{ marginTop: "-8px", fontWeight: "700" }}>
        {props.membro.role}
      </h6>
      <h6 className="linhaLink" style={{ marginTop: "-6px" }}>
        {props.membro.research1 ? (
          <div>
            <a href={props.membro.researchLink1}>
              {props.membro.research1 + " "}
            </a>
          </div>
        ) : (
          ""
        )}
        {props.membro.research2 ? (
          <div>
            <a href={props.membro.researchLink2}>
              {props.membro.research2 + " "}
            </a>
          </div>
        ) : (
          ""
        )}
        {props.membro.research3 ? (
          <div>
            <a href={props.membro.researchLink3}>
              {props.membro.research3 + " "}
            </a>
          </div>
        ) : (
          ""
        )}
      </h6>
    </div>
  );
};

export default TeamCard;
