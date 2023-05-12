import Styles from './smallLoader.module.css';

export default function SmallLoader(props){
    return(

        <div className={props.size === "xs" ? `${Styles.xs}` : `${Styles.loader}`} ></div>
    )
}