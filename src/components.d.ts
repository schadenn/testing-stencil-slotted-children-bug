/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppRoot {}
  interface LsgSelect {
    'errorText'?: string;
    'open': boolean;
  }
  interface LsgSelectFlyout {
    'emptyListLabel': string;
    'isToggleElmWidth': boolean;
    'onOpenChange': (open: boolean) => void;
    'open': boolean;
    'selectedOptionId': string;
    'setOpen': (setTo: boolean) => Promise<boolean>;
    'setSelectedItemIfExists': (value: string) => Promise<void>;
    'toggleId': string;
    'toggleOpen': () => Promise<boolean>;
  }
  interface LsgSelectOption {
    /**
    * Set the value of the option. Will be used as select value when the option is selected.
    */
    'value': string;
  }
}

declare global {


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLLsgSelectElement extends Components.LsgSelect, HTMLStencilElement {}
  var HTMLLsgSelectElement: {
    prototype: HTMLLsgSelectElement;
    new (): HTMLLsgSelectElement;
  };

  interface HTMLLsgSelectFlyoutElement extends Components.LsgSelectFlyout, HTMLStencilElement {}
  var HTMLLsgSelectFlyoutElement: {
    prototype: HTMLLsgSelectFlyoutElement;
    new (): HTMLLsgSelectFlyoutElement;
  };

  interface HTMLLsgSelectOptionElement extends Components.LsgSelectOption, HTMLStencilElement {}
  var HTMLLsgSelectOptionElement: {
    prototype: HTMLLsgSelectOptionElement;
    new (): HTMLLsgSelectOptionElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'lsg-select': HTMLLsgSelectElement;
    'lsg-select-flyout': HTMLLsgSelectFlyoutElement;
    'lsg-select-option': HTMLLsgSelectOptionElement;
  }
}

declare namespace LocalJSX {
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}
  interface LsgSelect extends JSXBase.HTMLAttributes<HTMLLsgSelectElement> {
    'errorText'?: string;
    'open'?: boolean;
  }
  interface LsgSelectFlyout extends JSXBase.HTMLAttributes<HTMLLsgSelectFlyoutElement> {
    'emptyListLabel'?: string;
    'isToggleElmWidth'?: boolean;
    'onOpenChange'?: (open: boolean) => void;
    'onSelectFlyoutOptionSelected'?: (event: CustomEvent<any>) => void;
    'open'?: boolean;
    'selectedOptionId'?: string;
    'toggleId'?: string;
  }
  interface LsgSelectOption extends JSXBase.HTMLAttributes<HTMLLsgSelectOptionElement> {
    /**
    * will be emitted when an option is clicked
    */
    'onSelectOptionClicked'?: (event: CustomEvent<any>) => void;
    /**
    * Set the value of the option. Will be used as select value when the option is selected.
    */
    'value'?: string;
  }

  interface IntrinsicElements {
    'app-root': AppRoot;
    'lsg-select': LsgSelect;
    'lsg-select-flyout': LsgSelectFlyout;
    'lsg-select-option': LsgSelectOption;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


