function displayImg(imgUrl) {
	if(typeof(wr) == 'undefined' || wr.closed){
		wr = window.open(imgUrl, "", "location=no,menubar=no,status=no,toolbar=no,width=640,height=480");
	} else {
		wr.location.href = imgUrl;
		wr.focus();
	}
}

/* MINIFIED
<script>
function displayImg(e){if(typeof wr=="undefined"||wr.closed){wr=window.open(e,"","location=no,menubar=no,status=no,toolbar=no,width=640,height=480")}else{wr.location.href=e;wr.focus()}}
</script>
 */