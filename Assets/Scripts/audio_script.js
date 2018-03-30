#pragma strict

function OnLevelWasLoaded()
{
	var audio :  AudioSource = GetComponent.<AudioSource>();
	audio.volume = 0.25;
	audio.Play();
	audio.Play(44100);
};
