#pragma strict

var newSprite : Sprite;
 
function Start () {
    
}

function Update() {
	newSprite = Resources.Load("Ghost Left", typeof(Sprite)) as Sprite;
	GetComponent(SpriteRenderer).sprite = newSprite;
}