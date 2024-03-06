import React from "react";
import "/loading.css"

const Loading = () => {
  const {isLoading} = false

  return (
    <>
      {isLoading &&
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      }
    </>
  )
}

export default Loading;
