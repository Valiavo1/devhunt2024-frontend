import React from "react"

const Icon = ({icon, ...props}) => {
  return React.cloneElement(icon, {...props})
}
export default Icon
