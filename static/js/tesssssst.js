function test(){
  $('body').on('click',function(){
    console.log(this);
  })
}
export {
  test
}