import React from 'react';

const LocationSearchPanel = (props) => {
  console.log(props);

  const locations = [
    '26/10, Vikas nagar, Lucknow',
    '26/36, Chdai nagar, Kanpur',
    '22/16, Indira nagar, Amoasu',
    '26/16, Gomit nagar, Raebareli',
    '26/16, fuxkc nagar, Raebareli',
  ];

  return (
    <div className="mt-[-38px]">
      {locations.map((loc, index) => (
        <div
          key={index}
          className="flex items-center justify-start p-3 mb-2 active:border-2 border-black rounded-md"
        >
          <div
            className="flex items-center justify-start"
            onClick={() => {
              props.setVehiclePanel(true)
              props.setPanelOpen(false)
            }}
          >
            <h2 className="bg-[#eeeeee] h-8 w-10 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-line"></i>
            </h2>
            <h4 className="font-medium px-2">{loc}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
