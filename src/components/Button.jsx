export default function Button(props) {
  return (
    <a
      className={`button ${props.className}`}
      aria-label={`button ${props.ariaLabel}`}
      tabIndex={`${props.tabIndex}`}
      href='#'
    >
      {props.content}
    </a>
  )
}
