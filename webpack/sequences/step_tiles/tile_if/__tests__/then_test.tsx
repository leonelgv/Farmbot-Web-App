import * as React from "react";
import { Then } from "../then";
import { mount } from "enzyme";
import { fakeSequence } from "../../../../__test_support__/fake_state/resources";
import { If } from "farmbot/dist";
import { emptyState } from "../../../../resources/reducer";
import { IfParams } from "../index";

describe("<Then/>", () => {
  function fakeProps(): IfParams {
    const currentStep: If = {
      kind: "_if",
      args: {
        lhs: "pin0",
        op: "is",
        rhs: 0,
        _then: { kind: "nothing", args: {} },
        _else: { kind: "nothing", args: {} }
      }
    };
    return {
      currentSequence: fakeSequence(),
      currentStep,
      dispatch: jest.fn(),
      index: 0,
      resources: emptyState().index,
      confirmStepDeletion: false,
    };
  }

  it("renders", () => {
    const wrapper = mount(<Then {...fakeProps()} />);
    ["THEN", "Execute Sequence"].map(string =>
      expect(wrapper.text()).toContain(string));
    expect(wrapper.find("button").length).toEqual(1);
  });
});
