import classes from './test.module.scss'

function InputText(){

  return(
    <div>
      <input type="text" className={classes.text}/>
    </div>
  );
}

export default InputText;