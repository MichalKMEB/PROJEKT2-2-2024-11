function outf(text) { 
    var mypre = document.getElementById("output"); 
    mypre.innerHTML = mypre.innerHTML + text; 
}

function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
        throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

function runCode() { 
    var prog = document.getElementById("editor").value; 
    var mypre = document.getElementById("output"); 
    var result = document.getElementById("result");
    mypre.innerHTML = ''; 
    result.innerHTML = ''; 
    Sk.pre = "output";
    Sk.configure({ output: outf, read: builtinRead });
    var myPromise = Sk.misceval.asyncToPromise(function() {
        return Sk.importMainWithBody("<stdin>", false, prog, true);
    });
    myPromise.then(function(mod) {
        console.log('success');
        checkAnswer();
    },
    function(err) {
        mypre.innerHTML = mypre.innerHTML + err.toString();
    });
}

