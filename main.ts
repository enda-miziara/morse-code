input.onButtonPressed(Button.A, function () {
	
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("C")
})
radio.setGroup(1)
let alphanum = [
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10"
]
alphanum = [
"20",
"21",
"22",
"23",
"24",
"25",
"26",
"27",
"28",
"29"
]
