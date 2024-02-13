import { test, expect } from "@playwright/experimental-ct-react";

import App from "../App";

//Configures the viewport to a 500x500 size
test.use({ viewport: { width: 1920, height: 1080 } });
test('Check Table content', async ({ mount }) => {
//Uses mount() to instantiate the <App /> component in isolation
    const component = await mount(<App></App>);

    await component.screenshot({ path: 'screenshot1.png' });

});