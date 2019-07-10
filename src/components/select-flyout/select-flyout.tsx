import {
    Component,
    ComponentInterface,
    Element,
    Event,
    EventEmitter,
    Host,
    Listen,
    Method,
    Prop,
    State,
    Watch,
    h,
} from "@stencil/core";

@Component({
    tag: "lsg-select-flyout",
    styles: `
    :host {
      display: initial;
      max-height: 320px;
      overflow-y: auto;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.16);
      position: absolute;
      top: 66px;
      left: 0;
      right: 16px;
      z-index: 3;
      transform: scaleY(1);
      transform-origin: top center;
      transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;
      background-color: white;
    }

    :host(.hidden) {
      transform: scaleY(0);
      opacity: 0;
    }
`,
    scoped: true,
})
export class SelectFlyout implements ComponentInterface {
    private emptyListOption;
    @Element() host;

    @Prop() selectedOptionId: string;

    @State() focussedOptionId: string;

    @Prop() isToggleElmWidth = true;
    @Prop() onOpenChange: (open: boolean) => void;
    @Prop() toggleId: string;
    @Prop() emptyListLabel: string;
    @Prop({ mutable: true }) open: boolean;

    @Watch("open")
    handleOpenChange(newOpen) {
        if (this.onOpenChange) this.onOpenChange(newOpen);
    }

    @Event({ eventName: "selectFlyoutOptionSelected" })
    selectedOption: EventEmitter;

    triggerSelectedOptionEvent(optionElement) {
        this.focussedOptionId = optionElement.id;
        this.selectedOption.emit({
            id: optionElement.id,
            label: optionElement.textContent,
            value: optionElement.getAttribute("value"),
        });
    }

    @Listen("selectOptionClicked")
    handleSelectOptionClicked(event: CustomEvent) {
        this.triggerSelectedOptionEvent(event.target);
        this.open = false;
    }

    @Method() async setOpen(setTo: boolean) {
        this.open = setTo;
        return this.open;
    }

    @Method() async toggleOpen() {
        this.open = !this.open;
        return this.open;
    }

    @Method() async setSelectedItemIfExists(value: string) {
        const item = this.getOptionElements().find(element => element.value === value);
        if (item) {
            this.triggerSelectedOptionEvent(item);
        }
    }

    getOptionElements: () => HTMLOptionElement[] = () => {
        return Array.from(this.host.getElementsByTagName("lsg-select-option")).filter(
            element => element !== this.emptyListOption
        ) as HTMLOptionElement[];
    };

    render() {
        const toggleElm = document.getElementById(this.toggleId);

        return (
            <Host
                style={{
                    top: `${
                            toggleElm.offsetTop + toggleElm.offsetHeight
                    }px`,
                    left: `${toggleElm.offsetLeft}px`,
                    width: "auto",
                    display: !this.open ? "none" : "initial"
                }}
            >
                    <slot />
            </Host>
        );
    }
}
