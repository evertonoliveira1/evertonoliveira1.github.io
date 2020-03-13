const BASE_URL = "https://random-questions.herokuapp.com/randomize?lang=pt";

const get = (url) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url,
      type: 'get',
      success: (response) => resolve(response),
      error: (error) => reject(error),
    });
  });
};

const init = async () => {
  //debugger;
  const data = await get(`${BASE_URL}`);
  console.log(data);
  $(`#question`).html(data);

};

init();