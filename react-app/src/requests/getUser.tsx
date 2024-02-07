import React from "react";

const getUser = async() => {
    const response = await fetch('https://run.mocky.io/v3/3456c3ce-b5b9-4be9-aad9-332832fb2160')
    console.log(response)
    return response
};

export default getUser;