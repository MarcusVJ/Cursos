export default function (props) {
  if (props.teste === true) {
    return props.children;
  } else {
    return false;
  }
}
