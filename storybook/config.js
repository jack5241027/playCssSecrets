import { configure, setAddon } from '@storybook/react'
import infoAddon from '@storybook/addon-info'

setAddon(infoAddon)

const req = require.context('../src/client', true, /.*stories\.js$/)

function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
