let ad = 0
serial.redirect(
SerialPin.C17,
SerialPin.C16,
BaudRate.BaudRate115200
)
let list = [0xff, 0xAA, 0x01]
basic.forever(function () {
    control.waitMicros(400000)
    serial.writeString("ÿ")
    serial.writeString("")
        
})
