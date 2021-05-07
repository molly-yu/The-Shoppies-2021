import React from 'react';

const Nominations = ({nominations=[]}) => {
  return (
    <>
    { nominations.map((data,index) => {
        if (data) {
          return (
            <div key={data}>
              <p>{data}</p>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default Nominations