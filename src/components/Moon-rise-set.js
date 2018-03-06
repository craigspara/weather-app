import React, { Component } from 'react';

export const MoonRiseSet = (props) => {
  const moondataurl = 'https://cors-anywhere.herokuapp.com/http://aa.usno.navy.mil/rstt/onedaytable?ID=AA&year=2018&month=3&day=5&state=NH&place=Concord';

  async function getRawData(url)  {
    let response = await fetch(url);
    console.log(response);
    return await response.text();
  }


  getRawData(moondataurl).then((data) => console.log(data));

  return (
    <div>Moon Rise and Set</div>
  )

};