namespace SpriteKind {
    export const Target = SpriteKind.create()
    export const FPSKind = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Start = 0
})
sprites.onOverlap(SpriteKind.FPSKind, SpriteKind.Target, function (sprite, otherSprite) {
    Apple.destroy(effects.disintegrate, 500)
})
let Start = 0
let Apple: Sprite = null
Apple = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 . . . . . . . . 
    . . . . . 7 7 7 . . . . . . . . 
    . . . . . 7 7 . . . . . . . . . 
    . . . . 7 7 . . . . . . . . . . 
    . . 2 2 2 2 2 2 2 . . . . . . . 
    . 2 2 2 2 2 2 2 2 2 . . . . . . 
    . 2 2 2 2 2 2 2 2 2 . . . . . . 
    . 2 2 2 2 2 2 2 2 2 . . . . . . 
    . 2 2 2 2 2 2 2 2 2 . . . . . . 
    . 2 2 2 2 2 2 2 2 2 . . . . . . 
    . 2 2 2 2 2 2 2 2 2 . . . . . . 
    . . 2 2 2 2 2 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Target)
Apple.setPosition(randint(0, 10), randint(0, 10))
let Cursor = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . 1 . . . . . . . 1 . . . . 
    . . . 1 . . . . . . . 1 . . . . 
    . . . 1 . . . . . . . 1 . . . . 
    . . . 1 . . . 2 . . . 1 . . . . 
    . . . 1 . . . . . . . 1 . . . . 
    . . . 1 . . . . . . . 1 . . . . 
    . . . 1 . . . . . . . 1 . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.FPSKind)
controller.moveSprite(Cursor)
