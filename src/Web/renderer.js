const information = document.getElementById("info");

let msg = ``;
msg += `This app is using: `;
msg += `Chrome (v${versions.chrome()}), `;
msg += `Node.js (v${versions.node()}) and `;
msg += `Electron (v${versions.electron()})`;
information.innerText = msg;

const func = async () => {
	const response = await window.versions.ping();
	console.log(response); // prints out 'pong'
    alert(response);
};

func();