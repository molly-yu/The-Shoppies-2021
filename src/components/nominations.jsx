import React from 'react';

const Nominations = ({nominations=[], remove}) => {
  return (
    <>
    { nominations.map((data,index) => {
        if (data) {
          return (
            <div key={data.Title}>
                <p>{data.Title}</p>
                    <button onClick={() => { remove(data) }}>X</button>
            </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default Nominations