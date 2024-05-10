// Get UI

const languages = ['Nodejs', 'Reactjs', 'Vuejs', 'Laravel'];
const colors = ['red', 'skyblue', 'violet', 'yellow'];
const gettxtani = document.querySelector('.txtani');
const textlights = document.querySelectorAll('.text-light');

// console.log(languages);
// console.log(languages[0]);    //         Nodejs
// console.log(languages.indexOf('Reactjs'));       //      1
// console.log(languages.indexOf('laravel'));       //      -1 case sensitive
// console.log(languages.indexOf('Laravel'));       //       3

// console.log(colors[languages.indexOf('Reactjs')]);   //      skyblue
// console.log(colors[languages.indexOf('Laravel')]);   //       yellow

function* generator() {
    var idx = 0;

    while (true) {
        yield idx++;

        if (idx > 3) {
            idx = 0;
        }
    }
}

const genfun = generator();
// console.log(genfun.next());  //  {value: 0, done: false}

//                                before if condition,  after if condition
// console.log(genfun.next().value);  //  0         0
// console.log(genfun.next().value);  //  1         1
// console.log(genfun.next().value);  //  2         2
// console.log(genfun.next().value);  //  3         3
// console.log(genfun.next().value);  //  4         0
// console.log(genfun.next().value);  //  5         1

// console.log(languages[genfun.next().value]);    //         Nodejs
// console.log(languages[genfun.next().value]);    //         Reactjs
// console.log(languages[genfun.next().value]);    //         Vuejs
// console.log(languages[genfun.next().value]);    //         Laravel
// console.log(languages[genfun.next().value]);    //         Nodejs
// console.log(languages[genfun.next().value]);    //         Reactjs

function showwords(word) {
    // console.log(word);       //  Nodejs
    // console.log(word[0]);   //  N

    gettxtani.innerHTML = '';
    gettxtani.classList.add(colors[languages.indexOf(word)]);

    // gettxtani.innerHTML = word;
    // gettxtani.innerHTML = word[0]; // N
    // gettxtani.innerHTML += word[1]; // No
    // gettxtani.innerHTML += word[2]; // Nod

    let x = 0;
    let showinterval = setInterval(function () {
        if (x >= word.length) {
            clearInterval(showinterval);
            deletewords();
        } else {
            gettxtani.innerHTML += word[x];
            x++;
        }
    }, 300);
}

function deletewords() {
    let getword = gettxtani.innerHTML;
    // console.log(getword);    //   Nodejs

    let getlastid = getword.length - 1;
    // console.log(getlastid);   //   5

    let delinterval = setInterval(function () {
        if (getlastid >= 0) {
            gettxtani.innerHTML = gettxtani.innerHTML.substring(
                0,
                gettxtani.innerHTML.length - 1
            );
            getlastid--;
        } else {
            // remove old color
            gettxtani.classList.remove(colors[languages.indexOf(getword)]);

            // get new language
            showwords(languages[genfun.next().value]);
            clearInterval(delinterval);
        }
    }, 300);
}

showwords(languages[genfun.next().value]);


textlights.forEach(function(textlight ){

    let arrtexts = textlight.textContent.split('');
    // console.log(arrtexts);

    textlight.innerHTML = '';

    arrtexts.forEach(function(arrtext, idx){

        let newem = document.createElement('em');
        newem.textContent = arrtext;

        newem.style.animationDelay = `${idx * 0.3}s`;

        textlight.append(newem);
    })
})