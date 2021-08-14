import "./InstructionCard.scss";
import React from "react";

interface Props {
  index: number;
  text: string;
}

const InstructionCard: React.FC<Props> = (props: Props) => {
  return (
    <div className="instruction-card">
      <aside>
        <div className="index-container">{props.index}</div>
      </aside>
      <aside className="middle-padding">
        <div className="text">{props.text}</div>
      </aside>
      <aside>
        <div className="image-container">

        </div>
      </aside>
    </div>
  );
};

export default InstructionCard;
