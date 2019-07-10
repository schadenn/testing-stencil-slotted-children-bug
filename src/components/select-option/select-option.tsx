import { Component, ComponentInterface, Event, EventEmitter, Host, Listen, Prop, h } from "@stencil/core";

@Component({
    tag: "lsg-select-option",
    styles: `
    :host {
      cursor: pointer;
      padding: 16px;
      outline: 0;
      display: block;
      text-decoration: none;
      color: black;
    }
`,
    scoped: true,
})
export class SelectOption implements ComponentInterface {
    /** Set the value of the option. Will be used as select value when the option is selected. */
    @Prop() value: string;

    /** will be emitted when an option is clicked */
    @Event({ eventName: "selectOptionClicked" })
    selectOptionClicked: EventEmitter;

    @Listen("click")
    handleClick() {
            this.selectOptionClicked.emit({ value: this.value });
    }

    render() {
        return (
            <Host>
                <slot />
            </Host>
        );
    }
}
