	function detik() {
		let detik = new Date();
        setTimeout('detik()',0);
		return document.getElementsByClassName("detik")[0].innerHTML = detik.getSeconds();
	}

	function menit() {
		let menit = new Date();
        setTimeout('menit()',0);
		return document.getElementsByClassName("menit")[0].innerHTML = menit.getMinutes();
	}

	function jam() {
		let jam = new Date();
        setTimeout('jam()',0);
		return document.getElementsByClassName("jam")[0].innerHTML = jam.getHours();
	}

	function tanggal() {
		let tanggal = new Date();
        setTimeout('tanggal()',0);
		return document.getElementsByClassName("tanggal")[0].innerHTML = tanggal.getDate();
	}


    detik();
	menit();
	jam();
	tanggal();
    // console.log(detik());