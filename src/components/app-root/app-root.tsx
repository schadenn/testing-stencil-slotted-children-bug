import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  scoped: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <lsg-select>
            <lsg-select-option>Ant-Man</lsg-select-option>
            <lsg-select-option>Asterix</lsg-select-option>
            <lsg-select-option>Aquaman</lsg-select-option>
          </lsg-select>
        </main>
      </div>
    );
  }
}
