export const fetchResponse = async (chat) => {
    // console.log(chat)
  try {
    const response = await fetch("http://localhost:3080/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      // headers: {'Content-Type': undefined},
      body: JSON.stringify({
        message: chat.map((message) => message.message).join(" \n "),
      }),
    });

    const data = await response.json();
    // console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
};
