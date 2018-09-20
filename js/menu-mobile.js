function showMenuMobile(mobile)
{
	var disp =  document.getElementById(mobile).style.display;
	if(disp == "none")
    document.getElementById(mobile).style.display = "flex";
	else
		document.getElementById(mobile).style.display = "none";
}
