let doña_luci = 0
input.onButtonPressed(Button.A, function () {
    doña_luci = doña_luci + 1
})
input.onButtonPressed(Button.B, function () {
    doña_luci = doña_luci - 1
})
basic.forever(function () {
    if (doña_luci == 3) {
        basic.showIcon(IconNames.Silly)
    } else {
        basic.showNumber(doña_luci)
    }
})
