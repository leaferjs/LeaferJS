import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    fill: '#32cd79',
    draggable: true
})

leafer.add(rect)