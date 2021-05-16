function shufflea(array) {
    var copy = [], n = array.length, i;
    while (n) {
        
      i = Math.floor(Math.random() * n--);
  
      copy.push(array.splice(i, 1)[0]);
    }
    return copy;
}




arhead = []
for (let i = 1; i < 11; i++){
    arhead.push(i)
}

var switcher = true
function change(){
    if (switcher){
        arhead = shufflea(arhead);
        srthead = ""
        for (let i = 9; i > -1; i--){
            if(i != 0){
                srthead = srthead + arhead[i] + ", "
            }
            else{
                srthead = srthead + arhead[i]
            }
        }
            document.querySelector('#arr').innerHTML = "[" + srthead + "]";
        switcher = false
    }
    else{
        switcher = true
    } 
};
setInterval(change, 5000)
setInterval(function (){
    document.querySelector('#arr').innerHTML = "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
}, 10000)













var selar = [];
var selarcol = [];
var selarcolb = [];
var SelectionChart;
var sG = 1;

var bub = [];
var bubcol = [];
var bubcolb = [];
var BubleChart;
var bG = 1;

var insar = [];
var insarcol = [];
var insarcolb = [];
var InsertChart;
var iG = 1;

var shell = [];
var shellcol = [];
var shellcolb = [];
var ShellChart;
var sheG = 1;

var merge = [];
var mergecol = [];
var mergecolb = [];
var MergeChart;
var meG = 1;

var counte = [];
var countecol = [];
var countecolb = [];
var CountingChart;
var coG = 1;
 


for (var i=1; i<21; i++ ){
    selar.push(i);
    bub.push(i);
    insar.push(i);
    shell.push(i);
    merge.push(i);
    counte.push(i);
};

for (var i=0; i<20; i++ ){
    selarcol.push('rgba('+ (99+selar[i]*6) +',' + (99-selar[i]*3) +', ' + (255-selar[i]*3) +', 1)');
    selarcolb.push('rgba(99, ' + (99+selar[i]) +', ' + (255-selar[i]) +', 1)');

    bubcol.push('rgba('+ (99+bub[i]*3) +',' + (99+bub[i]*2) +', ' + (255-bub[i]) +', 1)');
    bubcolb.push('rgba(99, ' + (99+bub[i]) +', ' + (255-bub[i]) +', 1)');

    insarcol.push('rgba('+ (99+insar[i]*3) +',' + (99+insar[i]*2) +', ' + (255-insar[i]) +', 1)');
    insarcolb.push('rgba(99, ' + (99+insar[i]) +', ' + (255-insar[i]) +', 1)');

    shellcol.push('rgba('+ (99+shell[i]*3) +',' + (99+shell[i]*2) +', ' + (255-shell[i]) +', 1)');
    shellcolb.push('rgba(99, ' + (99+shell[i]) +', ' + (255-shell[i]) +', 1)');

    mergecol.push('rgba('+ (99+merge[i]*6) +',' + (99-merge[i]*3) +', ' + (255-merge[i]*3) +', 1)');
    mergecolb.push('rgba(99, ' + (99+merge[i]) +', ' + (255-merge[i]) +', 1)');    

    countecol.push('rgba('+ (99+counte[i]*6) +',' + (99-counte[i]*3) +', ' + (255-counte[i]*3) +', 1)');
    countecolb.push('rgba(99, ' + (99+counte[i]) +', ' + (255-counte[i]) +', 1)');    


};

