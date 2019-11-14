import React from "react";
import { shallow, mount } from "enzyme";
import { expect } from "chai";
import sinon from "sinon";
import ReactDOM from "react-dom";

import Buttons from "./buttons.component";

describe("Buttons component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Buttons />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Next Gen and Reset buttons are loaded on the component", () => {
    //const clickCallback = sinon.spy();
    const wrapper = mount(<Buttons />);

    expect(wrapper.find(".nxtGenbtn").length).to.equal(1);
    expect(wrapper.find(".resetbtn").length).to.equal(1);
  });

  it("nxt Generation button click to call nextgenbutton prop function", () => {
    const clickCallback = sinon.spy();
    const wrapper = mount(<Buttons nextGenButton={clickCallback} />);
    wrapper.find(".nxtGenbtn").simulate("click");
    expect(clickCallback.called).to.be.true;
  });

  it("Reset button click to call clear prop function", () => {
    const clickCallback = sinon.spy();
    const wrapper = mount(<Buttons clear={clickCallback} />);
    wrapper.find(".resetbtn").simulate("click");
    expect(clickCallback.called).to.be.true;
  });
});
