import PropTypes from 'prop-types';
import { cn } from "../utils/cn"

const Container = (props) => {
  return (
    <div
      className={cn(
        "container px-8 mx-auto xl:px-5",
        props.large ? " max-w-screen-xl" : " max-w-screen-lg",
        !props.alt && "py-5 lg:py-8",
        props.className
      )}>
      {props.children}
    </div>
  )
}

Container.propTypes = {
    large: PropTypes.any,
    alt: PropTypes.any,
    className: PropTypes.any,
    children: PropTypes.any,
}

export default Container