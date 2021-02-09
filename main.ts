input.onButtonPressed(Button.A, function () {
    dief = game.createSprite(0, 2)
    politie = game.createSprite(4, 2)
    radio.sendString("Flik")
    basic.showString("Dief")
    begingame()
})
function getpos () {
    diefx = dief.get(LedSpriteProperty.X)
    diefy = dief.get(LedSpriteProperty.Y)
}
radio.onReceivedValue(function (name, value) {
    if (name == "flikx") {
        politie.set(LedSpriteProperty.X, value)
    }
    if (name == "fliky") {
        politie.set(LedSpriteProperty.Y, value)
    }
})
function begingame () {
    gameover = 0
    for (let index = 0; index < 40; index++) {
        getpos()
        radio.sendValue("diefx", diefx)
        radio.sendValue("diefy", diefy)
        move()
        basic.pause(1000)
        if (dief.get(LedSpriteProperty.X) == politie.get(LedSpriteProperty.X) && politie.get(LedSpriteProperty.Y) == dief.get(LedSpriteProperty.Y)) {
            radio.sendString("Flik wins")
            gameover = 1
            radio.sendValue("gameover", gameover)
            basic.showString("Flik wins")
            break;
        }
    }
    radio.sendString("Dief wins")
    basic.showString("Dief wins")
    gameover = 1
    radio.sendValue("gameover", 0)
    if (!(gameover)) {
        dief.delete()
        politie.delete()
        gameover = 0
    }
}
function move () {
    if (input.isGesture(Gesture.TiltLeft)) {
        dief.change(LedSpriteProperty.X, -1)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        dief.change(LedSpriteProperty.X, 1)
    }
    if (input.isGesture(Gesture.LogoUp)) {
        dief.change(LedSpriteProperty.Y, 1)
    }
    if (input.isGesture(Gesture.LogoDown)) {
        dief.change(LedSpriteProperty.Y, -1)
    }
}
let gameover = 0
let diefy = 0
let diefx = 0
let politie: game.LedSprite = null
let dief: game.LedSprite = null
radio.setGroup(97)
basic.forever(function () {
	
})
