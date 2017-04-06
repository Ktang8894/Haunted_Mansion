#pragma strict

function Start ()
{
	var audio :  AudioSource = GetComponent.<AudioSource>();
	audio.Play();
	audio.Play(44100);
}

function OnMouseUp () 
{
	Application.LoadLevel("Scene 1");
}
