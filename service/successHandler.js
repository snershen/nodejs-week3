const successHandler = (res, data) => {
  // Express 預設狀態碼是 200，所以這裡可省略不寫
  // send 依照傳入的型別決定回傳的格式
  res.send({
    status: true,
    data
  })
  res.end();
};

module.exports = successHandler;
