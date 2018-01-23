(function($) {
  console.time('0')
  $.get('/api/test').then(function(res) {
    var str = '<ul>'
    res.forEach(function(data) {
      str += '<li id="' + data.id + '">' + data.title + '</li>'
    })
    str += '</ul>'
    console.time('1')
    $('#root').html(str)
    console.timeEnd('1')
    console.timeEnd('0')
  })
})(jQuery)