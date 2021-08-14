import "./InstructionCard.scss";
import React from "react";

interface Props {
  index: number;
  text: string;
  desc: string;
  imgSrc: string;
}

const InstructionCard: React.FC<Props> = (props: Props) => {
  return (
    <div className="instruction-card">
      <div className="img-container">
        <img src={props.imgSrc} alt="instruction-banner" width={128} height={128} />
      </div>
      <div className="span-container">
        <span className="number-span">{props.index}</span>
        <span className="header-span">{props.text}</span>
      </div>
      <div className="desc">{props.desc}</div>
    </div>
  );
};

export default InstructionCard;
