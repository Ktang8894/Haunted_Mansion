#pragma strict

var xpos = [-5.5,-5.5,-5.5,-3.5,-3.5,-3.5,-1.5,0.5,2.5,2.5,2.5,4.5,4.5,4.5];
var ypos = [4.5,0.5,-3.5,4.5,0.5,-3.5,0.5,0.5,4.5,0.5,-3.5,4.5,0.5,-3.5];


function OnLevelWasLoaded()
{
	var index : int = getRandomValue();
	transform.position =  new Vector2(xpos[index],ypos[index]);
};


function getRandomValue()
{
	var index: int = Random.Range(0,xpos.length-1);

	return index;
};
