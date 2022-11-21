let _ = ""
input.onButtonPressed(Button.A, function () {
    basic.showString(_)
})
basic.forever(function () {
    let ds: DS1302.DS1302RTC = null
    _ = "" + ds.getYear() + ":" + ds.getMonth() + ":" + ds.getWeekday() + ":" + ds.getDay() + ":" + ds.getHour() + ":" + ds.getMinute() + ":" + ds.getSecond()
})