document.addEventListener("DOMContentLoaded", function(){
    var selc = document.getElementById('SelectionChart').getContext('2d');
    SelectionChart = new Chart(selc, {
        type: 'bar',
        data: {
            labels: selar,
            datasets: [{
                data: selar,
                label: '№ Элемента',
                backgroundColor: selarcol,
                borderColor: selarcolb,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                }
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip:{
                    callbacks:{
                        label:function(context) {
                            return false;
                        },
                    },
                }
            },
            layout: {
                padding: 20
            },
            labels:{
                display: false
            }

        }
    })

    var bubc = document.getElementById('BubleChart').getContext('2d');
    BubleChart = new Chart(bubc, {
        type: 'bar',
        data: {
            labels: bub,
            datasets: [{
                data: bub,
                label: '№ Элемента',
                backgroundColor: bubcol,
                borderColor: bubcolb,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                }
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip:{
                    callbacks:{
                        label:function(context) {
                            return false;
                        },
                    },
                }
            },
            layout: {
                padding: 20
            },
            labels:{
                display: false
            }

        }
    })

    var insc = document.getElementById('InsertChart').getContext('2d');
    InsertChart = new Chart(insc, {
        type: 'bar',
        data: {
            labels: insar,
            datasets: [{
                data: insar,
                label: '№ Элемента',
                backgroundColor: insarcol,
                borderColor: insarcolb,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                }
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip:{
                    callbacks:{
                        label:function(context) {
                            return false;
                        },
                    },
                }
            },
            layout: {
                padding: 20
            },
            labels:{
                display: false
            }

        }
    })



    var shellc = document.getElementById('ShellChart').getContext('2d');
    ShellChart = new Chart(shellc, {
        type: 'bar',
        data: {
            labels: shell,
            datasets: [{
                data: shell,
                label: '№ Элемента',
                backgroundColor: shellcol,
                borderColor: shellcolb,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                }
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip:{
                    callbacks:{
                        label:function(context) {
                            return false;
                        },
                    },
                }
            },
            layout: {
                padding: 20
            },
            labels:{
                display: false
            }

        }
    })
     var mergec = document.getElementById('MergeChart').getContext('2d');
    MergeChart = new Chart(mergec, {
        type: 'bar',
        data: {
            labels: merge,
            datasets: [{
                data: merge,
                label: '№ Элемента',
                backgroundColor: mergecol,
                borderColor: mergecolb,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                }
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip:{
                    callbacks:{
                        label:function(context) {
                            return false;
                        },
                    },
                }
            },
            layout: {
                padding: 20
            },
            labels:{
                display: false
            }

        }
    })
         var countc = document.getElementById('CountingChart').getContext('2d');
    CountingChart = new Chart(countc, {
        type: 'bar',
        data: {
            labels: counte,
            datasets: [{
                data: counte,
                label: '№ Элемента',
                backgroundColor: countecol,
                borderColor: countecolb,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                }
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip:{
                    callbacks:{
                        label:function(context) {
                            return false;
                        },
                    },
                }
            },
            layout: {
                padding: 20
            },
            labels:{
                display: false
            }

        }
    })
}, false);

function bubbleSort(arr){
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}


function ShuffleB(){
    document.getElementById("Bubbleco").value = 0

    bub.sort(() => Math.random() - 0.5);
    bubcol = []
    bubcolb = []

    for (var i=0; i<20; i++ ){
        bubcol.push('rgba('+ (99+bub[i]*3) +',' + (99+bub[i]*2) +', ' + (255-bub[i]) +', 1)');
        bubcolb.push('rgba(99, ' + (99+bub[i]) +', ' + (255-bub[i]) +', 1)');
    }

    BubleChart.data.labels = bub;
    BubleChart.data.datasets[0].data = bub;
    BubleChart.data.datasets[0].backgroundColor = bubcol;
    BubleChart.data.datasets[0].borderColor = bubcolb;
    BubleChart.update()
}
function SortBO(){
    var g = 0;
    for (var i = 0; i<21;i++){
        if (bub[i] == i+1){
            g++
        }
    }
    if (g == 20 ) return;

    for (var i = 0, endI = bG - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (bub[j] > bub[j + 1]) {
                var swap = bub[j];
                bub[j] = bub[j + 1];
                bub[j + 1] = swap;
            }
        }
    }

    bubcol = []
    bubcolb = []
    bG++
    for (var i=0; i<20; i++ ){
        bubcol.push('rgba('+ (99+bub[i]*3) +',' + (99+bub[i]*2) +', ' + (255-bub[i]) +', 1)');
        bubcolb.push('rgba(99, ' + (99+bub[i]) +', ' + (255-bub[i]) +', 1)');
    }

    BubleChart.data.labels = bub;
    BubleChart.data.datasets[0].data = bub;
    BubleChart.data.datasets[0].backgroundColor = bubcol;
    BubleChart.data.datasets[0].borderColor = bubcolb;
    BubleChart.update()
}

function SortB(){
    var g = 0;
    for (var i = 0; i<21;i++){
        if (bub[i] == i+1){
            g++
        }
    }
    if (g == 20 ) return;


    var time = performance.now();
    bub = bubbleSort(bub)
    time = performance.now() - time;
    bubcol = []
    bubcolb = []

    for (var i=0; i<20; i++ ){
        bubcol.push('rgba('+ (99+bub[i]*3) +',' + (99+bub[i]*2) +', ' + (255-bub[i]) +', 1)');
        bubcolb.push('rgba(99, ' + (99+bub[i]) +', ' + (255-bub[i]) +', 1)');
    };

    BubleChart.data.labels = bub;
    BubleChart.data.datasets[0].data = bub;
    BubleChart.data.datasets[0].backgroundColor = bubcol;
    BubleChart.data.datasets[0].borderColor = bubcolb;
    BubleChart.update()
    bG = 1

    document.getElementById("Bubbleco").value = parseInt(time*1000)
}

