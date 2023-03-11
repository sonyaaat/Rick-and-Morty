import { Blocks } from  'react-loader-spinner'
import css  from "../Spinner/Spinner.module.css"
const Spinner=()=>{
return(
    <div className={css.spinner}>
    <Blocks 
    visible={true}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
  />
  </div>
)
}
export default Spinner