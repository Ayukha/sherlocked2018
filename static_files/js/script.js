//function one(element, eventType, callback, self) {
//    var one = function (event) {
//        try {
//            callback.call(self, event);
//        } finally {
//            element.removeEventListener(eventType, one);
//        }
//    }
//    element.addEventListener(eventType, one);
//}

function toggleNav() {
    document.getElementById('navbar').classList.toggle('enlarge');
    document.getElementById('sher').classList.toggle('hidden');
    document.getElementById('answer').classList.toggle('hidden');
    document.getElementById('solve').classList.toggle('hidden');
}

//document.getElementById('description_container').one('click', function (e) {
//    e.classList.remove('hidden');
//})

//function open_des(e) {
//    var x = document.getElementById('description_container');
//    x.classList.remove('hidden');
//    x.classList.add('fadeInDownBig');
//    x.classList.remove('fadeOutDownBig');
//}

function close_des() {
    var y = document.getElementById('description_container');
    var x = document.getElementById('question_container');
    y.classList.remove('fadeIn');
    y.classList.add('fadeOut');
    setTimeout(function () {
        y.classList.add('hidden');
        x.classList.remove('hidden');
        x.classList.add('fadeIn');
    }, 1000);

}