function ShuffleSS(){

    document.getElementById("Selco").value = 0

    selar.sort(() => Math.random() - 0.5);
    selarcol = []
    selarcolb = []

    for (var i=0; i<50; i++ ){
        selarcol.push('rgba('+ (99+selar[i]*3) +',' + (99+selar[i]*2) +', ' + (255-selar[i]) +', 1)');
        selarcolb.push('rgba(99, ' + (99+selar[i]) +', ' + (255-selar[i]) +', 1)');
    };

    SelectionChart.data.labels = selar;
    SelectionChart.data.datasets[0].data = selar;
    SelectionChart.data.datasets[0].backgroundColor = selarcol;
    SelectionChart.data.datasets[0].borderColor = selarcolb;
    SelectionChart.update()
}


//Сортировка выбором
function selectionSort(inputArr) {
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Находим наименьшее число в правой части массива
        let min = i;
        for(let j = i; j < n; j++) {
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
            }
            if (min != i) {
                // Заменяем элементы
                let tmp = inputArr[i]; 
                inputArr[i] = inputArr[min];
                inputArr[min] = tmp;
        }
    }
    return inputArr;
}

function SortSS(){
    var g = 0;
    for (var i = 0; i<51;i++){
        if (selar[i] == i+1){
            g++
        }
    }
    if (g == 50 ) return;

    var time = performance.now();
    selar = selectionSort(selar)
    time = performance.now() - time;
    selarcol = []
    selarcolb = []

    document.getElementById("Selco").value = parseInt(time*1000)

    for (var i=0; i<50; i++ ){
        selarcol.push('rgba('+ (99+selar[i]*3) +',' + (99+selar[i]*2) +', ' + (255-selar[i]) +', 1)');
        selarcolb.push('rgba(99, ' + (99+selar[i]) +', ' + (255-selar[i]) +', 1)');
    };

    SelectionChart.data.labels = selar;
    SelectionChart.data.datasets[0].data = selar;
    SelectionChart.data.datasets[0].backgroundColor = selarcol;
    SelectionChart.data.datasets[0].borderColor = selarcolb;
    SelectionChart.update()
    sG = 1
}

function SortSSO(){
    var g = 0;
    for (var i = 0; i<51;i++){
        if (selar[i] == i+1){
            g++
        }
    }
    if (g == 50 ) return;

    var A = selar;
    var n = A.length;
    for (var i = 0; i < sG; i++){
        var min = i;
        for (var j = i+1; j < n; j++){
            if (A[j] < A[min]) min = j;
        } 
            var t = A[min]; A[min] = A[ i ]; A[ i ] = t;
    }
    sG++
    seler = A
    selarcol = []
    selarcolb = []
    for (var i=0; i<50; i++ ){
        selarcol.push('rgba('+ (99+selar[i]*3) +',' + (99+selar[i]*2) +', ' + (255-selar[i]) +', 1)');
        selarcolb.push('rgba(99, ' + (99+selar[i]) +', ' + (255-selar[i]) +', 1)');
    };

    SelectionChart.data.labels = selar;
    SelectionChart.data.datasets[0].data = selar;
    SelectionChart.data.datasets[0].backgroundColor = selarcol;
    SelectionChart.data.datasets[0].borderColor = selarcolb;
    SelectionChart.update()
}

function ShuffleINS(){

    document.getElementById("Insrtco").value = 0

    insar.sort(() => Math.random() - 0.5);
    insarcol = []
    insarcolb = []

    for (var i=0; i<50; i++ ){
        insarcol.push('rgba('+ (99+insar[i]*3) +',' + (99+insar[i]*2) +', ' + (255-insar[i]) +', 1)');
        insarcolb.push('rgba(99, ' + (99+insar[i]) +', ' + (255-insar[i]) +', 1)');
    };

    InsertChart.data.labels = insar;
    InsertChart.data.datasets[0].data = insar;
    InsertChart.data.datasets[0].backgroundColor = insarcol;
    InsertChart.data.datasets[0].borderColor = insarcolb;
    InsertChart.update()
}

