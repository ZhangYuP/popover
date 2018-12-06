$(clickMe).on('click', function(){
  $(popover).toggle()
  $(document).one('click', function(){
    $(popover).hide()
  })
})
$(wrapper).on('click', function(e){
  e.stopPropagation()
})