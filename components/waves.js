const waves = ({ color = '#561B25', top = false }) => {
  if (top) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
        <path
          fill={color}
          fillOpacity="1"
          d="M0,96L1440,32L1440,0L0,0Z"
        ></path>
      </svg>
    )
  } else
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 225 1440 90">
        <path
          fill={color}
          fillOpacity="1"
          d="M0,320L1440,256L1440,320L0,320Z"
        ></path>
      </svg>
    )
}

export default waves