function insertionSort(inpArr) {
    let n = inpArr.length;
        
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inpArr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < inpArr[j])) {
                inpArr[j+1] = inpArr[j];
                j--;
            }
            inpArr[j+1] = current;
        }
    return inpArr;
}

function SortI(){
    var g = 0;
    for (var i = 0; i<51;i++){
        if (insar[i] == i+1){
            g++
        }
    }
    if (g == 50 ) return;

    var time = performance.now();
    insar = insertionSort(insar)
    time = performance.now() - time;
    insarcol = []
    insarcolb = []

    document.getElementById("Insrtco").value = parseInt(time*1000)

    for (var i=0; i<50; i++ ){
        insarcol.push('rgba('+ (99+insar[i]*3) +',' + (99+insar[i]*2) +', ' + (255-insar[i]) +', 1)');
        insarcolb.push('rgba(99, ' + (99+insar[i]) +', ' + (255-insar[i]) +', 1)');
    };

    InsertChart.data.labels = insar;
    InsertChart.data.datasets[0].data = insar;
    InsertChart.data.datasets[0].backgroundColor = insar;
    InsertChart.data.datasets[0].borderColor = insar;
    InsertChart.update()
    iG = 1
}
function SortINS(){
    var g = 0;
    for (var i = 0; i<51;i++){
        if (insar[i] == i+1){
            g++
        }
    }
    if (g == 50 ) return;

    var A = insar;
    var n = A.length;
        
        for (let i = 1; i < iG; i++) {
            // Choosing the first element in our unsorted subarray
            let current = A[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < A[j])) {
                A[j+1] = A[j];
                j--;
            }
            A[j+1] = current;
        }
    iG++
    insarcol = []
    insarcolb = []
    for (var i=0; i<50; i++ ){
        insarcol.push('rgba('+ (99+insar[i]*3) +',' + (99+insar[i]*2) +', ' + (255-insar[i]) +', 1)');
        insarcolb.push('rgba(99, ' + (99+insar[i]) +', ' + (255-insar[i]) +', 1)');
    };

    InsertChart.data.labels = insar;
    InsertChart.data.datasets[0].data = insar;
    InsertChart.data.datasets[0].backgroundColor = insar;
    InsertChart.data.datasets[0].borderColor = insar;
    InsertChart.update()
}

function ShuffleShell(){

    document.getElementById("Shellco").value = 0

    shell.sort(() => Math.random() - 0.5);
    shellcol = []
    shellcolb = []

    for (var i=0; i<50; i++ ){
        shellcol.push('rgba('+ (99+shell[i]*3) +',' + (99+shell[i]*2) +', ' + (255-shell[i]) +', 1)');
        shellcolb.push('rgba(99, ' + (99+shell[i]) +', ' + (255-shell[i]) +', 1)');
    };

    ShellChart.data.labels = shell;
    ShellChart.data.datasets[0].data = shell;
    ShellChart.data.datasets[0].backgroundColor = shellcol;
    ShellChart.data.datasets[0].borderColor = shellcolb;
    ShellChart.update()
}

function ShellSort(inputarr) {
    let n = inputarr.length;
        
    for(let i = 0; i < n; i++) {
        // Находим наименьшее число в правой части массива
        let min = i;
        for(let j = i; j < n; j++) {
            if(inputarr[j] < inputarr[min]) {
                min=j; 
            }
            }
            if (min != i) {
                // Заменяем элементы
                let tmp = inputarr[i]; 
                inputarr[i] = inputarr[min];
                inputarr[min] = tmp;
        }
    }
    return inputarr;
}

function SortShe(){
    var g = 0;
    for (var i = 0; i<51;i++){
        if (shell[i] == i+1){
            g++
        }
    }
    if (g == 50 ) return;

    var time = performance.now();
    shell = ShellSort(shell)
    time = performance.now() - time;
    shellcol = []
    shellcolb = []

    document.getElementById("Shellco").value = parseInt(time*1000)

    for (var i=0; i<50; i++ ){
        shellcol.push('rgba('+ (99+shell[i]*3) +',' + (99+shell[i]*2) +', ' + (255-shell[i]) +', 1)');
        shellcolb.push('rgba(99, ' + (99+shell[i]) +', ' + (255-shell[i]) +', 1)');
    };

    ShellChart.data.labels = shell;
    ShellChart.data.datasets[0].data = shell;
    ShellChart.data.datasets[0].backgroundColor = shellcol;
    ShellChart.data.datasets[0].borderColor = shellcolb;
    ShellChart.update()
    sheG = 1
}

