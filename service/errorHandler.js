const errorHandler = (res, err) => {
  let message = '';
  if(err){
    message = err;
  }else{
    message = "欄位未填寫正確，或無此 ID"
  }
  res.status(400).send({
    success: false,
    message
  })
  res.end();
};

module.exports = errorHandler;
