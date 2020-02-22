var obecny = 0;
function pokaz(artykul)
{
	obecny = artykul;
	document.getElementById('menu').setAttribute('style', 'display:none;');
	for (var i=1; i<=9; i++)
	{
		var id = i;
		id.toString();
		if (artykul == i)
		{
			document.getElementById(id).setAttribute('style', 'display:block');
		}
		else
		{
			document.getElementById(id).setAttribute('style', 'display:none;');
		}
	}
}
function dalej()
{
	if (obecny < 9)
	{
		pokaz(++obecny);
	}
	else if (obecny == 9)
	{
		obecny = 1;
		pokaz(obecny);
	}
}

function wstecz()
{
	if (obecny > 1)
	{
		pokaz(--obecny);
	}
	else if (obecny == 1)
	{
		obecny = 9;
		pokaz(obecny);
	}
}

function losuj()
{
	obecny = Math.floor(Math.random() * 10);
	if (obecny == 0)
	{
		obecny++;
	}
	pokaz(obecny)
}
function wroc()
{
	document.getElementById(obecny.toString()).setAttribute('style', 'display:none');
	document.getElementById('menu').setAttribute('style', 'display:grid;');

}
function dodaj_komentarz()
{
	var imie = document.getElementById('imie').value;
	var koment = document.getElementById('koment').value;
	var tresc = document.getElementById('tresc');

	tresc.innerHTML += "<div class='row'><div class='well' style='width:80%;height:auto;'><h2>"+imie+"</h2><br>"+koment+"</div></div>";

}