function SortMerge(){
    var g = 0;
    for (var i = 0; i<51;i++){
        if (shell[i] == i+1){
            g++
        }
    }
    if (g == 50 ) return;

    var A = shell;
    var n = A.length;

    let gap = Math.floor(n / 2);
    while (gap >= 1) {
        for (let i = gap; i < sheG; i++) {
            const current = A[i];
            let j = i;
            while (j > 0 && A[j - gap] > current) {
                A[j] = A[j - gap];
                j -= gap;
            }
            A[j] = current;
        }
        gap = Math.floor(gap / 2);
};
    sheG++
    shell = A
    shellcol = []
    shellcolb = []
    for (var i=0; i<50; i++ ){
        shellcol.push('rgba('+ (99+shell[i]*3) +',' + (99+shell[i]*2) +', ' + (255-shell[i]) +', 1)');
        shellcolb.push('rgba(99, ' + (99+shell[i]) +', ' + (255-shell[i]) +', 1)');
    };

    ShellChart.data.labels = shell;
    ShellChart.data.datasets[0].data = shell;
    ShellChart.data.datasets[0].backgroundColor = shellcol;
    ShellChart.data.datasets[0].borderColor = shellcolb;
    ShellChart.update()
}

function ShuffleMerge(){

    document.getElementById("Mergeco").value = 0

    merge.sort(() => Math.random() - 0.5);
    mergecol = []
    mergecolb = []

    for (var i=0; i<50; i++ ){
        mergecol.push('rgba('+ (99+merge[i]*3) +',' + (99+merge[i]*2) +', ' + (255-merge[i]) +', 1)');
        mergecolb.push('rgba(99, ' + (99+merge[i]) +', ' + (255-merge[i]) +', 1)');
    };

    MergeChart.data.labels = merge;
    MergeChart.data.datasets[0].data = merge;
    MergeChart.data.datasets[0].backgroundColor = mergecol;
    MergeChart.data.datasets[0].borderColor = mergecolb;
    MergeChart.update()
}

function MergeSort(array) {
{
    if (array.length>1)
    {
        let mid = Math.floor(array.length/2),
        lefthalf = array.slice(0,mid),
        righthalf = array.slice(mid);
        MergeSort(lefthalf)
        MergeSort(righthalf)

        let i = j = k = 0
        while (i<lefthalf.length && j<righthalf.length)
        {
            if (lefthalf[i]<righthalf[j])
            {
                array[k]=lefthalf[i]
                i++;
            }
            else
            {
                array[k]=righthalf[j]
                j++
            }
            k++
        }
        while (i<lefthalf.length)
        {
            array[k]=lefthalf[i]
            i++
            k++
        }
        while( j<righthalf.length)
        {
            array[k]=righthalf[j]
            j++
            k++
        }
    }
    return array
}
}

function SortME(){
    var g = 0;
    for (var i = 0; i<51;i++){
        if (merge[i] == i+1){
            g++
        }
    }
    if (g == 50 ) return;

    var time = performance.now();
    merge = MergeSort(merge)
    time = performance.now() - time;
    mergecol = []
    mergecolb = []

    document.getElementById("Mergeco").value = parseInt(time*1000)

    for (var i=0; i<50; i++ ){
        mergecol.push('rgba('+ (99+merge[i]*3) +',' + (99+merge[i]*2) +', ' + (255-merge[i]) +', 1)');
        mergecolb.push('rgba(99, ' + (99+merge[i]) +', ' + (255-merge[i]) +', 1)');
    };

    MergeChart.data.labels = merge;
    MergeChart.data.datasets[0].data = merge;
    MergeChart.data.datasets[0].backgroundColor = mergecol;
    MergeChart.data.datasets[0].borderColor = mergecolb;
    MergeChart.update()
    meG = 1
}

