enum RadioMessage {
    signal = 3581,
    message1 = 49434
}
radio.onReceivedMessage(RadioMessage.message1, function () {
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `,10)
basic.clearScreen()
})
radio.setFrequencyBand(23)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `,10)
radio.sendMessage(RadioMessage.message1)
    }
    basic.clearScreen()
})
