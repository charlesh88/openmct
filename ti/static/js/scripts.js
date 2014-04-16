function displayImg(imgUrl) {
	if(typeof(wr) == 'undefined' || wr.closed){
		wr = window.open(imgUrl, "", "location=no,menubar=no,status=no,toolbar=no,width=800,height=600");
	} else {
		wr.location.href = imgUrl;
		wr.focus();
	}
}

function loadHtml(targ, url) {
    $(targ).load(url);
}

/* MINIFIED
<script>
function displayImg(e){if(typeof wr=="undefined"||wr.closed){wr=window.open(e,"","location=no,menubar=no,status=no,toolbar=no,width=800,height=600")}else{wr.location.href=e;wr.focus()}}
</script>
 */