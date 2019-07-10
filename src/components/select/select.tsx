import {
    Component,
    ComponentInterface,
    Host,
    Prop,
    State,
    Watch,
    h,
} from "@stencil/core";

@Component({
    tag: "lsg-select",
    scoped: true,
})
export class Select implements ComponentInterface {
    private flyout: HTMLLsgSelectFlyoutElement;

    @State() selectedOptionId: string;
    @State() displayValue: string = "Test";

    @Prop({ mutable: true }) open = false;
    @Prop() errorText?: string = "";

    @Watch("selectedOptionId")
    handleSelectedOptionIdChange(newId) {
        if (newId) {
          const selectedElm = newId && document.getElementById(newId);
          this.selectedOptionId = newId || "";
          this.displayValue = selectedElm ? selectedElm.innerText : "";
        }
    }

    render() {
        return (
            <Host>
                <button
                  id="test-toggle"
                    onClick={() => this.flyout.toggleOpen()}
                >{this.displayValue}</button>
                {this.errorText && (
                    <p>
                        {this.errorText}
                    </p>
                )}
                <lsg-select-flyout
                    onOpenChange={open => (this.open = open)}
                    onSelectFlyoutOptionSelected={ev => {
                        this.selectedOptionId = ev.detail.id;
                        this.displayValue = ev.detail.label;
                        ev.preventDefault();
                    }}
                    selectedOptionId={this.selectedOptionId}
                    toggleId={"test-toggle"}
                    ref={(el) => (this.flyout = el)}
                >
                    <slot />
                </lsg-select-flyout>
            </Host>
        );
    }
}