function SortMerge(){
    var g = 0;
    for (var i = 0; i<51;i++){
        if (merge[i] == i+1){
            g++
        }
    }
    if (g == 50 ) return;


    let A = merge; 
    let n = A.length;

    if (meG>1)
    {
        let mid = Math.floor(A.length/2),
        lefthalf = A.slice(0,mid),
        righthalf = A.slice(mid);
        MergeSort(lefthalf)
        MergeSort(righthalf)

        let i = j = k = 0
        while (i<meG && j<meG)
        {
            if (lefthalf[i]<righthalf[j])
            {
                A[k]=lefthalf[i]
                i++;
            }
            else
            {
                A[k]=righthalf[j]
                j++
            }
            k++
        }
        while (i<lefthalf.length)
        {
            A[k]=lefthalf[i]
            i++
            k++
        }
        while( j<righthalf.length)
        {
            A[k]=righthalf[j]
            j++
            k++
        }
    }

    meG++
    merge = A
    mergecol = []
    mergecolb = []
    for (var i=0; i<50; i++ ){
        mergecol.push('rgba('+ (99+merge[i]*3) +',' + (99+merge[i]*2) +', ' + (255-merge[i]) +', 1)');
        mergecolb.push('rgba(99, ' + (99+merge[i]) +', ' + (255-merge[i]) +', 1)');
    };

    MergeChart.data.labels = merge;
    MergeChart.data.datasets[0].data = merge;
    MergeChart.data.datasets[0].backgroundColor = mergecol;
    MergeChart.data.datasets[0].borderColor = mergecolb;
    MergeChart.update()
}
function ShuffleCounte(){

    document.getElementById("Counteco").value = 0

    counte.sort(() => Math.random() - 0.5);
    countecol = []
    countecolb = []

    for (var i=0; i<50; i++ ){
        countecol.push('rgba('+ (99+counte[i]*3) +',' + (99+counte[i]*2) +', ' + (255-counte[i]) +', 1)');
        countecolb.push('rgba(99, ' + (99+counte[i]) +', ' + (255-counte[i]) +', 1)');
    };

    CountingChart.data.labels = counte;
    CountingChart.data.datasets[0].data = counte;
    CountingChart.data.datasets[0].backgroundColor = countecol;
    CountingChart.data.datasets[0].borderColor = countecolb;
    CountingChart.update()
}

function CountingSort(A) {
   
    var n = A.length, Count = [], B = [];
    for (var i = 0; i < n; i++) Count[ i ] = 0;
    for (var i = 0; i < n-1; i++)
     { for (var j = i+1; j < n; j++)
        { if (A[ i ] < A[j]) Count[j]++;
          else Count[ i ]++;
        }
     }
    for (var i = 0; i < n; i++) B[Count[ i ]] = A[ i ];
    return B;
}


function SortCO(){
    var g = 0;
    for (var i = 0; i<51;i++){
        if (counte[i] == i+1){
            g++
        }
    }
    if (g == 50 ) return;

    var time = performance.now();
    counte = CountingSort(counte)
    time = performance.now() - time;
    countecol = []
    countecolb = []

    document.getElementById("Counteco").value = parseInt(time*1000)

    for (var i=0; i<50; i++ ){
        countecol.push('rgba('+ (99+counte[i]*3) +',' + (99+counte[i]*2) +', ' + (255-counte[i]) +', 1)');
        countecolb.push('rgba(99, ' + (99+counte[i]) +', ' + (255-counte[i]) +', 1)');
    };

    CountingChart.data.labels = counte;
    CountingChart.data.datasets[0].data = counte;
    CountingChart.data.datasets[0].backgroundColor = countecol;
    CountingChart.data.datasets[0].borderColor = countecolb;
    CountingChart.update()
    coG = 1
}

function SortCounte(){
    var g = 0;
    for (var i = 0; i<51;i++){
        if (counte[i] == i+1){
            g++
        }
    }
    if (g == 50 ) return;

    var A = counte
    console.log(counte)
    console.log( typeof counter)
    var n = A.length, Count = [], B = [];
    for (var i = 0; i < n; i++) Count[ i ] = 0;
    for (var i = 0; i < n-1; i++)
     { for (var j = i+1; j < n; j++)
        { if (A[ i ] < A[j]) Count[j]++;
          else Count[ i ]++;
        }
     }
    for (var i = 0; i < n; i++) B[Count[ i ]] = A[ i ];

console.log(counte[0])
console.log( typeof counter)
    coG++
    counte = B
    countecol = []
    countecolb = []
    for (var i=0; i<50; i++ ){
        countecol.push('rgba('+ (99+counte[i]*3) +',' + (99+counte[i]*2) +', ' + (255-counte[i]) +', 1)');
        countecolb.push('rgba(99, ' + (99+counte[i]) +', ' + (255-counte[i]) +', 1)');
    };

    CountingChart.data.labels = counte;
    CountingChart.data.datasets[0].data = counte;
    CountingChart.data.datasets[0].backgroundColor = countecol;
    CountingChart.data.datasets[0].borderColor = countecolb;
    CountingChart.update()
}
