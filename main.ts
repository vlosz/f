basic.forever(function () {
    if (input.temperature() > 20) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            # . # . .
            `)
        pins.servoWritePin(AnalogPin.P2, 180)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            `)
        pins.servoWritePin(AnalogPin.P2, 0)
    }
})
