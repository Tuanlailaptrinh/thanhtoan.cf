// loading
console.log(
    "%c Coder By: ĐNH %c",
    'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:24px;color:#ff0011;-webkit-text-fill-color:#ff0011;-webkit-text-stroke: 1px #ff0011;',
    "font-size:12px;color:#999999;"
);
console.log(
    "%c Zalo: 0878733377 %c",
    'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:24px;color:#ff0011;-webkit-text-fill-color:#ff0011;-webkit-text-stroke: 1px #ff0011;',
    "font-size:12px;color:#999999;"
);
console.log(
    "%c Telegram: @hieusupdv %c",
    'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:24px;color:#ff0011;-webkit-text-fill-color:#ff0011;-webkit-text-stroke: 1px #ff0011;',
    "font-size:12px;color:#999999;"
);
console.log(
    "%c Facebook: https://www.facebook.com/KING.1891 %c",
    'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:24px;color:#ff0011;-webkit-text-fill-color:#ff0011;-webkit-text-stroke: 1px #ff0011;',
    "font-size:12px;color:#999999;"
);
console.log(
    "%c NO COPPY %c",
    'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:24px;color:#fff; background-color:#ff2b0f;-webkit-text-fill-color:#fff; background-color:#ff2b0f;-webkit-text-stroke: 1px #ff0303;',
    "font-size:12px;color:#999999;"
);
$(".loader").delay(1000).fadeOut("fast");
// open link
function openlink(url) {
	window.open(url, "_blank").focus();
}
// click copy
function copytext(str) {
	const el = document.createElement("textarea");
	el.value = str;
	document.body.appendChild(el);
	el.select();
	document.execCommand("copy");
	Swal.fire("Thông báo", "Copy thành công!", "success");
}
