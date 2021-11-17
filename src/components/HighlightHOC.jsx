import Popular from "./Popular";
import New from "./New";

const HighlightHOC = (Component) => {
  const wrapper = (props) =>{
    if (props.views >= 1000) {
      return <Popular>
        <Component {...props}></Component>
      </Popular>
    } else if (props.views < 100) {
      return <New>
        <Component {...props}></Component>
      </New>
    }
    return <Component {...props}></Component>
  }
  return wrapper;
}

export default HighlightHOC;