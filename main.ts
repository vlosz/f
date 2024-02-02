basic.forever(function () {
    if (input.temperature() < 20) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            # . # . .
            `)
        pins.servoWritePin(AnalogPin.P0, 180)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            `)
        pins.servoWritePin(AnalogPin.P0, 90)
    }
})
