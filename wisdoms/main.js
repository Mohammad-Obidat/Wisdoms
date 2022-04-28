let _wisdoms = [];
let _idNum;

const renderWisdoms = (wisdomsArr) => {
  $('#wisdoms').empty();
  wisdomsArr.forEach((e) => {
    let addPara = `<div id= '${e.id}' class='container'>
                         <p class='para'>${e.text}</p> 
                         <div class= 'deleteIcon' onclick='deleteById(${e.id})'><i class=" fas fa-times-circle"></i></div>
                         </div>`;
    $('#wisdoms').append(addPara);
  });
};

window.addEventListener('DOMContentLoaded', () => {
  let wisdom = localStorage.getItem('wisdoms');
  _wisdoms = JSON.parse(wisdom || '[]');
  renderWisdoms(_wisdoms);
  _idNum = _wisdoms.length;
});

const submitWisdom = () => {
  _wisdoms.push({ id: _idNum, text: $('#inputWisdom').val() });
  localStorage.wisdoms = JSON.stringify(_wisdoms);
  renderWisdoms(_wisdoms);
  $('#inputWisdom').val('');
  _idNum++;
};

const deleteAll = () => {
  if (confirm('Are you sure you want to delete all the wisdoms?')) {
    localStorage.clear();
    $('#wisdoms').empty();
    _wisdoms = [];
  } else {
    // Do nothing!
  }
};

const deleteById = (id) => {
  let wisdom = localStorage.getItem('wisdoms');
  let wisdomParsed = JSON.parse(wisdom || '[]');
  wisdomParsed.forEach((w) => {
    if (w.id === id) {
      let index = wisdomParsed.indexOf(w);
      wisdomParsed.splice(index, 1);
      _wisdoms.splice(index, 1);
      localStorage.wisdoms = JSON.stringify(wisdomParsed);
      $(`#${id}`).remove();
    }
  });
};
