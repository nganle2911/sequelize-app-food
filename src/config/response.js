// 200
const successCode = (res, data, message) => {
  res.status(200).json({
    message,
    content: data,
  });
};

// 400
const failedCode = (res, message) => {
  res.status(400).json({
    message,
  });
};

// 404 - Not Found 
const errorRequest = (res, message) => {
  res.status(404).json({
    message,
  });
};

// 500
const errorCode = (res, message) => {
  res.status(500).json({
    message,
  });
};

export { successCode, failedCode, errorRequest, errorCode };