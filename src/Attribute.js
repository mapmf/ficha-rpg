import React from "react";

export class Attribute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bonus: 0
    };
  }

  handleKeyUp = e => {
    let text = e.target.innerText;
    this.setState(state => {
      if (isNaN(text)) {
        document.querySelector(
          `.attribute-value-${this.props.attribute.name}`
        ).innerText = "";
        return null;
      }

      return {
        bonus: calculateAttributeBonus(text)
      };
    });
  };

  render() {
    return (
      <>
        <div className="attribute" style={attributeCardStyle}>
          <h6>{this.props.attribute.name}</h6>
          <div
            contentEditable="true"
            className={`attribute-value-${this.props.attribute.name}`}
            style={attributeValueStyle}
            onKeyUp={this.handleKeyUp}
          >
            {this.props.attribute.value > 0 ? this.props.attribute.value : ""}
          </div>
          <div className="attribute-bonus" style={attributeBonusStyle}>
            {isNaN(this.state.bonus) ? "" : this.state.bonus}
          </div>
        </div>
      </>
    );
  }
}

const calculateAttributeBonus = value => {
  let number = Number.parseInt(value, 10);
  return (number - 10) / 2;
};

const attributeCardStyle = {
  borderStyle: "groove",
  borderRadius: "8px",
  height: "100px",
  width: "100px",
  marginLeft: "5px",
  marginRight: "5px",
  marginBottom: "15px"
};

const attributeValueStyle = {
  height: "50px",
  width: "100%",
  backgroundColor: "white",
  fontSize: "30px"
};

const attributeBonusStyle = {
  borderStyle: "groove",
  borderRadius: "100%",
  height: "30px",
  width: "50px",
  marginLeft: "20px",
  backgroundColor: "white"
};
